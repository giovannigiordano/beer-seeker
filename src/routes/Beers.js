import React from 'react';
import { BeersContainer, FiltersContainer, SortContainer, PaginationContainer } from '../containers'

const Beers = () => (
  <div>
    <FiltersContainer/>
    <SortContainer/>
    <BeersContainer/>
    <PaginationContainer/>
  </div>
);

export default Beers;