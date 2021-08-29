import {Link} from "react-router-dom";

import "./SoftwarePortfolio.css"
import IOLogo from "../../images/ioLogo.png"
import Spheres from "../../images/Spheres.jpg"
import Ship from "../../images/Ship.png"

import M4ME from "../../images/M4ME.png"
import SF from "../../images/SF.png"
import Manifest from "../../images/Manifest.png"

function SoftwarePortfolio() {
    return(
        <>
            <div style={{paddingTop: '20px', paddingLeft: '40px', paddingRight: '40px', paddingBottom:'20px'}}>
                <h1>Software Development Portfolio</h1>

                <p className="subheader">Raytracer</p>

                <div style={{height: '200px'}}>
                    <div style={{width: '30%', float: 'left'}}>
                        <img src={Spheres} style={{width: '100%'}}></img>
                    </div>

                    <p style={{width: '65%',marginLeft: '5%', float: 'left'}}>
                        The image on the left was rendered with a raytracer coded in C++ and the openFrameworks library. The raytracer uses a basic raytracing algorithm
                        to shoot a ray from the camera, check which object it colides with, and sets the pixel in the image to the proper color. The code can be found on
                        the Github below.

                        <p>
                            <a href="https://github.com/KayToo2022/RayTracer" target="_blank" className="link">Raytracer Code</a>
                        </p>
                    </p>
                </div>
                
                

                
                <br/>

                <p className="subheader">Flight Simulation Demo</p>

                <div style={{height: '150px'}}>

                    <p style={{width: '65%', float: 'left'}}>
                        This flight simulation demo was coded in C++ and the openFrameworks library. It is a simple game where the player is tasked with landing their ship
                        into a designated landing zone with a set amount of fuel. The ship on the right is the model of the ship in the demo. The code can be found on the 
                        Github below

                        <p>
                            <a href="https://github.com/KayToo2022/MarsLander" target="_blank" className="link">Flight Simulation Demo Code</a>
                        </p>
                    </p>

                    <div style={{width: '30%', marginLeft: '5%', float: 'left'}}>
                        <img src={Ship} style={{width: '100%'}}></img>
                    </div>
                </div>

                <br/>

                <p className="subheader">AI Hangman</p>

                <div style={{height: '120px'}}>

                    <p style={{width: '100%', float: 'left'}}>
                        The AI Hangman project was a study in how different AI approaches can be used in the game of hangman with both a simple approach and a complex
                        approach in Python. The study used an iterative approach and a Q-table approach to the game of hangman. The code is not public but the writeup
                        of the project is available in the link below.

                        <p>
                            <a href="https://docs.google.com/document/d/1uLRyhk7xVR71vjlAi87KWIVEYBNGnM4Zs-OLRljIFlk/edit?usp=sharing" target="_blank" className="link">AI Hangman Report</a>
                        </p>
                    </p>
                </div>

                <br/>

                <p className="subheader">Tinnitus Clinical System</p>

                <div style={{height: '120px'}}>
                    

                    <p style={{width: '100%', float: 'left'}}>
                        The Tinnitus Clinic System project was a study of object oriented design and how it can be applied, in this case, to a tinnitus clinic. This project's code is not public
                        but the writeup of the project showcasing UML diagrams of the project is available in the link below.

                        <p>
                            <a href="https://docs.google.com/document/d/17ze1Y0i_vfi8gkIPhUZzENQOjgJuQS4vXhX-iG-JO-E/edit?usp=sharing" target="_blank" className="link">Tinnitus Clinical System Report</a>
                        </p>
                    </p>
                </div>
                
                
            </div>
            
        </>
        
    )
}

export default SoftwarePortfolio