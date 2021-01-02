import React from "react";

import "./Final.css";
import mylogoy from "./mylogoy.png";
import Darkfile from "../Darkfile";
class Final extends React.Component {
  render() {
    return (
      <div
        className="finaldiv"
        style={{ backgroundColor: this.props.value1 ? "#35363A" : "#f9f9f9" }}
      >
        <div className="logoandname">
          <a
            href="/"
            aria-current="page"
            className="link-block-2 w-inline-block w--current"
          >
            <img src={mylogoy} width="100" alt="" className="image-2" />
          </a>
          <p className="par">
            Yahya Alloucha
            <br />
            Web Developer
          </p>
        </div>

        <div className="footer-copywright">
          <p className="footer-copywright-p">© 2020 Yahya Alloucha</p>
        </div>
      </div>
    );
  }
}
export default Final;
