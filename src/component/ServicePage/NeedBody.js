import React from "react";
import "./Need.css";
export function NeedBody() {
  return (
    <>
      <div className="dateContainer">
        <input type="date"></input>
        <div className="selectionDate">
          <button className="Selectiondatebtn">8AM-10AM</button>
          <button className="Selectiondatebtn">8AM-10AM</button>
          <button className="Selectiondatebtn">8AM-10AM</button>
          <button className="Selectiondatebtn">8AM-10AM</button>
          <button className="Selectiondatebtn">8AM-10AM</button>
        </div>
      </div>
    </>
  );
}
