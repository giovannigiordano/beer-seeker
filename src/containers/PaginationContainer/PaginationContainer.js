import React from 'react';
import { connect } from 'react-redux';
import { fetchBeers } from '../../actions';
import { Pagination } from '../../components';

const PaginationContainer = (props) => {
  const { page, abv, ibu, loadBeersPage } = props;
  return <Pagination
    currentPage={page}
    onPageClick={(page) => loadBeersPage(page, abv, ibu)}/>
};

const mapStateToProps =
  ({
     beers: {
       page,
       abv,
       ibu,
       isLastPage
     }
   }) => {
    return {
      page,
      abv,
      ibu,
      isLastPage
    }
  };

const mapDispatchToProps = dispatch => ({
  loadBeersPage: (page, abv, ibu) => dispatch(fetchBeers(page, abv, ibu))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PaginationContainer);