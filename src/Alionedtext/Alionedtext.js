import React from "react";
import "./Alionedtext.css";
import alionedimg from "./alionedimg.svg";

class Alionedtext extends React.Component{



    render(){




        return(
            <div className="Alioned-div">

                <div className="Alioned">

                    <h2 class="heading">If you need Shopify help</h2>
                        <p class="alioned-p">I run <strong>Alioned Agency</strong>, together with my boyfriend, <a href="https://ed.codes/?utm_source=kristina-marketing&amp;utm_medium=alioned-team" target="_blank" class="alioned-link">Eduard</a> (a web developer). It’s just the two of us, and we help small Shopify stores with setup, customizations, redesigns, and ongoing support. To see everything we have to offer, please visit our website.</p>
                            <div class="alioned-buttin-mobile"><a href="https://www.alioned.com/?utm_source=kristina-marketing&amp;utm_medium=alioned-team" target="_blank" class="button-alioned">Visit Alioned Agency</a></div>
                </div>
                <div className="Alioned-img"><img src={alionedimg} alt="alionedimg" className="alionedimg"/></div>
            </div>


           
        )
    }
}
export default Alionedtext;