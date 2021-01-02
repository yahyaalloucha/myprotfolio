import React from "react";
import { Link } from "react-router-dom";
import "./Titdiv.css";
import mylogoy from "./mylogoy.png";
import darkicon from "./darkicon.png";
import { HashLink } from "react-router-hash-link";
import Darkfile from "../Darkfile";
import daymode from "./daymode.svg";

class Titdiv extends React.Component {
  render() {
    return (
      <div
        className="Titdiv"
        style={{ backgroundColor: Darkfile(this.props.value1, "BC") }}
      >
        <HashLink to="/" className="mylogoP">
          <img src={mylogoy} alt="my" className="mylogoy" />
        </HashLink>
        <HashLink smooth to="/#aboutcontainerid" className="p1">
          <p className="p1" id="about">
            About
          </p>
        </HashLink>
        <HashLink smooth to="/#myworkid" className="p1">
          <p className="p1">Services</p>
        </HashLink>
        <Link to="/Pricing" className="p1">
          <p className="p1">Pricing</p>
        </Link>
        <HashLink smooth to="/#contactid" className="p1">
          <p className="p1">Contact</p>
        </HashLink>

        <img
          src={this.props.value1 ? daymode : darkicon}
          className="darkicon"
          onClick={this.props.D}
          style={{ backgroundColor: Darkfile(this.props.value1, "BC") }}
        />
      </div>
    );
  }
}
export default Titdiv;
