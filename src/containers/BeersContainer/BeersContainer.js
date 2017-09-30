import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Beers, Pagination } from '../../components';
import { fetchBeers } from '../../actions';

class BeersContainer extends Component {
  componentDidMount() {
    this.props.loadBeers();
  }

  render() {
    const {
      items,
      isFetching,
      hasError,
      loadPage,
      page,
      isLastPage
    } = this.props;
    if (hasError) return <h3>Sorry, there was an error while loading beers.</h3>;
    if (isFetching) return <h3>Loading beers...</h3>;
    return !!items.length && (
      <div>
        <Beers items={items}/>
        <Pagination
          onPageClick={loadPage}
          currentPage={page}
          isLastPage={isLastPage}
        />
      </div>
    )
  }
}

const mapStateToProps =
  ({
     beers: {
       items,
       isFetching,
       hasError,
       page,
       isLastPage
     }
   }) => {
    return {
      items,
      isFetching,
      hasError,
      page,
      isLastPage
    }
  };

const mapDispatchToPros = dispatch => ({
  loadBeers: () => dispatch(fetchBeers()),
  loadPage: (page) => dispatch(fetchBeers(page)),
});

export default connect(
  mapStateToProps,
  mapDispatchToPros
)(BeersContainer);