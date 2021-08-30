import {useEffect, useState} from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useHistory
  } from "react-router-dom";

import styles from "./Navbar.module.css";

import Hamburger from "../../images/Hamburger.png"

function Navbar() {
    const [hamburger, toggleHamburger] = useState(false);

    return(
        <div 
            style={{
                backgroundColor: "white",
                display: "flex",
                // alignItems: 'center',
                height: "80px",
                position: "relative",
                zIndex: "100",
                width: "100vw",
                // maxWidth: "100%",
            }}
        >
            {/* <div style={{float: 'left', width: '25%'}}>
                <Link to="/home/" className={styles.linkButton} >Kyle Tu</Link>
            </div>
            <div style={{float: 'left', width: '75%'}}>
                <a href="https://docs.google.com/document/d/1HfQWGTYjcnomf1kFJP9o5jeZVK7PxHznHnXaFY5pnG8/edit?usp=sharing" target="_blank" className={styles.linkButton} style={{float: 'right'}}>Resume</a>
                <Link to="/SoftwarePortfolio" className={styles.linkButton} style={{float: 'right'}}>Software Portfolio</Link>
                <Link to="/WebPortfolio" className={styles.linkButton} style={{float: 'right'}}>Web Portfolio</Link>
                <Link to="/home/" className={styles.linkButton} style={{float: 'right'}}>Home</Link>
            </div> */}
            <div style={{width: '33%', border: 'solid'}}>
                <img src={Hamburger} style={{height: '40px', margin: '20px'}}></img>
            </div>
            <div style={{width: '33%', border: 'solid', textAlign: 'center'}}>
                <h1>
                    <Link to="/home/">Kyle Tu</Link>
                </h1>
                
            </div>
            <div style={{width: '33%', border: 'solid'}}>

            </div>
        </div>
    )
}

export default Navbar