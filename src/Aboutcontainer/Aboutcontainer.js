import React from "react";
import "./Aboutcontainer.css";
import aboutme from "./aboutme.png";
import Darkfile from "../Darkfile";
class Aboutcontainer extends React.Component {
  render() {
    return (
      <div className="aboutdiv">
        <div className="aboutcontainer" id="aboutcontainerid">
          <div className="pdiv">
            <h1
              className="tit"
              style={{ color: Darkfile(this.props.value1, "textC") }}
            >
              About me
            </h1>

            <div className="paragraph1">
              <p
                className="para"
                style={{ color: Darkfile(this.props.value1, "textC") }}
              >
                Are you interested to know who I'm?, if your answer is yes, in
                this part, I'm going to talk about myself.
                <br />
                <br />
                I've been studying web development for a year now, and I've come
                to realize that this is something that I want to do
                professionally in the future because I enjoy doing technical
                tasks.
                <br />
                <br />
                Also, I'm constantly studying new technologies and I'm ready to
                move forward in this direction.
                <br />
                <br />
                highly motivated to study other technologies and to talk and
                meet with other peoples for benefit from their experience and
                knowledge.
              </p>
            </div>
            <div className="loveimg">
              <img
                src="https://uploads-ssl.webflow.com/5e8c566954381032f62e178b/5ea4096ec07d782ba4331e0c_kristi-loves.svg"
                width="40"
                alt=""
                className="love-icon"
              />
              <p
                className="paragraph"
                style={{ color: Darkfile(this.props.value1, "textC") }}
              >
                I love{" "}
                <a
                  href="https://www.vitsoe.com/eu/about/good-design"
                  className="black-link"
                >
                  good design
                </a>
                , photography, football, politics, travel, music, languages and
                books
              </p>
            </div>
          </div>
          <div className="proimg1">
            <img src={aboutme} alt="mm" className="proimg" />
          </div>
        </div>
      </div>
    );
  }
}
export default Aboutcontainer;
