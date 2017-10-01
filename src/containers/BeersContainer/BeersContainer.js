import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchBeers } from '../../actions';
import { Beers } from '../../components';

class BeersContainer extends Component {
  componentDidMount() {
    this.props.loadBeers();
  }

  render() {
    const {
      items,
      isFetching,
      hasError
    } = this.props;
    if (hasError) return <h3>Sorry, there was an error while loading beers.</h3>;
    if (isFetching) return <h3>Loading beers...</h3>;
    return !!items.length && <Beers items={items}/>
  }
}

const mapStateToProps =
  ({
     beers: {
       items,
       hasError,
       isFetching
     }
   }) => {
    return {
      items,
      hasError,
      isFetching
    }
  };

const mapDispatchToPros = dispatch => ({
  loadBeers: () => dispatch(fetchBeers())
});

export default connect(
  mapStateToProps,
  mapDispatchToPros
)(BeersContainer);