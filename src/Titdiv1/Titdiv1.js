import React from "react";
import { Link } from "react-router-dom";
import "./Titdiv1.css";




class Titdiv1 extends React.Component{


    render(){
        return(


            <div className="Titdiv1">
                <div className="mylogo">

                    <Link to="/Home" data-target="#about"><h1 className="mylogo">Ya</h1></Link>
                </div>


                <div className="P">
                    <Link to={{ pathname: "/", hash: "#aboutcontainerid" }} data-target="#aboutcontainerid" className="p1">About</Link>
                    <a href="#myworkid" className="p1">Services</a>
                    <Link to="/Pricing" className="p1">Pricing</Link>
                    <a href="#contactid" className="p1">Contact</a>
                </div>
            </div>
        );
    }


}
export default Titdiv1;