import React from "react";
import "./Container-wide.css";
import facebook from "./facebook.svg";
import instagram from "./instagram.svg";
import linkedin from "./linkidin.svg";
import bask from "./bask.svg";
import twiter from "./twiter.svg";

class Containertow extends React.Component{



    render(){




        return(


            <div className="containertow">
                <div className="container-1">
                    <div>
                        <h1 className="just">Just say hi.</h1>
                    </div>
                    <div className="containertext">
                        <p>I am always open to discuss your project, improve your online presence or help with your UX/UI design challenges.</p>
                    </div>
                    <div class="subtext-contact">Email me at</div>
                    <div class="email-link-container"><a href="" class="email-link">yahyaalloucha01@gmail.com</a></div>
                    <div className="icon-social">
                    <div className="subtext-contact" id="follow">Follow</div>
                <div className="icon-s">
                    <a href="https://www.facebook.com/yahya.footballe/" className="aa"><img src={facebook} alt="" className="facebook"/></a>
                    <a href="https://www.instagram.com/yahya_salhi_01/" className="aa"><img src={instagram} alt="" className="instagram"/></a>
                    <a href="" className="aa"><img src={linkedin} alt="linkedin " className="linkedin"/></a>
                    <a href="" className="aa"><img src={twiter} alt="twiter" className="twiter"/></a>
                    <a href="" className="aa"><img src={bask} alt="bask" className="bask"/></a>
                </div>
                </div>
                
                </div>
                

                <div className="inpu" id="contactid">
                    <form action="https://send.pageclip.co/fq3XsvzFs64kc4out7Fv8SlF9GKPZy5i" className="pageclip-form frm" method="post" >

                         <h2 class="form-heading-tablet">Or use the form below</h2>

                         <div className="divinp">
                             <input type="text" class="form-input" maxlength="256" name="Name" data-name="Name" placeholder="Your name*" id="Name" required=""/></div>
                         <div className="divinp">
                         <input type="email" class="form-input" maxlength="256" name="Email" data-name="Email" placeholder="Your email*" id="Email" required=""/>
                         </div>
                         <div className="divinp">
                         <input type="text" class="form-input" maxlength="256" name="Website" data-name="Website" placeholder="Your website (if exists)" id="Website"/>
                             </div>
                         <div className="biginp">
                         <textarea placeholder="How can I help?*" maxlength="8000" id="Message" name="Message" data-name="Message" required="" class="textarea-form-input w-input" spellcheck="false"></textarea>
                         </div>
                         <div className="divbutt">
                             <button className="butt">Get In Touch</button>

                         </div>


                    </form>

                        
                </div>
            </div>
        )
    }

}
export default Containertow