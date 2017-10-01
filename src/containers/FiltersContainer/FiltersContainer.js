import { connect } from 'react-redux';
import { fetchBeers } from '../../actions';
import { Filters } from '../../components';

const mapStateToProps =
  ({
     beers: {
       abv,
       ibu
     }
   }) => {
    return {
      abv,
      ibu
    }
  };

const mapDispatchToPros = dispatch => ({
  onFilter: ({ abv, ibu }) => dispatch(fetchBeers(1, abv, ibu))
});

export default connect(
  mapStateToProps,
  mapDispatchToPros
)(Filters);