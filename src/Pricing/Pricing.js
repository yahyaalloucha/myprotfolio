import React from "react";
import "./Pricing.css";
import Titdiv from "../titdiv /Titdiv";
import Pricework from "../Pricework/Pricework";
import Partpricing from "../Partpricing/Partpricing";
import Final from "../Final/Final";




class Pricing extends React.Component {



    render(){




        return(

                <div>

                    <Titdiv></Titdiv>
                    <Pricework></Pricework>
                    <Partpricing></Partpricing>
                    <Final></Final>
                    
                    

                </div>

            
        )
    }

}
export default Pricing