import React from "react";
import Odometer from "react-odometerjs";

const CounterAreaItem = ({ amount, info }) => {
  var amount = Number(amount)
  return (
    <div className="counter-item">
      <span className="count" data-count="535">
        {amount + '+'}
      </span>
      <p>
        {info[0]} <span>{info[1]}</span>
      </p>
    </div>
  );
};

export default CounterAreaItem;
