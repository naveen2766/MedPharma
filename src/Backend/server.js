const express = require("express");
const path = require("path");
const cors = require("cors");
const fs = require("fs");
const { parse } = require("csv-parse");

const { open } = require("sqlite");
const sqlite3 = require("sqlite3");
const app = express();
app.use(cors());
app.use(express.json());

const dbPath = path.join(__dirname, "MedPharma.db");

let b = null;

const initializeServerAndDB = async () => {
  try {
    db = await open({
      filename: dbPath,
      driver: sqlite3.Database,
    });
    app.listen(5000, () => {
      console.log("server running at 5000");
    });
  } catch (error) {
    console.log("DB Error: ", console.error());
    process.exit(1);
  }
};

initializeServerAndDB();

app.post("/reg", async (req, res) => {
  const { data } = req.body;
  const { name, username, email, password, number } = data;
  console.log(name, username, password);
  const addUser = `
                insert into user_details(username,name,email,password) 
                values('${username}','${name}','${email}','${password}');`;

  const dbResponse = await db.run(addUser);
  res.json({ message: "Data stored successfully." });
});

app.post("/login", async (req, res) => {
  const { data } = req.body;
  const { username, password } = data;
  //   console.log("details ", data);

  const selectUserQuery = `SELECT * FROM user_details WHERE username = '${username}'`;
  const dbUser = await db.get(selectUserQuery);
  if (dbUser === undefined) {
    res.json({ status: 300, message: "User not found" });
  } else {
    if (dbUser.password === password)
      res.json({ message: "login successful", dbUser });
    else res.json({ status: 200, message: "Invalid username/password" });
  }
});

app.get("/csvdata", async (req, res) => {
  try {
    const csvData = [];
    fs.createReadStream("./csvData.csv")
      .pipe(parse({ delimiter: ",", from_line: 2 }))
      .on("data", function (rowData) {
        csvData.push(rowData);
      })
      .on("error", function (error) {
        // console.log(error.message);
        res.status(500).json({ error: "Error parsing CSV data" });
      })
      .on("end", function () {
        res.json({ csvData });
      });
  } catch (error) {
    // console.error("Error reading CSV file:", error);
    res.status(500).json({ error: "Error reading CSV data" });
  }
});
