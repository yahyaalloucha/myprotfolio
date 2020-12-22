import React from "react";
import "./Certificationcontainer.css";
import Reacticon from "./Reacticon.png";
import Html5icon from "./Html5icon.png"
import Jsicon from "./Jsicon.png";
import Cssicon from "./Cssicon.png";
import WordPress from "./WordPress.png";



class Certificationcontainer extends React.Component{



    render(){





        return(

            <div className="Certificationcontainer">


                
                
                
                    

                
                    
                    <div className="semrush"><a href="xx"><img src={Jsicon} alt="js" className="Js"/></a></div>
                    <div className="semrush"><a href="cc"><img src={Reacticon} alt="rea" className="react"/></a></div>
                    <div className="semrush"><a href="cc"><img src={WordPress} alt="rea" className="wordpress"/></a></div>
                    <div className="semrush"><a href="https://www.hubspot.com/"><img src={Html5icon} alt="htm" className="imhusb"/></a></div>
                    <div className="semrush"><a href="https://developers.google.com/certification"><img src={Cssicon} alt="css" className="CSS"/></a></div>

                   
                

                
            </div>
        )
    }
}
export default Certificationcontainer