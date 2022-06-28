import React, { Component } from "react";
import "./styles.css";

export default class Email extends Component {
  render() {
    return (
      <div className="Email">
        <button onClick={this.props.deleteText}>Очистить</button>
        <input
          value={this.props.customValue}
          onChange={this.props.onCustomChange}
        ></input>
        <p>Текст:{this.props.customValue}</p>
      </div>
    );
  }
}
