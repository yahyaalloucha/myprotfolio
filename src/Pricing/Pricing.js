import React from "react";
import "./Pricing.css";
import Titdiv from "../titdiv /Titdiv";
import Pricework from "../Pricework/Pricework";
import Partpricing from "../Partpricing/Partpricing";
import Final from "../Final/Final";
import Darkfile from "../Darkfile";

class Pricing extends React.Component {
  render() {
    return (
      <div style={{ backgroundColor: Darkfile(this.props.value, "BC") }}>
        <Titdiv D={this.props.Darkmodevalue} value1={this.props.value} />
        <Pricework value1={this.props.value}></Pricework>
        <Partpricing value1={this.props.value}></Partpricing>
        <Final value1={this.props.value}></Final>
      </div>
    );
  }
}
export default Pricing;
