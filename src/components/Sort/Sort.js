import React from 'react';
import { SORT_VALUES } from '../../constants';

const Sort = ({ onSelect }) => {
  return (
    <div className="input-block">
      <label>Sort by</label>
      <select
        name="sort"
        onChange={(e) => onSelect(e.target.value)}>
        {SORT_VALUES.map(el => (
          <option key={el[0].trim()} value={el[0]}>{el[1]}</option>
        ))}
      </select>
    </div>
  )
};

export default Sort;