import React from "react";
import "../style/FooterNext.css";
function FooterNext() {
  return (
    <>
      <footer className="d-flex" style={{ background: "#ededed" }}>
        <div className="container  mt-2 mb-2 d-flex justify-content-center align-items-center">
          <div className="btn-container">
            <button type="button" className="btn btn-light">
              Previous
            </button>
            <button type="button" className="btn btn-dark">
              Next
            </button>
          </div>
        </div>
      </footer>
    </>
  );
}

export default FooterNext;
