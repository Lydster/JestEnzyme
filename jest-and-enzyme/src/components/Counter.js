import React from "react";

const Counter = () => {
  return (
    <div data-test="component-counter">
      <h1 data-test="counter-display">count goes here</h1>
      <button data-test="increment-button">+</button>
    </div>
  );
};

export default Counter;
