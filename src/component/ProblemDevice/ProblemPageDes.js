import React from "react";
import "../ProblemDevice/ppBody.css";
export function ProblemPageDes() {
  return (
    <div className="SelectContainers">
      <div className="upContainer">
        <div className="firstSelectioncon">
          <button className="Selectionbtn"> Speaker</button>
          <button className="Selectionbtn"> Speaker</button>
          <button className="Selectionbtn"> Speaker</button>
          <button className="Selectionbtn"> Speaker</button>
        </div>
        <div className="secondSelectioncon">
          <button className="Selectionbtn"> Speaker</button>
          <button className="Selectionbtn"> Speaker</button>
          <button className="Selectionbtn"> Speaker</button>
          <button className="Selectionbtn"> Speaker</button>
        </div>
      </div>
      <div className="downContiner">
        <div className="firstDowncon">
          <label for="exampleDataList" className="form-label">
            Others
          </label>
          <input
            className="form-control"
            list="datalistOptions"
            id="exampleDataList"
            placeholder="Type Problem here"
          />
          <datalist id="datalistOptions">
            <option value="San Francisco" />
            <option value="New York" />
            <option value="Seattle" />
            <option value="Los Angeles" />
            <option value="Chicago" />
          </datalist>
        </div>
        <div className="secondDowncon">
          <label for="formFileMultiple" className="form-label">
            Upload Picture (Optional)
          </label>
          <input
            className="form-control"
            type="file"
            id="formFileMultiple"
            multiple
          ></input>
        </div>
      </div>
    </div>
  );
}
