import React from "react";
import { Link } from "react-router-dom";
import "./Titdiv.css";
import mylogoy from "./mylogoy.png";
import { HashLink } from 'react-router-hash-link';




class Titdiv extends React.Component{


    render(){
        return(


            <div className="Titdiv">
                <div className="mylogo">

                <HashLink to='/' className="mylogoP"><img src={mylogoy} alt="my"  className="mylogoy"/>
                </HashLink>
                </div>


                <div className="P">
                    <HashLink to='/#aboutcontainerid' className="p1">
                    <a href='kk'  className="p1" id="about">About</a> 
                    </HashLink>
                    <HashLink to='/#myworkid' className="p1">
                    <a href="kk" className="p1">Services</a>
                    </HashLink>
                    <Link to="/Pricing" className="p1"><a href="mm" className="p1">Pricing</a></Link>
                    <HashLink to='/#contactid' className="p1">
                    <a href="kk" className="p1">Contact</a>
                    </HashLink>
                    
                </div>
            </div>
        );
    }


}
export default Titdiv;