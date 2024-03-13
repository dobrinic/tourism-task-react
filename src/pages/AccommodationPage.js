import React, { useEffect, useState } from 'react'
// import { Row, Col } from 'react-bootstrap'

import { fetchaccommodationsData } from '../utils/api';
import Accommodation from '../components/Accommodation'
import AmenitiesFilter from '../components/AmenitiesFilter'

export default function AccommodationPage() {

  const [amenities, setAmenities] = useState({})
  const [accommodationsData, setaccommodationsData] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      try {
        const accommodations = await fetchaccommodationsData();
        setaccommodationsData(accommodations);
      } catch (error) {
        console.log("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <h1>Accommodations</h1>

      <AmenitiesFilter callback={setAmenities} accommodations={accommodationsData} />

      <div className='accommodations-wrapper'>
      {
        accommodationsData.map((accommodation, index) =>
            <Accommodation key={index} {...accommodation} filter={amenities} />
        )
      }
      </div>
    </>
  )
}
