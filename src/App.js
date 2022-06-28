import React, { Component } from "react";
import Select from "./Select";
import Email from "./Email";
import "./styles.css";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "", //text
      cities: ["Москва", "Уфа", "Дюртюли"], //cities
      currentCity: ""
    };
    this.deleteAll = this.deleteAll.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.deleteCity = this.deleteCity.bind(this);
    this.handleChangeTwo = this.handleChangeTwo.bind(this);
    this.deleteText = this.deleteText.bind(this);
  }
  handleChangeTwo(event) {
    this.setState({
      email: event.target.value
    });
  }

  deleteText() {
    this.setState({
      email: ""
    });
  }

  deleteCity() {
    this.setState({
      currentCity: ""
    });
  }
  handleChange(event) {
    this.setState({
      currentCity: event.target.value
    });
  }
  deleteAll() {
    this.setState({
      email: "",
      currentCity: ""
    });
  }
  render() {
    return (
      <div className="App">
        <Select
          cities={this.state.cities}
          currentCity={this.state.currentCity}
          onChange={this.handleChange}
          deleteCity={this.deleteCity}
        />
        <Email
          customValue={this.state.email}
          onCustomChange={this.handleChangeTwo}
          deleteText={this.deleteText}
        />
        <button onClick={this.deleteAll}>Очистить все</button>
      </div>
    );
  }
}
