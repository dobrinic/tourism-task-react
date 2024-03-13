import React, { useEffect, useState } from 'react'
// import { Row, Col } from 'react-bootstrap'

import { fetchAccommodationsData } from '../utils/api';
import { getAmenitiesFilters } from '../utils/helpers';
import Accommodation from '../components/Accommodation'
import AmenitiesFilter from '../components/AmenitiesFilter'

export default function AccommodationPage() {

  const [amenities, setAmenities] = useState([])
  const [accommodationsData, setAccommodationsData] = useState([])
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchAccommodationsData();
        setAccommodationsData(data);
        setIsLoading(false);
      } catch (error) {
        console.error("Error fetching accommodations data:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <h1>Accommodations</h1>

      {isLoading ? (
        <p>Loading...</p>
      ) : accommodationsData && (
        <>
          <div className='filters-wrapper'>
            <AmenitiesFilter callback={setAmenities} initialAmenities={getAmenitiesFilters(accommodationsData)} />
          </div>

          <div className='accommodations-wrapper'>
          {
            accommodationsData.map((accommodation, index) =>
                <Accommodation key={index} {...accommodation} filter={amenities} />
            )
          }
          </div>
        </>
      )}
    </>
  )
}
