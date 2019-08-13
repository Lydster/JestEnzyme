import React from "react";

import CounterError from "./CounterError";

class Counter extends React.Component {
  state = {
    counter: 0,
    activeErr: false
  };

  toggleErr = () => {
    this.setState({ activeErr: !this.state.activeErr });
  };

  ErrOff = () => {
    this.setState({ activeErr: false });
  };

  handleIncrement = () => {
    this.setState({ counter: this.state.counter + 1 });
    this.ErrOff();
  };

  handleDecrement = () => {
    this.state.counter == 0
      ? this.toggleErr()
      : this.state.counter > 0
      ? this.setState({ counter: this.state.counter - 1 })
      : this.setState({ counter: this.state.counter });
  };

  render() {
    return (
      <div data-test="component-counter">
        <h1 data-test="counter-display">{this.state.counter}</h1>

        <button data-test="decrement-button" onClick={this.handleDecrement}>
          -
        </button>
        <button data-test="increment-button" onClick={this.handleIncrement}>
          +
        </button>
        <CounterError activeErr={this.state.activeErr} />
      </div>
    );
  }
}

export default Counter;
