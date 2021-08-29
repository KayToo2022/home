import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useHistory
  } from "react-router-dom";

import styles from "./Navbar.module.css";

function Navbar() {
    return(
        <div 
            style={{
                backgroundColor: "#E7404A",
                display: "flex",
                // alignItems: 'center',
                height: "80px",
                position: "relative",
                zIndex: "100",
                width: "100vw",
                // maxWidth: "100%",
            }}
        >
            <div style={{float: 'left', width: '30%'}}>
                Kyle Tu
            </div>
            <div style={{float: 'left', width: '70%'}}>
                <Link to="/contact" className={styles.linkButton} style={{float: 'right'}}>Contact Me</Link>
                <Link to="/portfolio" className={styles.linkButton} style={{float: 'right'}}>Portfolio</Link>
                <Link to="/about" className={styles.linkButton} style={{float: 'right'}}>About</Link>
                <Link to="/" className={styles.linkButton} style={{float: 'right'}}>Home</Link>
            </div>
            
        </div>
    )
}

export default Navbar