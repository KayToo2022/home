import {useEffect, useState} from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useHistory
  } from "react-router-dom";

import "./MobileNav.css";

import Logo from "../../images/Logo.jpg"
import Hamburger from "../../images/Hamburger.png"

function MobileNav() {
    const [hamburger, toggleHamburger] = useState(false);

    const displayDropdown = () => {
        return (
            <div>
                <div style={{backgroundColor: 'gray', width: '100vw', height: '100vh', opacity: '50%', zIndex: '99', position: 'absolute'}}>
                
                </div>
                <div style={{backgroundColor: 'white', overflow: 'auto', position: 'absolute', top: '80px', width: '300px', textAlign: 'center', zIndex: '100', opacity: '100%'}}>
                    <img src={Logo} style = {{height: '50px', width: '50px', borderRadius:'50%', marginTop: '40px'}}></img>
                    <h1>
                        <Link to="/home/" className="links">Kyle Tu</Link>
                    </h1>

                    <p className="email">kaytoo2022@gmail.com</p>

                    <p>
                        <Link to="/home/" className="links" onClick={()=>{
                            toggleHamburger(false)
                        }}>Home</Link> 
                    </p>
                    <p>
                        <Link to="/WebPortfolio" className="links" onClick={()=>{
                            toggleHamburger(false)
                        }}>Web Portfolio</Link> 
                    </p>
                    <p>
                        <Link to="/SoftwarePortfolio" className="links" onClick={()=>{
                            toggleHamburger(false)
                        }}>Software Portfolio</Link> 
                    </p>
                    <p>
                        <a href="https://docs.google.com/document/d/1HfQWGTYjcnomf1kFJP9o5jeZVK7PxHznHnXaFY5pnG8/edit?usp=sharing" target="_blank" className="links" onClick={()=>{
                            toggleHamburger(false)
                        }}>Resume</a>
                    </p>   
                
                </div>
            </div>
            
        )
    }

    return(
        <>
        <div 
            style={{
                backgroundColor: "white",
                display: "flex",
                // alignItems: 'center',
                height: "80px",
                position: "absolute",
                zIndex: "100",
                width: "100vw",
                // maxWidth: "100%",
            }}
        >
            <div style={{width: '33%'}}>
                <img src={Hamburger} style={{height: '40px', margin: '20px'}} onClick={()=>{
                    console.log(hamburger)
                    toggleHamburger(!hamburger)
                }}></img>
            </div>
            <div style={{width: '33%', textAlign: 'center'}}>
                <h1>
                    <Link to="/home/" className="links" onClick={()=>{
                        toggleHamburger(false)
                    }}>Kyle Tu</Link>
                </h1>
                
            </div>
            

            
        </div>
        {
            hamburger
                ? displayDropdown()
                : null
        }
        </>
    )
}

export default MobileNav