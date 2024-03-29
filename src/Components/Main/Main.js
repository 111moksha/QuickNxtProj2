import React from "react";
import "./Main.css";
import "../../App.css"

const Main = () => {
  return (
    <div className="container main">
        <div className="left">
          <div className="box"></div>
        </div>
        <div className="right">
          <p className="h6"><b>Program Title</b></p>
          <p className="h5">Program Price</p>
          <p className="h4">View available batches below</p>
        </div>
    </div>
  );
};

export default Main;
