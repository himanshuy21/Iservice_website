import React from "react";
import { Link } from "react-router-dom";
import "../style/FooterNext.css";
function FooterNext(props) {
  return (
    <>
      <footer className="d-flex" style={{ background: "#ededed" }}>
        <div className="container  mt-2 mb-2 d-flex justify-content-center align-items-center">
          <div className="btn-container">
            <button type="button" className="btn btn-light">
              <Link to={props.prev} className="Link">
                Previous
              </Link>
            </button>
            <button type="button" className="btn btn-dark">
              <Link
                to={props.next}
                style={{ color: "white", textDecoration: "none" }}
              >
                Next
              </Link>
            </button>
          </div>
        </div>
      </footer>
    </>
  );
}

export default FooterNext;
