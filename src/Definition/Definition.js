import React from "react";
import "./Definition";
import Dev from "./Dev..jpg"
import "./Definition.css"


class Definition extends React.Component{



    render(){
        return(


            <div className="Def">


                <div className="definition">
                    <div className="pp">

                        <h1 className="pp">
                            Hey, my name is YAHYA 
                        </h1>
                        <h2 className="pp2">
                            Hello, I'm Yahya Alloucha from Morocco in my early twenties,
                            I'm an enthusiastic and detail-oriented Frontend Software Engineer seeking an entry-level position with Company to use my skills in coding, troubleshooting complex problems, and assisting in the timely completion of projects.

                        </h2>
                    </div>
                    <div className="img">
                        <img src={Dev} alt="developer" className="dev" />

                    </div>

                </div>
                <div className="but">
                       <a href="#myworkid"><button className="but1">My Work</button></a>
                       <a href="#contactid" ><button className="but2">Let's Talk</button></a>

                </div>
            </div>
        )
    }
}

export default Definition