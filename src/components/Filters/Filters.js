import React, { Component } from 'react';

class Filters extends Component {
  handleChange =
    ({
       target: {
         name,
         value
       }
     }) => {
      this.setState({
        [name]: value
      });
    };
  handleSubmit = (e) => {
    e.preventDefault();
    const { abv, ibu } = this.state;
    this.props.onFilter({
      abv,
      ibu
    })
  };

  constructor(props) {
    super(props);
    this.state = {
      abv: props.abv,
      ibu: props.ibu
    };
  }

  render() {
    const { abv, ibu } = this.state;
    return (
      <form onSubmit={this.handleSubmit}>
        ABV - {abv}
        <input
          type="range"
          min={0}
          max={20}
          name="abv"
          value={abv}
          onChange={this.handleChange}/>
        IBU - {ibu}
        <input
          type="range"
          min={0}
          max={100}
          name="ibu"
          value={ibu}
          onChange={this.handleChange}/>
        <button type="submit">Search</button>
      </form>
    )
  }
}

export default Filters;