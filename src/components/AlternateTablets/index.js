// AlternateTablets.js
import React, { Component } from "react";
import "./index.css";
import TabletItem from "./TabletItem";
import { v4 as uuid } from "uuid";

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
      <div className="container-alt-tab-search">
        <h1 className="alt-search-heading">Search Alternative Tablet</h1>
        <div className="search-container">
          <label htmlFor="tablet" className="search-label">
            Enter tablet
          </label>
          <input
            type="text"
            id="tablet"
            className="search-input"
            placeholder="Enter Tablet Name"
            onChange={this.onChangeTablet}
          />
        </div>
        {filteredTablets.map((item, index) => (
          <TabletItem key={uuid()} tabletDetails={item} />
        ))}
      </div>
    );
  }
}

export default AlternateTablets;
