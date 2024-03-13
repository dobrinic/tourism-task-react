import React, { useState } from 'react'
import Form from 'react-bootstrap/Form';
import { Row, Col } from 'react-bootstrap'
import { camelCaseToTitleCase } from '../utils/helpers'

export default function AmenitiesFilter(props) {

  const [amenities, setAmenities] = useState([])

  function handleChange(event) {
    const updatedAmenities = { ...amenities };
    updatedAmenities[event.target.name] = event.target.checked;
    setAmenities(updatedAmenities);
    props.callback(updatedAmenities);
  }

  return (
    <Row>
      <Col>
      {
        Object.keys(props.initialAmenities).map((amenity, index) =>
          <Form.Check type="switch" key={index} id={amenity} name={amenity} onChange={handleChange} label={camelCaseToTitleCase(amenity)} />
        )
      }
      </Col>
    </Row>
  )
}
