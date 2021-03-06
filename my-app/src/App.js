import {React, useEffect, useState}from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useHistory,
  HashRouter
} from "react-router-dom";

import Home from "./components/Home"
import PortfolioSummary from "./components/PortfolioSummary"
import Navbar from "./components/Navbar"
import Sidebar from "./components/Sidebar"
import WebPortfolio from"./components/WebPortfolio"
import SoftwarePortfolio from"./components/SoftwarePortfolio"
import MobileNav from "./components/MobileNav"
import Education from "./components/Education"

import CoverLetter from "./components/CoverLetter"

import "./App.css";

function getWindowDimensions() {
  const { innerWidth: width, innerHeight: height } = window;
  return {
    width,
    height
  };
}

export default function App() {
  const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions());

  useEffect(() => {
    function handleResize() {
      setWindowDimensions(getWindowDimensions());
    }

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  
  // console.log(window.innerHeight)
  console.log(getWindowDimensions().width)
  if (getWindowDimensions().width < 800) {
    return (
      <div>
        <MobileNav/>
        
        <div className="App">
            
            <div className="main" style={{float: 'left', backgroundColor:'#c9cece', width: '100vw', marginTop: '80px'}}>
              <div style={{backgroundColor: 'white', margin:'50px'}}>
                <HashRouter basename="/home">
                  <Switch>
                    <Route exact path="/">
                      <Home/>
                      <PortfolioSummary/>
                      
                    </Route>
                    <Route path="/version">
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

                    <Route path="/CoverLetter">
                      <CoverLetter />
                    </Route>

                    <Route path="/education">
                      <Education/>
                    </Route>

                  </Switch>
                </HashRouter>
              </div>
               
            </div>
        </div>
     </div>
    );
  }
  return (
    
      
      
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
                    <Route path="/version">
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


                    <Route path="/CoverLetter">
                      <CoverLetter />
                    </Route>

                    <Route path="/education">
                      <Education/>
                    </Route>

                    
                  </Switch>
                
              
            </div>
             
          </div>
      </div>
   
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
      <h2>last update on 09/16/2021</h2>
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
