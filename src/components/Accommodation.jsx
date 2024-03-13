import React, { useState } from 'react'
import { Card, Button } from 'react-bootstrap'
import AmenityList from './AmenityList'
import Price from './Price'

export default function Accommodation(props) {

  const [showInfo, setShowInfo] = useState(false)

  const showCard = checkAmenities(props.filter, props.amenities);

  function checkAmenities(selectedAmenities, includedAmenities) {
    return Object.entries(selectedAmenities)
      .filter(([key, value]) => value)
      .every(([key]) => includedAmenities[key]);
  }

  return (
    showCard &&
    <Card>
      <Card.Img src={props.image} />
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <div className="my-1">
          {props.capacity && <div>Capacity: {props.capacity} person</div>}
          {props.beachDistanceInMeters && <div>Distance to the beach: {props.beachDistanceInMeters} meter</div> }
        </div>
        <Button variant="primary" onClick={() => setShowInfo(!showInfo)}>More info</Button>
        <div className="my-1">
          {showInfo && <AmenityList {...props.amenities} /> }
          {showInfo && <Price {...props} /> }
        </div>
      </Card.Body>
    </Card>
  )
}
