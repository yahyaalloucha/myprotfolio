import React from "react";
import "./Aboutcontainer.css";
import aboutme from "./aboutme.png"
class Aboutcontainer extends React.Component{



        render(){





            return(



                <div className="aboutcontainer" id="aboutcontainerid">

                   <div className="pdiv">
                   <div className="titlediv">
                        <h1 className="tit">About me</h1>
                    </div>
                    <div>
                        <p className="para">
                        Are you interested to know who I'm?, if your answer is yes, in this part, I'm going to talk about myself.
                        <br/>
                        <br/>

                        I've been studying web development for a year now, and I've come to realize that this is something that I want to do professionally in the future because I enjoy doing technical tasks. 
                            <br/>
                            <br/>

                            Also, I'm constantly studying new technologies and I'm ready to move forward in this direction.
                            <br/>
                            <br/>

                            eCommerce is a field where this is especially effective. I love that a thoughtful redesign can directly increase a store's revenue. Check out my article: "<a href="https://dribbble.com/stories/2020/04/22/designing-for-conversions-7-ux-tips-ecommerce?utm_source=kristina-marketing&amp;utm_medium=about"  class="black-link">Designing for Conversions.</a>
                                                    </p>
                    </div>
                    <div className="loveimg">
                    <img src="https://uploads-ssl.webflow.com/5e8c566954381032f62e178b/5ea4096ec07d782ba4331e0c_kristi-loves.svg" width="40" alt="" class="love-icon"/>
                    <p class="paragraph">I love <a href="https://www.vitsoe.com/eu/about/good-design"  class="black-link">good design</a>, photography, football, politics, travel, music, languages and books</p>
                    </div>
                    
                
                   </div>
                   <div className="proimg1">
                       <img src={aboutme} alt="mm" className="proimg"/>

                   </div>
                    
                </div>
            )
        }



}
export default Aboutcontainer