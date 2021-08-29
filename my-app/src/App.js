import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useHistory
} from "react-router-dom";

import Home from "./components/Home"
import PortfolioSummary from "./components/PortfolioSummary"
import Navbar from "./components/Navbar"
import Sidebar from "./components/Sidebar"
import WebPortfolio from"./components/WebPortfolio"
import SoftwarePortfolio from"./components/SoftwarePortfolio"

import "./App.css";

export default function BasicExample() {
  return (
    <Router>
      <div className="App">
          <div className="side" style={{width: '300px', float: 'left'}}>
            <nav className="navbar side navbar-expand-lg navbar-light p-0" >
              
              <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <Sidebar/>
              </div>
            </nav>  
          </div>
          <div className="main" style={{float: 'left', backgroundColor:'#c9cece'}}>
            <div style={{backgroundColor: 'white', margin:'50px'}}>
              <Switch>
                <Route exact path="/">
                  <Home/>
                  <PortfolioSummary/>
                  
                </Route>
                <Route path="/about">
                  <About />
                </Route>
                <Route path="/WebPortfolio">
                  <WebPortfolio/>
                </Route>
                <Route path="/SoftwarePortfolio">
                  <SoftwarePortfolio/>
                </Route>
                <Route path="/contactme">
                  <ContactMe />
                </Route>

              </Switch>
            </div>
             
          </div>
      </div>
   </Router>
  );
}

// You can think of these components as "pages"
// in your app.

// function Home() {
//   return (
//     <div>
//       <h2>Home</h2>
//     </div>
//   );
// }

function About() {
  return (
    <div>
      <h2>about filler</h2>
    </div>
  );
}

function Dashboard() {
  return (
    <div>
      <h2>portfolio filler</h2>
    </div>
  );
}

function ContactMe() {
  return (
    <div>
      <h2>contact filler</h2>
    </div>
  )
}