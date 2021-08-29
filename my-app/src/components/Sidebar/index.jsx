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
                    <Link to="/WebPortfolio" className="sublinks">Web Development</Link>
                </p>
                <p> 
                    <Link to="/SoftwarePortfolio" className="sublinks">Software Development</Link>
                </p>
            </div>
            
        )
    }

    return (
        <div style={{textAlign: 'center', height: '100vh'}}>
            <img src={Logo} style = {{height: '50px', width: '50px', borderRadius:'50%', marginTop: '40px'}}></img>

            <h1>
                <Link to="/home" className="links">Kyle Tu</Link>
            </h1>

            <p>kaytoo2022@gmail.com</p>
            
            <p>
                <Link to="/home" className="links">Home</Link> 
            </p>
            
            <p>
                <Link to="/about" className="links">About</Link>
            </p>
            
            <p className="links" onClick={()=>{toggleDropdown(!dropdown)}}>
                Portfolio
            </p>

            {dropdown
                ? showDropdown()
                : null
            }
                
            <p>
                <Link to="/contactme" className="links">Contact Me</Link>
            </p>            
        </div>
    )
}

export default Sidebar