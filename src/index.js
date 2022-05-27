import React from "react";
import { createRoot } from "react-dom/client";
import Podcast from "./podcast";
import Home from "./home";
import NavBar from "./navBar";
import { BrowserRouter } from "react-router-dom";
import { Routes, Route, Redirect, Switch } from "react-router-dom";
import { Link } from "react-router-dom";

import "./styles.css";
// import "./Professional_Profile_Picture_Headshot_Circle.png";
// import "./Israel_Background3.png";
// import "./Trey_Chesser_Icon.PNG";
// import "./Gator2.jpg";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <BrowserRouter>
    <NavBar />
    <div>
      <Routes>
        <Route exact path="/index" element={<Home />} />
      </Routes>
      <Routes>
        <Route exact path="/" element={<Home />} />
      </Routes>
      <Routes>
        <Route path="/podcast" element={<Podcast />} />
      </Routes>
      <Routes>
        <Route path="/home" element={<Home />} />
      </Routes>
    </div>
  </BrowserRouter>
);
