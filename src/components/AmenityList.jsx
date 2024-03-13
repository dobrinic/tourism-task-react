import React from 'react';
import Badge from 'react-bootstrap/Badge';

export default function AmenityList(props) {
  
  const hasAnyAmeneties = Object.values(props).some(value => value === true);

  return (
    hasAnyAmeneties &&
    <div className='amenity-list-wrapper'>
      <div>Amenities</div>
      <div className='amenity-list'>
        {[
          props.airConditioning ? <Badge key="0" bg="secondary">Air Conditioning</Badge> : null,
          props.parkingSpace ? <Badge key="1" bg="secondary">Parking Space</Badge> : null,
          props.pets ? <Badge key="2" bg="secondary">Pets Allowed</Badge> : null,
          props.pool ? <Badge key="3" bg="secondary">Swimming Pool</Badge> : null,
          props.wifi ? <Badge key="4" bg="secondary">Free WiFi</Badge> : null,
          props.tv ? <Badge key="5" bg="secondary">TV</Badge> : null
        ]}
      </div>
    </div>
  )
}
