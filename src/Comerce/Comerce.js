import React from "react";
import "./Comerce.css";
import comerce from "./comerce.jpg";

class Comerce extends React.Component{


    render(){
        return(
            <div className="comerce">


                <div className="pofcom">
                    <p className="tit">eCommerce Website Redesign for Premium Skin Nutrition Brand, Love Amy Skin</p>
                    <div className="pc">eCommerce Design, Shopify Build</div>
                    <p className="par1">A complete redesign of an existing Shopify store founded by award-winning skincare and conscious beauty expert, Amy Wall.



                    <p className="par2">The emphasis was on storytelling, with pages introducing Amy and her vision, and then leading to two goals: helping customers learn more about the products, and introducing them to Amy’s in-person beauty services.</p>
                    <div className="tlink">
                    <a href="https://loveamyskin.com/?utm_source=kristina-marketing&amp;utm_medium=portfolio" target="_blank" class="t-link">Visit loveamyskin.com</a>
                    </div>

            </p>
                </div>
                <div className="imgofcom">
                    <a href="https://loveamyskin.com/?utm_source=kristina-marketing&amp;utm_medium=portfolio"> <img src={comerce} alt="comerce" className="imcomer" /></a>

                </div>
            </div>
        )
    }
}
export default Comerce