import React, { Component } from 'react';
import './App.css';
import svg from './assets/images/beer.svg';
import store from './store'
class App extends Component {
  render() {
    return (
      <div className="App">
        <img src={svg} alt="" width={128} height={128}/>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Expedita, fugiat.</p>
      </div>
    );
  }
}

export default App;
