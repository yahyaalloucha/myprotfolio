import React from "react";
import "./Part-pricing.css";
import Darkfile from "../Darkfile";

class Partpricing extends React.Component {
  render() {
    return (
      <div
        className="price-part"
        id="priceppart"
        style={{ backgroundColor: Darkfile(this.props.value1, "BC") }}
      >
        <div className="about-price">
          <div
            className="for-page"
            style={{ backgroundColor: this.props.value1 ? "#4D3FCC" : "#ffff" }}
          >
            <div className="numpages12">
              <p className="p-numpages12">One-page</p>
            </div>
            <p className="part-price">
              My most popular service. A unique website for your brand, with 5-6
              sections.
              <br />
              <br />
              <br />
              <br />
            </p>
            <div className="price">
              <div className="from">from</div>{" "}
              <div className="p-price">100$</div>
            </div>
          </div>
          <div
            className="for-page"
            style={{ backgroundColor: this.props.value1 ? "#4D3FCC" : "#ffff" }}
          >
            <div className="numpages12">
              <p className="p-numpages12">5- page Website</p>
            </div>
            <p className="part-price">
              This is for you if you need a larger website with a blog, multiple
              service pages, or lots of content. For example, home, about,
              services, blog, article.
            </p>
            <div className="price">
              <div className="from">from</div>{" "}
              <div className="p-price">350$</div>
            </div>
          </div>
          <div
            className="for-page"
            style={{ backgroundColor: this.props.value1 ? "#4D3FCC" : "#ffff" }}
          >
            <div className="numpages12">
              {" "}
              <p className="p-numpages12">more than 5-page Website</p>
            </div>
            <p className="part-price">
              If you need a web site more than 5pages. but will be take a more
              time. <br />
              <br />
              <br />
              <br />
            </p>

            <div className="price">
              <div className="from">from</div>{" "}
              <div className="p-price">600$</div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Partpricing;
