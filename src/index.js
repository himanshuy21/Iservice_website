import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import Navbar from "./component/Nav";
import FooterNext from "./component/FooterNext";
import Footer from "./component/Footer";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
    <Navbar />
    {/* <FooterNext /> */}
    {/* <Footer /> */}
  </React.StrictMode>
);
