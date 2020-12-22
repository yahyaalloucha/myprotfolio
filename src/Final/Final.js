import React from "react";

import "./Final.css";
import mylogoy from "./mylogoy.png";

class Final extends React.Component{


    render(){


        return(
            <div className="finaldiv">
                <div className="logoandname">
                    <a href="/" aria-current="page" class="link-block-2 w-inline-block w--current">
                        <img src={mylogoy} width="100" alt="" class="image-2"/>
                    </a>
                    <p className="par">
                    Yahya Alloucha<br/> UX/UI Designer & Web Developer</p>

                    
                                                

                </div>


                <div class="footer-copywright"><p class="footer-copywright-p">© 2020 Yahya Alloucha</p></div>
            </div>
        )
    }
}
export default Final