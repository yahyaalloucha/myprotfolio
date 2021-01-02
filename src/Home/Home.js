import React from "react";
import "../App.css";
import Titdiv from "../titdiv /Titdiv";
import Definition from "../Definition/Definition";
import Wahtido from "../Whatiado/Whatiado";
import Mywork from "../Mywork/Mywork";
import Lastproj from "../Lastproj/Lastproj";

import Lastproj2 from "../Lastprojec2/Lastproject2";

import Aboutcontainer from "../Aboutcontainer/Aboutcontainer";
import Certificationcontainer from "../Certificationcontainer/Certificationcontainer";
import Alionedtext from "../Alionedtext/Alionedtext";
import Containertow from "../Containertow/Containertow";
import Final from "../Final/Final";
import Darkfile from "../Darkfile";

class Home extends React.Component {
  render() {
    return (
      <div style={{ backgroundColor: Darkfile(this.props.value, "BC") }}>
        <Titdiv D={this.props.Darkmodevalue} value1={this.props.value} />
        <Definition value1={this.props.value}></Definition>
        <Wahtido value1={this.props.value}></Wahtido>
        <Mywork value1={this.props.value}></Mywork>
        <Lastproj value1={this.props.value}></Lastproj>
        <Lastproj2 value1={this.props.value}></Lastproj2>
        <Aboutcontainer value1={this.props.value}></Aboutcontainer>
        <Certificationcontainer
          value1={this.props.value}
        ></Certificationcontainer>

        <Containertow value1={this.props.value}></Containertow>
        <Final value1={this.props.value}></Final>
      </div>
    );
  }
}
export default Home;
