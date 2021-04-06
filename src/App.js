import './App.css';
import React, { useEffect, useState, useLayoutEffect } from "react";
import Navbar from './Components/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './Components/Pages/Home'
import floor1 from './Components/Pages/Floor-1';
import floor2 from './Components/Pages/Floor-2';
import floor3 from './Components/Pages/Floor-3';
import floor4 from './Components/Pages/Floor-4';
import floorll from './Components/Pages/Floor-LL';
import EasterEggLanding from './Components/Easter-Eggs/Easter-Egg-Landing'
import { EasterEggProvider } from './Components/context'
import DesktopSplash from './Components/DesktopSplash'
import RubbySlippers from './Components/Easter-Eggs/892067'

function useWindowSize() {
  const [size, setSize] = useState([0, 0]);
  useLayoutEffect(() => {
    function updateSize() {
      setSize([window.innerWidth, window.innerHeight]);
    }
    window.addEventListener('resize', updateSize);
    updateSize();
    return () => window.removeEventListener('resize', updateSize);
  }, []);
  return size;
}


function App() {
  const [width, height] = useWindowSize();
  //Render desktop splash page on dimensions bigger than 768px
  if (width > 768) {
    return (<div className="App">
      <DesktopSplash />
    </div>
    );
  } else {
    //Render app when on mobile
    return (
      <div className="App">
        {/* <div>{width} x {height}</div> */}
        <EasterEggProvider>
          <Router>
            <Navbar />
            <Switch>
              <Route path='/' exact component={Home} />
              <Route path='/floor-1' exact component={floor1} />
              <Route path='/floor-2' exact component={floor2} />
              <Route path='/floor-3' exact component={floor3} />
              <Route path='/floor-4' exact component={floor4} />
              <Route path='/floor-ll' exact component={floorll} />
              <Route path='/Easter-Egg-Landing' exact component={EasterEggLanding} />
              <Route path='/892067' exact component={RubbySlippers} />
              {/* ---------External link paths--------- */}
              <Route path='/quantum-health' component={() => {
                window.location.href = 'https://quantum-health.com/';
                return null;
              }} />
               <Route path='/privacy-policy' component={() => {
                window.location.href = 'https://quantum-health.com/';
                return null;
              }} />
              <Route path='/terms-of-use' component={() => {
                window.location.href = 'https://quantum-health.com/';
                return null;
              }} />
              <Route path='/accreditation' component={() => {
                window.location.href = 'https://quantum-health.com/';
                return null;
              }} />
              <Route path='/site-map' component={() => {
                window.location.href = 'https://quantum-health.com/';
                return null;
              }} />
            </Switch>
          </Router>
        </EasterEggProvider>
      </div>
    );
  }




}

export default App;
