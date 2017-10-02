import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'
import svg from '../assets/images/beer.svg';
import Beers from './Beers'
import BeerDetail from './BeerDetail'

const AppRouter = () => (
  <Router>
    <div>
      <Link to='/'>
        <img src={svg} alt="" width={128} height={128}/>
      </Link>
      <Route exact path="/" component={Beers}/>
      <Route path="/:beerId" component={BeerDetail}/>
    </div>
  </Router>
);
export default AppRouter;