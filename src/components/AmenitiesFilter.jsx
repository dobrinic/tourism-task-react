import React, { useState } from 'react'
import Form from 'react-bootstrap/Form';
import { Row, Col } from 'react-bootstrap'

export default function AmenitiesFilter(props) {

  const [amenities, setAmenities] = useState({
    "airConditioning": false,
    "parkingSpace": false,
    "pets": false,
    "pool": false,
    "wifi": false,
    "tv": false
  })
  
  function handleChange(event) {
    const updatedAmenities = { ...amenities }
    updatedAmenities[event.target.name] = event.target.checked
    setAmenities(updatedAmenities)
    props.callback(updatedAmenities)
  }

  return (
    <Row>
      <Col>
        <Form.Check type="switch" id="airConditioning" name="airConditioning" onChange={handleChange} label="Air Conditioning" />
        <Form.Check type="switch" id="parkingSpace" name="parkingSpace" onChange={handleChange} label="Parking Space" />
        <Form.Check type="switch" id="pets" name="pets" onChange={handleChange} label="Pets Allowed" />
        <Form.Check type="switch" id="pool" name="pool" onChange={handleChange} label="Swimming Pool" />
        <Form.Check type="switch" id="wifi" name="wifi" onChange={handleChange} label="Free WiFi" />
        <Form.Check type="switch" id="tv" name="tv" onChange={handleChange} label="TV" />
      </Col>
    </Row>
  )
}
