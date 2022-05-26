import React from "react";
import { createRoot } from "react-dom/client";
import Podcast from "./podcast";
import Home from "./home";
import NavBar from "./navBar";
import { BrowserRouter } from "react-router-dom";
import { Routes, Route, Redirect, Switch } from "react-router-dom";
import { Link } from "react-router-dom";

import "/public/styles.css";
import "/public/Professional_Profile_Picture_Headshot_Circle.png";
import "/public/Israel_Background3.png";
import "/public/Trey_Chesser_Icon.PNG";

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
