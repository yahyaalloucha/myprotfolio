import React from "react";
import "../App.css";
import Titdiv from "../titdiv /Titdiv";
import Definition from "../Definition/Definition"
import Wahtido from "../Whatiado/Whatiado";
import Mywork from "../Mywork/Mywork";
import Lastproj from "../Lastproj/Lastproj";

import Lastproj2 from "../Lastprojec2/Lastproject2";

import Aboutcontainer from "../Aboutcontainer/Aboutcontainer";
import Certificationcontainer from "../Certificationcontainer/Certificationcontainer";
import Alionedtext from "../Alionedtext/Alionedtext";
import Containertow from "../Containertow/Containertow";
import Final from "../Final/Final";
 

class Home extends React.Component{



    render(){



        return(



            <div>

                <Titdiv></Titdiv>
                <Definition></Definition>
                <Wahtido></Wahtido>
                <Mywork></Mywork>
                <Lastproj></Lastproj>
                <Lastproj2></Lastproj2>
                <Aboutcontainer></Aboutcontainer>
                <Certificationcontainer></Certificationcontainer>
                <Alionedtext></Alionedtext>
                <Containertow></Containertow>
                <Final></Final>
            </div>
        )
    }
}
export default Home