import { connect } from 'react-redux';
import { setBeersOrder } from '../../actions';
import { Sort } from '../../components';

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => ({
  onSelect: (value) => dispatch(setBeersOrder(value))
});

export default connect(mapStateToProps, mapDispatchToProps)(Sort)