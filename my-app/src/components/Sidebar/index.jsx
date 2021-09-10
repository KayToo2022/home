import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useHistory
  } from "react-router-dom";
  import {useEffect, useState} from "react";

import Logo from "../../images/Logo.jpg"
import "./Sidebar.css"

function Sidebar() {
    const [dropdown, toggleDropdown] = useState(false)

    const showDropdown = () => {
        return(
            <div>
                <p>
                    <Link to="/home/WebPortfolio" className="sublinks">Web Development</Link>
                </p>
                <p> 
                    <Link to="/home/SoftwarePortfolio" className="sublinks">Software Development</Link>
                </p>
            </div>
            
        )
    }

    return (
        <div style={{textAlign: 'center', height: '100vh'}}>
            <img src={Logo} style = {{height: '50px', width: '50px', borderRadius:'50%', marginTop: '40px'}}></img>

            <h1>
                <Link to="/home/" className="links">Kyle Tu</Link>
            </h1>

            <p>kaytoo2022@gmail.com</p>
            
            <p>
                <Link to="/home/" className="links">Home</Link> 
            </p>
            
            {/* <p>
                <Link to="/Blog" className="links">Blog</Link>
            </p> */}
            
            <p className="links" onClick={()=>{toggleDropdown(!dropdown)}}>
                Portfolio
            </p>

            <p>
                <Link to="/home/CoverLetter" className="links">Cover Letter Generator</Link> 
            </p>

            {dropdown
                ? showDropdown()
                : null
            }
                
            <p>
                <a href="https://docs.google.com/document/d/1HfQWGTYjcnomf1kFJP9o5jeZVK7PxHznHnXaFY5pnG8/edit?usp=sharing" target="_blank" className="links">Resume</a>
            </p>            
        </div>
    )
}

export default Sidebar