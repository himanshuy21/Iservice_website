import { ProblemPageBody } from "./ProblemPagebody";
import { ProblemPageDes } from "./ProblemPageDes";

export function ProblemPageForm() {
  return (
    <div className="center">
      <h2>What is the problem of the device ?</h2>
      <p>
        Tell us about your device Lorem ipsum dolor sit amet, consectetur
        adipiscing elit. Donec dictum augue ex, a feugiat libero porttitor vel.
        Ut
      </p>
      <ProblemPageBody />
      <ProblemPageDes />
    </div>
  );
}
