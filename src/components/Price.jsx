import React from 'react';
import Badge from 'react-bootstrap/Badge';

export default function Price(props) {

  const pricelist = props.pricelistInEuros.map((price, index) => price.pricePerNight)
  const minPrice = Math.min(...pricelist)
  const maxPrice = Math.max(...pricelist)

  return (
    <div className='price-wrapper'>
      <div>Price*</div>
      <div className='price'>
        <Badge bg="secondary">
          {minPrice} {maxPrice !== minPrice ? " - " + maxPrice : null} EUR
        </Badge>
        <div className='small text-muted mt-2'>* Estimated price per night. Select your dates to see the total price!</div>
      </div>
    </div>
  )
}
