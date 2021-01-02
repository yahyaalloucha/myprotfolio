import React from "react";
import "../Lastproj/Lastproj.css";
import coronastat from "./coronastat.png";
import Darkfile from "../Darkfile";

class Lastproj2 extends React.Component{



    render(){



        return(
        

                <div className="lastproj">
                            <div className="pandi">
                                <div className="par">
                                <h2>Statistics of COV19</h2>
                                <p>Website</p>
                                <p>
                                using this web site, you can get the last statistics about COVID 19.</p>
                                    <p>  I built this project with React js.<br />
                                    See project Statistics of COV19.</p> 
                                <div className="link">
                                <a href="https://stoic-ritchie-f81a8d.netlify.app/"  className="text-link" style={{color:Darkfile(this.props.value,'textC')}}>Visit Statistics of COV19</a>
                                </div>
                                </div>
                                <div className="imgofp">
                                <a href="https://stoic-ritchie-f81a8d.netlify.app/" ><img src={coronastat}   width="500" height="350" alt="" className="portfolio-image"/>
                                </a>
                                </div>


                            </div>
                </div>



        
           

        )
    }
}
export default Lastproj2