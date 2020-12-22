import React from "react";
import "./Lastproj.css";
import lastproj from "./lastproj.jpg"


class Lastproj extends React.Component{
 
    render(){



        return(


            <div className="lastproj">
                <div>
                    <h1 className="h1">Featured projects</h1>
                </div>
                <div className="pandi">
                    <div className="par">
                    <h2>Pomodoro Timer</h2>
                    <p>Website</p>
                    <p>pomodoroTimer
                        timer helps you manage your work and helps you by arranging your time.</p>
                        <p>  I worked on this project through Rect js technology.
                        See project pomodoroTimer</p> 
                    <div className="link">
                    <a href="https://yahyapomodorotimer.netlify.app/" target="_blank" class="text-link">Visit Pomodoro Timer</a>
                    </div>
                    </div>
                    <div className="imgofp">
                    <a href="https://yahyapomodorotimer.netlify.app/" ><img src={lastproj} ref="https://www.nicolewarshauer.com/?utm_source=kristina-marketing&amp;utm_medium=portfolio"  width="500" alt="" class="portfolio-image"/>
                    </a>
                    </div>


                </div>
            </div>
        )
    }



}
export default Lastproj