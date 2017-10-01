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

const mapDispatchToProps = dispatch => ({
  onFilter: ({ abv, ibu }) => dispatch(fetchBeers(1, abv, ibu)),
  onReset: () => dispatch(fetchBeers(1, 0, 0))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Filters);