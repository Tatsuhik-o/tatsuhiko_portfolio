import React from "react";
import CounterAreaItem from "./CounterAreaItem ";

const CounterArea = () => {
  return (
    <div className="counter-area">
      <div className="container">
        <div className="counter-item-wrap">
          <div className="row">
            <div className="col-lg-3 col-sm-6">
              <CounterAreaItem amount={45} info={["Projects", "Completed"]} />
            </div>

            <div className="col-lg-3 col-sm-6">
              <CounterAreaItem amount={12} info={["Happy", "Clients"]} />
            </div>

            <div className="col-lg-3 col-sm-6">
              <CounterAreaItem amount={8} info={["Years", "Of Experiences"]} />
            </div>

            <div className="col-lg-3 col-sm-6">
              <CounterAreaItem amount={2500} info={["Lines of Codes"]} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CounterArea;
