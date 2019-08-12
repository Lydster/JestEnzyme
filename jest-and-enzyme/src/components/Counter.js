import React from "react";

class Counter extends React.Component {
  state = {
    counter: 0
  };
  render() {
    return (
      <div data-test="component-counter">
        <h1 data-test="counter-display">count goes here</h1>
        <button data-test="increment-button">+</button>
      </div>
    );
  }
}

export default Counter;
