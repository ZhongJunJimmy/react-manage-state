import React, { Component } from 'react';
import Header from './components/Header/Header';
import './App.css';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      switchState: false
    };
    this.switchOnOrOff = this.switchOnOrOff.bind(this);
  }

  switchOnOrOff(){
    //console.log(this);
    (this.state.switchState)?this.setState({switchState:false}):this.setState({switchState:true});
  }

  render(){
    return (
    <div className="App">
      <Header clickFunc = {this.switchOnOrOff} switchState = {this.state.switchState} />
    </div>
  );
  }
  
}

export default App;
