import React from 'react';
import { Link } from 'react-router-dom';

const BeerDetail = ({ match }) => (
  <div>
    Back to <Link to="/">/</Link>
    <h3>{match.params.beerId}</h3>
  </div>
);

export default BeerDetail;