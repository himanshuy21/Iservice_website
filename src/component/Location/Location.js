import React from "react";
import { ProblemPageBody } from "../ProblemDevice/ProblemPagebody";
import { LocationDetail } from "./LocationDetail";
export function Location() {
  return (
    <>
      <div className="center">
        <h2>What is the location ?</h2>
        <p>
          Tell us about your device Lorem ipsum dolor sit amet, consectetur
          adipiscing elit. Donec dictum augue ex, a feugiat libero porttitor
          vel. Ut
        </p>
        <ProblemPageBody />
        <LocationDetail />
      </div>
    </>
  );
}
