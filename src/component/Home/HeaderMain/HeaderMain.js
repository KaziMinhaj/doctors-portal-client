import React from "react";
import chair from "../../../images/chair.png";
const HeaderMain = () => {
  return (
    <main style={{ height: "600px" }} className="row d-flex align-items-center">
      <div className="col-md-4 offset-md-1">
        <h1 style={{ color: "#3A4256" }}>
          Your new smile <br /> Starts here
        </h1>
        <p>
          Esse elit aliqua et velit est minim sint ea tempor veniam ea.Esse elit
          aliqua et velit est minim sint ea tempor veniam ea.
        </p>
        <button
          style={{ backgroundColor: "#16D2C2", color: "white" }}
          className="btn"
        >
          Get Appointment
        </button>
      </div>
      <div className="col-md-6">
        <img className="img-fluid" src={chair} alt="" />
      </div>
    </main>
  );
};

export default HeaderMain;
