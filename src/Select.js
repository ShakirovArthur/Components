import React, { Component } from "react";
import "./styles.css";

export default class City extends Component {
  render() {
    return (
      <div>
        <button onClick={this.props.deleteCity}>Очистить</button>
        <select onChange={this.props.onChange}>
          {this.props.cities.map((name) => (
            <option key={name} value={name}>
              {name}
            </option>
          ))}
        </select>
        <p> Город:{this.props.currentCity}</p>
      </div>
    );
  }
}
