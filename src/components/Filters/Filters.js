import React, { Component } from 'react';

class Filters extends Component {
  handleSubmit = (e) => {
    e.preventDefault();
    const { abv, ibu } = this.state;
    this.props.onFilter({
      abv: Number(abv),
      ibu: Number(ibu)
    })
  };

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
  resetForm = () => {
    this.setState({
      abv: 0,
      ibu: 0
    });

    this.props.onReset();
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
      <form className="form-search" onSubmit={this.handleSubmit}>
        <div className="input-block">
          <label>ABV - {abv}</label>
          <input
            type="range"
            min={0}
            max={20}
            name="abv"
            value={abv}
            onChange={this.handleChange}/>
        </div>
        <div className="input-block">
          <label>IBU - {ibu}</label>
          <input
            type="range"
            min={0}
            max={100}
            name="ibu"
            value={ibu}
            onChange={this.handleChange}/>
        </div>
        <div>
          <button type="button" onClick={this.resetForm}>Reset</button>
          <button type="submit">Filter</button>
        </div>
      </form>
    )
  }
}

export default Filters;