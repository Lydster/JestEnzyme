import React from "react";

const CounterError = props => {
  let errorClass = props.activeErr ? "show" : "hidden";

  return (
    <div>
      <h3 className={errorClass}>You can not decrement below 0</h3>
    </div>
  );
};

export default CounterError;
