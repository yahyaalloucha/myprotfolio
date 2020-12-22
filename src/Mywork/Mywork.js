import React from "react";
import './Mywork.css';

import webdevolo from './webdevolo.svg';
import des from "./des.svg";

class Mywork extends React.Component{
   render(){


    return(
        <div className="divmywork" id="myworkid">
                <div className="mywork" >

                    <div className="webdev">
                        <img src={webdevolo} alt="webdevolo" className="image" />
                        
                             <div className="handp"><h1 className="Hw" >UX/UI Design</h1>
                        
                                    <p>Need help with designing your website? I can create beautiful website designs based on your content, or redesign old websites to improve your conversions or achieve your business goals.</p> 
                        
                        
                             </div>   

                    </div>

                    <div className="webdev">
                        
                        <img src={des} alt="des" className="image"/>
                                 <div className="handp"><h1 className="Hw">Web Development</h1>
                                        <p>Need a fully custom website for yourself or your business?<br /> I create beautiful and unique designs to meet your goals and target audience, then i will write the code <br /> and then build them.</p>
                        
                    </div>
                    

                    </div>
                    


                </div>
                <div className="b">
                    <a href="#contactid" class="text-link">Contact</a>
                </div>
        </div>
        
    )
   }

}
export default Mywork