import React from 'react';
import { Link } from 'react-router-dom';
import {Col, Container, Row, Card} from 'react-bootstrap';

// icons
import { BsArrowRightShort } from 'react-icons/bs';

export default function HospitalDetails({ hospitals }) {

  return (
    <>
      {/* related places start */}
      <section className="tour-places-area pt-40 pb-40">
        <Container>
          {/* section heading */}
          <Row className='justify-content-center'>
            <Col md={7}>
              <h5 className="text-center text-orange mb-3">Related Destinations</h5>
              <h2 className='text-center mb-4 mb-md-5'>Travel Most Popular Place In <br /> The World</h2>
            </Col>
          </Row>
          
          {/* place items */}
          <Row>

            {/* destination item */}
            {hospitals && hospitals.slice(0, 3).map((hospital) => (
              <Col md={4} className='mb-3' key={ hospital.id }>
                <Card className='h-100 shadow border-0'>
                  <Card.Img variant="top" src={ hospital.img } />
                  <Card.Body>
                    <Row className='align-items-center'>
                      <Col xs={9}>
                        <h4 className='mb-1'>{ hospital.name }</h4>
                        <p className='text-ash'>{ hospital.location }</p>
                      </Col>
                      <Col xs={3}>
                        <Link to={ `/hospital-details/${hospital.id}` } className="btn rounded-circle"><BsArrowRightShort /></Link>
                      </Col>
                    </Row>
                  </Card.Body>
                </Card>
              </Col>
            ))}
            
          </Row>
        </Container>
      </section>
      {/* related places end */}
    </>
  )
}
