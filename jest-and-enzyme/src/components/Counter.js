import React from "react";

class Counter extends React.Component {
  state = {
    counter: 0
  };
  render() {
    return (
      <div data-test="component-counter">
        <h1 data-test="counter-display">{this.state.counter}</h1>
        <button
          data-test="increment-button"
          onClick={() => this.setState({ counter: this.state.counter + 1 })}
        >
          +
        </button>
      </div>
    );
  }
}

export default Counter;
