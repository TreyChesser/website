import React from "react";
// import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { Routes, Route, Link } from "react-router-dom";
import Podcast from "./podcast";

import "./styles.css";
import "./images/Professional_Profile_Picture_Headshot_Circle.png";
import "./images/Israel_Background3.png";
import "./images/Trey_Chesser_Icon.jpg";
import "./images/Gator2.jpg";



function NavBar() {
  return (
    <div>
      <div className="div0">
        <img
          className="TreyIcon"
          src={require("./images/Trey_Chesser_Icon.jpg")}
          alt="Trey Chesser Icon"
        />
        <p className="navBarP1">
          <a className="aStyle" href="/home">
            Home
          </a>
          {/* <Link to="/home">Home</Link> */}
        </p>
        <p className="navBarP2">
          <a
            className="aStyle"
            href="https://drive.google.com/file/d/1Q0Azh35dH7CMu3DVAbcxPJt9F91Ci7GR/view?usp=sharing"
          >
            Resume
          </a>
        </p>
        <p className="navBarP3">
          <a className="aStyle" href="/podcast">
            Podcast
          </a>
          {/* <Link to="/podcast">Podcast</Link> */}
        </p>
      </div>
    </div>
  );
}

export default NavBar;
