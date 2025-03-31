import React from "react";

const CounterAreaItem = ({ amount, info }) => {
  return (
    <div className="counter-item">
      <span className="count" data-count="535">
        {Number(amount) + "+"}
      </span>
      <p>
        {info[0]} <span>{info[1]}</span>
      </p>
    </div>
  );
};

export default CounterAreaItem;
