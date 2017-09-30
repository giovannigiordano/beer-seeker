import React, { Component } from 'react';

class Pagination extends Component {
  render() {
    const { onPageClick, currentPage, isLastPage } = this.props;
    return (
      <div>
        {isLastPage && <p><strong>Sorry, there aren't other beers.</strong></p>}
        {currentPage > 1 &&
         <button
           onClick={() => onPageClick(currentPage - 1)}>Prev</button>}
        {!isLastPage &&
         <button
           onClick={() => onPageClick(currentPage + 1)}>Next</button>
        }
      </div>
    )
  }
}

export default Pagination;