import React, { Component } from 'react';
import svg from './assets/images/beer.svg';
import { BeersContainer, FiltersContainer, PaginationContainer } from './containers';

class App extends Component {
  render() {
    return (
      <div>
        <img src={svg} alt="" width={128} height={128}/>
        <div>
          <FiltersContainer/>
          <BeersContainer/>
          <PaginationContainer/>
        </div>
      </div>
    );
  }
}

export default App;
