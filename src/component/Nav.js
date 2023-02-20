import React from "react";
import "../style/nav.css";
function Navbar() {
  return (
    <nav
      className="navbar navbar-expand-lg navbar-light fixed-top"
      style={{ width: "100%" }}
    >
      <div className="container-fluid ">
        <div className="mobileContainer">
          <div className="anchorContainer2 mt-2">
            <a className="navbar-brand" href="#">
              Logo
            </a>
          </div>
          <button
            className="navbar-toggler mb-2 mt-2"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
        </div>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <div className="anchorContainer">
            <a className="navbar-brand" href="#">
              Logo
            </a>
          </div>
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item formsearch">
              <i className="fa-solid fa-magnifying-glass"></i>
              <form className="d-flex ">
                <input
                  className="form-control me-2 formsearch2"
                  type="search"
                  placeholder="Search part for device"
                  aria-label="Search"
                />
              </form>
            </li>
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#">
                Booking
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#">
                Job Sheet
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#">
                Offers
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#">
                Help
              </a>
            </li>

            <li className="nav-item dropdown profile">
              <a
                className="nav-link  dropdown-toggle"
                type="button"
                id="dropdownMenuButton1"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <i className="fa-regular fa-user icons"></i>
                Rishabh
              </a>
              <ul
                className="dropdown-menu"
                aria-labelledby="dropdownMenuButton1"
              >
                <li>
                  <a className="dropdown-item" href="#">
                    My Profile
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Logout
                  </a>
                </li>
              </ul>
            </li>
            <li className="nav-item">
              <i className="fa-solid fa-cart-shopping mt-2 pt-1 icons"></i>
              <a className="link" aria-current="page" href="#">
                Cart
              </a>
            </li>
          </ul>
        </div>
      </div>
      {/* </div> */}
    </nav>
  );
}
export default Navbar;
