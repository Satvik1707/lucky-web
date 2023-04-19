import React, { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";
import {Col, Container, Row} from 'react-bootstrap';

// components
import DetailsArea from './DetailsArea';
import PlaceRight from './HospitalRight';
import RelatedPlaces from './RelatedPlaces';

export default function HospitalDetails({ hospitals, gallery }) {

  // state
  const [hospitalDetails, setHospitalDetails] = useState({});

  // get id
  const params = useParams();

  useEffect(() => {
    hospitals.map((hospital) => {
      if(hospital.id === params.id) {
        return (setHospitalDetails(hospital));
      }
      else return '';
    });
    
  }, [params, hospitals]);

  return (
    <>
      {/* dynamic page title */}
      <p className="d-none">{document.title=`${hospitalDetails.name} | Lucky Tour and Events`}</p>

      {/* page header */}
      <section className='page-header-area'>
        <Container fluid className='px-0'>
          <div className="img-wrapper position-relative">
            {hospitalDetails.images&&<img src={hospitalDetails.images[0]} alt="page header" />}
            <div className="heading-text position-absolute d-flex w-100 h-100 align-items-center justify-content-center">
              <h2 className='text-white pt-5'>{ hospitalDetails.name }</h2>
            </div>
          </div>
        </Container>
      </section>
      
      {/* place details start */}
      <section className="place-details-area pt-40 pb-40">
        <Container>
          <Row>
            {/* left details */}
            <Col md={8} className='mb-3'>
              <DetailsArea hospitalDetails={hospitalDetails} />
            </Col>
            {/* right others */}
            <Col md={4}>
              <PlaceRight gallery={gallery} />
            </Col>
          </Row>
        </Container>
      </section>
      {/* place details end */}

      <RelatedPlaces hospitals={hospitals} />
    </>
  )
}
