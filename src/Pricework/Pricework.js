import React from "react";
import "./Pricework.css";
import process from "./process.png";




class Pricework extends React.Component{


    render(){




        return(

       
                     <div className="pricework1">



                        <div className="process">
                            <h1 className="h-process">Process & Pricing</h1>
                            <p className="p-of-process">A lot of my process is research and planning. we will talk about the project and about the process and the time of prcess if you need any informations about pricing  </p>
                            
                            <a href="#pricing" class="button-outlined w-button">Go to Pricing</a>
                        </div>
                        <div>
                            <img src={process} alt="ppa" className="process"/>
                        </div>
                    </div>
                    

                    
       
           
        )
    }
}
export default Pricework