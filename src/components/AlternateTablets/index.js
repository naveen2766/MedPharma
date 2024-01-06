// AlternateTablets.js
import React, { Component } from "react";
import "./index.css";
import TabletItem from "./TabletItem";

class AlternateTablets extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      tablet: "",
    };
  }

  onChangeTablet = (event) => {
    this.setState({ tablet: event.target.value });
  };

  componentDidMount() {
    this.fetchData();
  }

  fetchData = async () => {
    try {
      const response = await fetch("http://localhost:5000/csvdata");
      const result = await response.json();
      this.setState({ data: result.csvData });
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  render() {
    const { tablet } = this.state;
    const filteredTablets = this.state.data.filter((item) =>
      item[1].toLowerCase().includes(tablet)
    );
    console.log(filteredTablets);
    if (!Array.isArray(this.state.data)) {
      return <p>Loading...</p>;
    }

    return (
      <div className="container">
        <h1>Search Alternative Tablet</h1>
        <label htmlFor="tablet">Enter tablet</label>
        <input type="text" id="tablet" onChange={this.onChangeTablet} />
        {filteredTablets.map((item, index) => (
          <TabletItem key={index} tabletDetails={item} />
        ))}
      </div>
    );
  }
}

export default AlternateTablets;
