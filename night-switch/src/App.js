import React, { useState, useEffect } from 'react';
import Header from './components/Header/Header';

import switchOnImg from './images/switch-on.png'
import switchOffImg from './images/switch-off.png'
import './App.css';


function App() {
  const [switchState, setSwitchState] = useState(0);
  const [test, setTest] = useState(0);

  useEffect(() => {
    if (switchState) {
      document.getElementById("header").className = "App-header-light"
      document.getElementById("light-switch").setAttribute('src', switchOnImg);
    }
    else {
      document.getElementById("header").className = "App-header-dark"
      document.getElementById("light-switch").setAttribute('src', switchOffImg);
    }
  }, [switchState])

  const switchOnOrOff = () => {
    //console.log(this);
    setSwitchState((prevn) => {
      return !prevn;
    })
  }

  return (
    <div className="App">
      <Header switchOnOrOff={ switchOnOrOff } switchState={ switchState } />
    </div>
  );
}


export default App;
