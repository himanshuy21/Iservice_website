import React from "react";
import "./Location.css";
import { AddressMap } from "./Map";
export function LocationDetail() {
  return (
    <>
      <div className="locationContainer">
        <div className="upLocation">
          <div className="upLeftlocation">
            <div className="groupInput">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                className="form-control"
                placeholder="Username"
                aria-label="Username"
                aria-describedby="basic-addon1"
              />
            </div>
            <div className="groupInput">
              <label htmlFor="name">Address</label>
              <input
                type="text"
                className="form-control"
                placeholder="Please Enter Address"
                aria-label="Address"
                aria-describedby="basic-addon1"
              />
            </div>
          </div>
          <div className="upRightLocation">
            <div className="groupInput">
              <label htmlFor="name">Phone Number</label>
              <input
                type="text"
                className="form-control"
                placeholder="E.g - 8955662365"
                aria-label="Username"
                aria-describedby="basic-addon1"
              />
            </div>
          </div>
        </div>
        <AddressMap />
      </div>
    </>
  );
}
