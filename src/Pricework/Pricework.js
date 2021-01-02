import React from "react";
import "./Pricework.css";
import process from "./process.png";
import { HashLink } from "react-router-hash-link";
import Darkfile from "../Darkfile";

class Pricework extends React.Component {
  render() {
    return (
      <div
        className="pricework1"
        style={{ backgroundColor: Darkfile(this.props.value1, "BC") }}
      >
        <div className="process">
          <h1
            className="h-process"
            style={{ color: Darkfile(this.props.value1, "textC") }}
          >
            Process & Pricing
          </h1>
          <p
            className="p-of-process"
            style={{ color: Darkfile(this.props.value1, "textC") }}
          >
            A lot of my process is research and planning. we will talk about the
            project and about the process and the time of prcess if you need any
            informations about pricing{" "}
          </p>

          <HashLink smooth to="#priceppart" className="p11">
            <a
              href="#pricing"
              class="button-outlined w-button"
              style={{
                backgroundColor: this.props.value1 ? "#4D3FCC" : "#fff",
              }}
            >
              Go to Pricing
            </a>
          </HashLink>
        </div>
        <div>
          <img src={process} alt="ppa" className="process" />
        </div>
      </div>
    );
  }
}
export default Pricework;
