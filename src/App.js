import './App.css';
import React, {  useState, useLayoutEffect } from "react";
import Navbar from './Components/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './Pages/Home'
import floor1 from './Pages/Floor-1';
import floor2 from './Pages/Floor-2';
import floor3 from './Pages/Floor-3';
import floor4 from './Pages/Floor-4';
import lowerLevel from './Pages/Floor-LL';
import { EasterEggProvider } from './Components/context'
import DesktopSplash from './Components/DesktopSplash'
import ScrollToTop from './ScrollToTop'
// Floor 1 imports
import Gorilla from './Easter-Eggs/Gorilla'
import RubbySlippers from './Easter-Eggs/892067'
// Floor 2 imports
import WarmFuzzy from './Easter-Eggs/warm-fuzzy-2'
import Birds from './Easter-Eggs/Birds-2'
import PutEmUp from './Easter-Eggs/Put-em-up-2'
// Floor 3 imports
import Dumptruck from './Easter-Eggs/DumpTruck-3'
import NoJacasses from './Easter-Eggs/NoJackasses-3'
import Sparrows from './Easter-Eggs/sparrows-3'
// Floor 4 imports
import Lego from './Easter-Eggs/Lego-4'
import Brain from './Easter-Eggs/Brain-4'
import Lollipops from './Easter-Eggs/Lollipops-4'
import './Pages/Pages.css'





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
 
  const [width] = useWindowSize();
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
            <ScrollToTop>

              <Navbar />
              <Switch>
                <Route path='/' exact component={Home} />
                <Route path='/floor-1' exact component={floor1} />
                <Route path='/floor-2' exact component={floor2} />
                <Route path='/floor-3' exact component={floor3} />
                <Route path='/floor-4' exact component={floor4} />
                <Route path='/lowerLevel' exact component={lowerLevel} />
                {/* ---------Easter Egg link paths--------- */}
                {/* <Route path='/Easter-Egg-Landing' exact component={EasterEggLanding} /> */}
                <Route path='/Gorilla' exact component={Gorilla} />
                <Route path='/892067' exact component={RubbySlippers} />
                {/* ---------Floor 2--------- */}
                <Route path='/WarmAndFuzzy' exact component={WarmFuzzy} />
                <Route path='/TheBirds' exact component={Birds} />
                <Route path='/PutEmUp' exact component={PutEmUp} />
                {/* ---------Floor 3--------- */}
                <Route path='/DumpTruck' exact component={Dumptruck} />
                <Route path='/NoJackasses' exact component={NoJacasses} />
                <Route path='/Sparrows' exact component={Sparrows} />
                {/* ---------Floor 4--------- */}
                <Route path='/Lego' exact component={Lego} />
                <Route path='/Brain' exact component={Brain} />
                <Route path='/Lollipops' exact component={Lollipops} />
              </Switch>
            </ScrollToTop>
          </Router>
        </EasterEggProvider>
      </div>
    );
  }




}

export default App;
