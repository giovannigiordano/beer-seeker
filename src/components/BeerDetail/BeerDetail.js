import React, { Component } from 'react';
import { Image } from '../';

class BeerDetail extends Component {
  render() {
    const {
      item: {
        name, description, image_url, abv, ibu, food_pairing, first_brewed
      }
    } = this.props;
    return (
      <div className="beer-detail">
        <div className="beer-detail__col beer-detail__col--image">
          <Image src={image_url} height={300} alt={name}/>
        </div>
        <div className="beer-detail__col beer-detail__col--content">
          <h1 className="beer-detail__title">{name}</h1>
          <p>{description}</p>
          <p><i>ABV</i>: {abv}</p>
          <p><i>IBU</i>: {ibu}</p>
          <p><i>Year of first brew</i>: {first_brewed}</p>
          <p><strong>Good with these foods: </strong></p>
          <ul>
            {food_pairing.map((el, idx) => <li key={idx}>{el}</li>)}
          </ul>
        </div>
      </div>
    );
  }
}

export default BeerDetail;