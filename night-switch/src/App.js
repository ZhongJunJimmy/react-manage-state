import React, { useState } from 'react';
import Header from './components/Header/Header';
import './App.css';


function App(){
  const [switchState, setSwitchState] = useState(0);

  const switchOnOrOff = () => {
    //console.log(this);
    (switchState)?setSwitchState(0):setSwitchState(1);
  }

  return (
    <div className="App">
      <Header clickFunc = {switchOnOrOff} switchState = {switchState} />
    </div>
  );
}


export default App;
