import React from 'react';
import Badge from 'react-bootstrap/Badge';
import { camelCaseToTitleCase } from '../utils/helpers'

export default function AmenityList(props) {
  
  const hasAnyAmeneties = Object.values(props).some(value => value === true);

  return (
    hasAnyAmeneties &&
    <div className='amenity-list-wrapper'>
      <div>Amenities</div>
      <div className='amenity-list'>
        {
          Object.keys(props).map((amenity, index) => 
            props[amenity] ? <Badge key={index} bg="secondary">{camelCaseToTitleCase(amenity)}</Badge> : null
          )
        }
      </div>
    </div>
  )
}
