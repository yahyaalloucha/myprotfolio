import React from "react";
import "./Lastproj.css";
import lastproj from "./lastproj.jpg";
import Darkfile from "../Darkfile";

class Lastproj extends React.Component {
  render() {
    return (
      <div className="lastproj">
        <h1
          className="h1"
          style={{ color: Darkfile(this.props.value1, "textC") }}
        >
          Featured projects
        </h1>

        <div className="pandi">
          <div className="par">
            <h2>Pomodoro Timer</h2>
            <p>Website</p>
            <p>
              pomodoroTimer timer helps you manage your work and helps you by
              arranging your time.
            </p>
            <p>
              {" "}
              I worked on this project through Rect js technology. See project
              pomodoroTimer
            </p>
            <div className="link">
              <a
                href="https://yahyapomodorotimer.netlify.app/"
                className="text-link"
                style={{ color: Darkfile(this.props.value1, "textC") }}
              >
                Visit Pomodoro Timer
              </a>
            </div>
          </div>
          <div className="imgofp">
            <a href="https://yahyapomodorotimer.netlify.app/">
              <img
                src={lastproj}
                width="500"
                alt="hh"
                className="portfolio-image"
              />
            </a>
          </div>
        </div>
      </div>
    );
  }
}
export default Lastproj;
