import React, { Component } from 'react';

class Beers extends Component {
  renderListItem = ({id, name, image_url, abv, ibu}) => (
    <div key={id} className="beers-item">
      <figure className="beers-item__image">
        <img src={image_url} alt={name} height={100}/>
      </figure>
      <h5 className="beers-item__title">{name}</h5>
      <div className="beers-item__info">
        <span className="beers-item__info__col beers-item__info__col--label">ABV</span>
        <span className="beers-item__info__col beers-item__info__col--value">{abv}</span>
      </div>
      <div className="beers-item__info">
        <span className="beers-item__info__col beers-item__info__col--label">IBU</span>
        <span className="beers-item__info__col beers-item__info__col--value">{ibu}</span>
      </div>
    </div>
  );

  render() {
    const { items } = this.props;
    return (
      <div>
        <div>
          {items.map(this.renderListItem)}
        </div>
      </div>
    )
  }
}

export default Beers;