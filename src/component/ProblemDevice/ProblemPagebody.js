import React from "react";
import "../ProblemDevice/ppBody.css";
export function ProblemPageBody() {
  return (
    <div className="brandbox">
      <div className="leftbrandbox">
        <div className="firstleftbrandbox">
          <span className="textname">Brand/Model:</span>
          <span className="details">iphone 13</span>
        </div>
        <div className="secondleftbrandbox">
          <span className="textname">Problem:</span>
          <span className="details">Battery and Screen</span>
        </div>
      </div>
      <div className="right-brand">
        <i className="fa-sharp fa-solid fa-caret-up"></i>
      </div>
    </div>
  );
}
