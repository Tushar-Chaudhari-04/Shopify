import React, { useEffect, useRef } from "react";
import ReactDOM from "react-dom";
import Countdown from "react-countdown";
import "./CountDownTimer.css";

const CountDownTimer = (props) => {
  const perDay = 86400000;
  const noofdays = 5;
  const offerDays = noofdays * perDay;
  // Random component
  const Completionist = () => <span></span>;

  // Renderer callback with condition
   const renderer = ({ days, hours, minutes, seconds, completed }) => {
      if (completed) {
        // Render a completed state
        return <Completionist />;
      } else {
        // Render a countdown
        return (
          <div
            className="card countdown-display"
            style={{
              height: "14rem",
              width: "60rem",
              margin: "30px 0px 30px 14%",
            }}
          >
            <div className="countdown">
              <h5 style={{ color: "white" }}>End of Diwali Sale</h5>
              <h3 style={{ color: "white" }}>
                Upto 50-60% Off!Grab the Deal Now
              </h3>
              <div>
                <p style={{ marginLeft: "5px" }}>
                  <span className="counter">{days}</span>
                  <span className="counter">:</span>
                  <span className="counter">{hours}</span>
                  <span className="counter">:</span>
                  <span className="counter">{minutes}</span>
                  <span className="counter">:</span>
                  <span className="counter">{seconds}</span>
                </p>
                {/* <p style={{marginLeft:"5px"}}><span className="">Days</span><span className="">Hours</span><span className="">Minutes</span><span className="">Seconds</span></p> */}
              </div>
            </div>
          </div>
        );
      }
    };

    // useEffect(()=>{
    //   renderer
    // },[])
  return (
    <div>
      <Countdown date={Date.now() + offerDays} renderer={renderer} />
    </div>
  );
};

export default CountDownTimer;
