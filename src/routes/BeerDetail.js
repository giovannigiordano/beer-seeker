import React from 'react';
import { Link } from 'react-router-dom';
import { BeerDetail as Detail } from '../components';

const BeerDetail = ({ location }) => {
  return (
    <div>
      <p>Back to <Link to="/">/</Link></p>
      <Detail item={location.state.item}/>
    </div>
  )
};

export default BeerDetail;