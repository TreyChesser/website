import React from "react";
// import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { Routes, Route, Link } from "react-router-dom";
import Podcast from "./podcast";
import NavBar from "./navBar";

import "./styles.css";
import "./Professional_Profile_Picture_Headshot_Circle.png";
import "./Israel_Background3.png";
import "./Trey_Chesser_Icon.PNG";
import "./Gator2.jpg";

function Home() {
  return (
    <div>
      <div>
        <img className="Israel" src="Israel_Background3.png" alt="Israel" />
      </div>
      <Routes>
        <Route path="/podcast" element={<Podcast />} />
      </Routes>
      <div className="div1">
        <h1 className="header">About Me</h1>
        <table>
          <tr>
            <td style={{ padding: "50px" }}>
              <img
                className="ProfilePic"
                src="Professional_Profile_Picture_Headshot_Circle.png"
                alt="Trey Chesser"
              />
            </td>
            <td>
              <h1 style={{ color: "white" }}>
                Hello and welcome to my website!
              </h1>
              <p style={{ color: "white" }}>
                My name is Trey Chesser and I am a 4th year biomedical
                engineering student at the University of Florida. I will be
                graduating in the spring of 2023. My primary passion lies in
                learning about and finding ways to leverage technolgies that
                incorporate blockchains, 5g, IOT devices, artifical itelligence,
                machine learning, and edge computing to drive the 4th industrial
                revolution.
              </p>
            </td>
          </tr>
        </table>
      </div>

      <div className="div2">
        <h1 className="header">Outside of College Experience</h1>
        <table style={{ color: "white" }}>
          <tr>
            <td>
              <h2 style={{ color: "blue" }}>Interned for Hangtech LLC</h2>
              <p>June 2021 - July 2021</p>
            </td>
            <td style={{ padding: "0px 0px 50px 100px" }}>
              <ul>
                <li>Developed an iOS app</li>
                <li>
                  Learned creative ways in which the medical problems of today
                  could potentially be solved
                </li>
                <li>
                  Obtained an understanding of the importance of bioinformatics
                  and data in general
                </li>
                <li>
                  Designed the layout of a website that would later be used to
                  survey women over 50 to see if they were at high risk of
                  cervical cancer
                </li>
              </ul>
            </td>
          </tr>
          <tr>
            <td>
              <h2 style={{ color: "blue" }}>
                Developed the iOS App{" "}
                <a
                  style={{ color: "blue" }}
                  href="https://apps.apple.com/us/app/narly-fall/id1573608425"
                >
                  Narly Fall
                </a>
              </h2>
              <p>May 2021 - July 2021</p>
            </td>
            <td style={{ padding: "0px 0px 50px 100px" }}>
              <ul>
                <li>
                  created an iOS app independently from scratch using the
                  programming language swift
                </li>
                <li>
                  obtained an average rating of 5 stars on the Apple App Store
                  with over 70 ratings
                </li>
                <li>received over 300 downloads</li>
              </ul>
            </td>
          </tr>
          <tr>
            <td>
              <h2 style={{ color: "blue" }}>Completed Udemy Courses</h2>
            </td>
            <td style={{ padding: "0px 0px 50px 100px" }}>
              <ul>
                <li>
                  iOS and Swift - The Complete iOS App Development Bootcamp
                </li>
                <li>The Complete 2022 Wev Development Bootcamp</li>
                <li>
                  Blockchain A-Z: Learn How to Build Your First Blockchain
                </li>
                <li>SOLIDWORKS: Become a Certified Associate Today</li>
              </ul>
            </td>
          </tr>
          <tr>
            <td>
              <h2 style={{ color: "blue" }}>Obtained Coding Experience</h2>
            </td>
            <td style={{ padding: "0px 0px 50px 100px" }}>
              <ul>
                <li>Swift</li>
                <li>Python</li>
                <li>HTML</li>
                <li>CSS</li>
                <li>JavaScript</li>
                <li>Java</li>
                <li>MATLAB</li>
                <li>React</li>
                <li>Node.js</li>
              </ul>
            </td>
          </tr>
        </table>
      </div>
      <div className="div3">
        <h1 className="header">College Experience</h1>
        <table>
          <tr>
            <td style={{ verticalAlign: "top", padding: "17px 0px 0px 0px" }}>
              <h2 style={{ color: "black" }}>Academics</h2>
            </td>
            <td style={{ padding: "0px 0px 50px 150px" }}>
              <h4>B.S. Biomedical Engineering</h4>
              <ul>
                <li>GPA: 3.84</li>
                <li>Graduation Date: May 2023</li>
                <li>
                  Noteworthy Coursework:
                  <ul>
                    <li>
                      Computer Programming for Engineers
                      <ul>
                        <li>
                          Learned how to code in the MATLAB programming language
                          through the completion of projects
                        </li>
                        <li>
                          Gained my first experience with computer programming
                          which led to me further pursuing computer science
                        </li>
                      </ul>
                    </li>
                    <li>
                      Biomedical Instrumentation
                      <ul>
                        <li>
                          Created a pacemaker prototype using a variety of
                          different circuit components used to filter and
                          amplify biosignals
                        </li>
                        <li>
                          Gained experience working with PCB board design using
                          KiCad software
                        </li>
                        <li>
                          Incorporated MATLAB code into the creation of the
                          pacemaker prototype
                        </li>
                      </ul>
                    </li>
                    <li>
                      Programming with Python
                      <ul>
                        <li>
                          Learned how to code in the python programming language
                          through the completion of projects
                        </li>
                      </ul>
                    </li>
                    <li>
                      Fundamentals of Programming 1
                      <ul>
                        <li>
                          Learned how to code in the java programming language
                          through the completion of projects
                        </li>
                        <li>
                          Explored import computer science concepts such as
                          object-oriented programming, procedural and data
                          abstraction, and program modularity
                        </li>
                      </ul>
                    </li>
                    <li>
                      Computer Applications for Biomedical Engineering
                      <ul>
                        <li>
                          Coded software that would look at audio files of
                          patients’ lungs and determine whether they had COPD or
                          not using MATLAB
                        </li>
                      </ul>
                    </li>
                  </ul>
                </li>
              </ul>
            </td>
          </tr>
          <tr>
            <td style={{ verticalAlign: "top", padding: "43px 0px 0px 0px" }}>
              <h2 style={{ color: "black" }}>Research</h2>
            </td>
            <td style={{ padding: "0px 0px 100px 150px" }}>
              <h4 className="kes">Keselowksy Research Lab</h4>
              <thead style={{ size: "0.5em" }}>
                January 2020 - August 2021
              </thead>
              <ul>
                <li>
                  Fabricated microparticles that were designed to turn off the
                  autoimmune response associated with Multiple Sclerosis by
                  releasing certain chemokines when dissolved
                </li>
                <li>
                  Operated Image J to analyze images remotely to determine
                  values such as the number of cells or amount of tissue within
                  a sample after treatment
                </li>
                <li>
                  Learned how to stain histology samples from start to finish
                </li>
              </ul>
            </td>
          </tr>
        </table>
      </div>
      <div className="div4">
        <table className="center">
          <tr>
            <td>
              <a
                href="https://www.linkedin.com/in/trey-chesser-83101b1a6/"
                class="fa fa-linkedin"
              ></a>
            </td>
            <td style={{ padding: "10px" }}>
              <a
                href="mailto:treychesser71262@gmail.com"
                class="fa fa-google"
              ></a>
            </td>
            <td>
              <a href="https://github.com/TreyChesser" class="fa fa-github"></a>
            </td>
          </tr>
        </table>
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div>
  );
}

export default Home;
