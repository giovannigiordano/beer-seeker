import React, { Component } from 'react';

class Image extends Component {
  state = {
    loading: true
  };

  handleLoad = () => {
    this.setState({
      loading: false
    })
  };

  render() {
    const { src, height, alt } = this.props;
    const { loading } = this.state;
    return (
      <div
        className={(loading) ? 'loading' : ''}>
        {loading && <span className="placeholder-text">Loading...</span>}
        <img src={src} alt={alt} height={height} onLoad={this.handleLoad}/>
      </div>
    )
  }
}

export default Image;