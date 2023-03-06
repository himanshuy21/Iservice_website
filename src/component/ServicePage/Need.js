import React from "react";
import { ProblemPageBody } from "../ProblemDevice/ProblemPagebody";
import { NeedBody } from "./NeedBody";
export function NeedService() {
  return (
    <>
      <div className="center">
        <h2>When do you need the service ?</h2>
        <p>
          Tell us about your device Lorem ipsum dolor sit amet, consectetur
          adipiscing elit. Donec dictum augue ex, a feugiat libero porttitor
          vel. Ut
        </p>
        <ProblemPageBody />
        <NeedBody />
      </div>
    </>
  );
}
