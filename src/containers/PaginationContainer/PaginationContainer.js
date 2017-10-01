import { connect } from 'react-redux';
import { fetchBeers } from '../../actions';
import { Pagination } from '../../components';

const mapStateToProps =
  ({
     beers: {
       page: currentPage,
       abv,
       ibu,
       isLastPage
     }
   }) => {
    return {
      currentPage,
      abv,
      ibu,
      isLastPage
    }
  };

const mapDispatchToPros = dispatch => ({
  onPageClick: (page, abv, ibu) => dispatch(fetchBeers(page, abv, ibu))
});

export default connect(
  mapStateToProps,
  mapDispatchToPros
)(Pagination);