import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Beers, Pagination } from '../../components';
import { fetchBeers, fetchBeersByAbvGt } from '../../actions';

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
      isLastPage,
      searchByAbv,
      abv
    } = this.props;
    if (hasError) return <h3>Sorry, there was an error while loading beers.</h3>;
    if (isFetching) return <h3>Loading beers...</h3>;
    return !!items.length && (
      <div>
        <button onClick={() => searchByAbv(10)}>Search</button>
        <Beers items={items}/>
        <Pagination
          onPageClick={(page) => loadPage(page, abv)}
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
       isLastPage,
       abv,
     }
   }) => {
    return {
      items,
      isFetching,
      hasError,
      page,
      isLastPage,
      abv
    }
  };

const mapDispatchToPros = dispatch => ({
  loadBeers: () => dispatch(fetchBeers()),
  loadPage: (page, abv) => dispatch(fetchBeers(page, abv)),
  searchByAbv: (abv) => dispatch(fetchBeers(1, abv)),
});

export default connect(
  mapStateToProps,
  mapDispatchToPros
)(BeersContainer);