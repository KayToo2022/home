import {Link} from "react-router-dom";

import "./PortfolioSummary.css"
import IOLogo from "../../images/ioLogo.png"
import Spheres from "../../images/Spheres.jpg"

function PortfolioSummary() {
    return(
        <>
            <div style={{paddingTop: '20px', paddingLeft: '40px', paddingRight: '40px', paddingBottom:'20px', overflow: 'auto'}}>
                <h1>Portfolio Summary</h1>

                <p className="subheader">Web Development</p>

                <div style={{width: '40%', float: 'left'}}>
                    <img src={IOLogo} style={{width: '100%'}}></img>
                </div>

                <div style={{width: '60%', float: 'left'}}>
                    During the summer of 2021, I had the opportunity to intern at Infinite Options LLC as a Front-End Development Intern 
                    where I helped develop some of their in-house projects, such as Meals For Me and Serving Fresh, and more.

                    <p>
                        <Link to="/WebPortfolio" className="link">Learn More</Link>
                    </p>
                </div>
                

                
                
                <br/>

                <p className="subheader">Software Development</p>

                <div style={{width: '70%', float: 'left'}}>
                    Before learning web-development, I would code more random things like the image on the right. This image was rendered 
                    in a custom Ray-Tracer that I built using C++ and the openFrameworks library. The Raytracer is able to render objects
                    in a space and shade them properly according to the lights placed. Besides this, I also have projects in both Java and 
                    Python.
                    <p>
                        <Link to="/SoftwarePortfolio" className="link">Learn More</Link>
                    </p>
                </div>
                
                <div style={{width: '30%', float: 'left', marginBottom: '40px'}}>
                    <img src={Spheres} style={{width: '100%'}}></img>
                </div>

                


                
                
            </div>
            {/* <div style={{marginLeft: '40px', marginRight: '40px'}}>
                <hr/>
            </div> */}
        </>
        
    )
}

export default PortfolioSummary