import React from "react";
import "./Whatido.css";
import Darkfile from "../Darkfile";
class Whatido extends React.Component {
  render() {
    return (
      <div className="whatido">
        <h1
          className="what"
          style={{ color: Darkfile(this.props.value1, "textC") }}
        >
          What I do
        </h1>
      </div>
    );
  }
}
export default Whatido;
