import React from "react";
import "./Container-wide.css";
import facebook from "./facebook.svg";
import instagram from "./instagram.svg";
import twiter from "./twiter.svg";
import linkedin from "./linkidin.svg";
import Darkfile from "../Darkfile";
import instada from "./instada.svg";
import facebookda from "./facebookda.svg";
import linkedindar from "./linkedindar.svg";
import twitterda from "./twitterda.svg";

class Containertow extends React.Component {
  render() {
    return (
      <div className="containertow">
        <div className="container-1">
          <h1
            className="just"
            style={{ color: Darkfile(this.props.value1, "textC") }}
          >
            Just say hi.
          </h1>

          <div className="containertext">
            <p style={{ color: Darkfile(this.props.value1, "textC") }}>
              I am always open to discuss your project, improve your online
              presence or help with your UX/UI design challenges.
            </p>
          </div>
          <div className="subtext-contact">Email me at</div>
          <div
            className="email-link-container"
            style={{ color: Darkfile(this.props.value1, "textC") }}
          >
            <a
              href=""
              className="email-link"
              style={{ color: Darkfile(this.props.value1, "textC") }}
            >
              yahyaalloucha01@gmail.com
            </a>
          </div>
          <div className="icon-social">
            <div className="subtext-contact" id="follow">
              Follow
            </div>
            <div className="icon-s">
              <a
                href="https://www.facebook.com/yahya.footballe/"
                className="aa"
              >
                <img
                  src={this.props.value1 ? facebookda : facebookda}
                  alt=""
                  className="facebook"
                />
              </a>
              <a
                href="https://www.instagram.com/yahya_salhi_01/"
                className="aa"
              >
                <img
                  src={this.props.value1 ? instada : instada}
                  alt=""
                  className="instagram"
                />
              </a>
              <a href="" className="aa">
                <img src={linkedindar} alt="linkedin " className="linkedin" />
              </a>
              <a href="" className="aa">
                <img src={twitterda} alt="twiter" className="twiter" />
              </a>
            </div>
          </div>
        </div>

        <div className="inpu" id="contactid">
          <form
            action="https://send.pageclip.co/fq3XsvzFs64kc4out7Fv8SlF9GKPZy5i"
            className="pageclip-form frm"
            method="post"
          >
            <h2 className="form-heading-tablet">Or use the form below</h2>

            <div className="divinp">
              <input
                type="text"
                className="form-input"
                maxLength="256"
                name="Name"
                data-name="Name"
                placeholder="Your name*"
                id="Name"
                required=""
                style={{
                  backgroundColor: this.props.value1 ? "#4D3FCC" : "#F9F9F9",
                  color: this.props.value1 ? "#ffff" : "#5c5b66",
                }}
              />
            </div>
            <div className="divinp">
              <input
                type="email"
                className="form-input"
                maxLength="256"
                name="Email"
                data-name="Email"
                placeholder="Your email*"
                id="Email"
                required=""
                style={{
                  backgroundColor: this.props.value1 ? "#4D3FCC" : "#F9F9F9",
                }}
              />
            </div>
            <div className="divinp">
              <input
                type="text"
                className="form-input"
                maxLength="256"
                name="Website"
                data-name="Website"
                placeholder="Your website (if exists)"
                id="Website"
                style={{
                  backgroundColor: this.props.value1 ? "#4D3FCC" : "#F9F9F9",
                }}
              />
            </div>
            <div className="biginp">
              <textarea
                placeholder="How can I help?*"
                maxLength="8000"
                id="Message"
                name="Message"
                data-name="Message"
                required=""
                className="form-input"
                spellCheck="false"
                style={{
                  backgroundColor: this.props.value1 ? "#4D3FCC" : "#F9F9F9",
                }}
              ></textarea>
            </div>
            <div className="divbutt">
              <button className="butt">Get In Touch</button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}
export default Containertow;
