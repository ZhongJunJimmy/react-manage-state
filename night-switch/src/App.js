import React from 'react';
import Header from './components/Header/Header';
import { SwitchStateProvider } from './context/SwitchStateContext';
import './App.css';


const App = () => {
    return (
    <div className="App">
      <SwitchStateProvider>
        <Header />
      </SwitchStateProvider>
      
    </div>
  );
}

export default App;
