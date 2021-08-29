import {Link} from "react-router-dom";

import "./SoftwarePortfolio.css"
import IOLogo from "../../images/ioLogo.png"
import Spheres from "../../images/Spheres.jpg"

import M4ME from "../../images/M4ME.png"
import SF from "../../images/SF.png"
import Manifest from "../../images/Manifest.png"

function SoftwarePortfolio() {
    return(
        <>
            <div style={{paddingTop: '20px', paddingLeft: '40px', paddingRight: '40px', paddingBottom:'20px'}}>
                <h1>Software Development Portfolio</h1>

                <p className="subheader">Meals For Me (Infinite Options)</p>

                <div style={{height: '200px'}}>
                    <div style={{width: '20%', float: 'left'}}>
                        <img src={M4ME} style={{width: '100%'}}></img>
                    </div>

                    <p style={{width: '75%',marginLeft: '5%', float: 'left'}}>
                        Meals For Me is a meal subscription service from Infinite Options written in javascript and React. While I was on this project, 
                        I was responsible for maintaining customer-facing components as well as developing some of the employee-facing tools. On this
                        project, I developed a tool to confirm delivery addresses with the United-States Postal Service and a tool to manage Meals For Me's 
                        delivery zones.

                        <p>
                            <a href="https://mealsfor.me/" target="_blank" className="link">Learn More</a>
                        </p>
                    </p>
                </div>
                
                

                
                <br/>

                <p className="subheader">Serving Fresh (Infinite Options)</p>

                <div style={{height: '200px'}}>
                    <div style={{width: '20%', float: 'left'}}>
                        <img src={SF} style={{width: '100%'}}></img>
                    </div>

                    <p style={{width: '75%',marginLeft: '5%', float: 'left'}}>
                        Serving Fresh is a delivery service written in javascript and React that brings farmer market produce to your door. While I was on this project, I was responsible
                        for taking the same zones management system I implemented for Meals For Me and implementing it for Serving Fresh. This component is
                        solely employee-facing but feel free to check out their site.

                        <p>
                            <a href="https://servingfresh.me/" target="_blank" className="link">Learn More</a>
                        </p>
                    </p>
                </div>

                <br/>

                <p className="subheader">Manifest (Infinite Options)</p>

                <div style={{height: '200px'}}>
                    <div style={{width: '20%', float: 'left'}}>
                        <img src={Manifest} style={{width: '100%'}}></img>
                    </div>

                    <p style={{width: '75%',marginLeft: '5%', float: 'left'}}>
                        Manifest is a productivity app developed in a collaboration with Infinite Options and Tulane University that allows people with short-term memory loss gain control
                        of their lives. I helped develop their admin site written in javascript and React which allowed advisors of patients manage their patients.

                        <p>
                            <a href="https://manifestmy.space/" target="_blank" className="link">Learn More</a>
                        </p>
                    </p>
                </div>


                
                
            </div>
            
        </>
        
    )
}

export default SoftwarePortfolio