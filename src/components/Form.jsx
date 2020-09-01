import React, { Component } from "react";

export default class Form extends Component {
  constructor(props) {
    super(props);

    this.state = {
      value: "",
      data: [],
    };
  }
  t;
  handleChange = (e) => {
    this.setState({
      value: e.target.value,
    });
  };

  handleOnSubmit = (e) => {
    const newValue = { id: 1, value: this.state.value };
    //const tdata = this.state.data.push(newValue);
    this.setState({
      data: [...this.state.data, newValue],
      value: "",
    });
    newValue.id += 1;

    console.log("summited", this.state.data);

    e.preventDefault();
  };

  render() {
    return (
      <div
        style={{
          backgroundColor: "blue",
          margin: "20rem auto",
          maxWidth: "20rem",
        }}
      >
        <form onSubmit={this.handleOnSubmit}>
          <label htmlFor="name">
            Name:
            <input
              type="text"
              value={this.state.value}
              onChange={this.handleChange}
            />{" "}
          </label>
          <input type="submit" value="Submit" />
        </form>
        <div>
          {this.state.data.map((value) => {
            return <h2>{value.value}</h2>;
          })}
        </div>
      </div>
    );
  }
}
