import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import './test.css'
import {RiHotelBedFill} from 'react-icons/ri'
import {CgAirplane} from 'react-icons/cg'
import {FaPassport} from 'react-icons/fa'

export default function Home() {
  return (
    <>
      {/* photo gallery start */}
      <section className="photo-gallery-area pt-80">
        <Container fluid>
          {/* section heading */}
          <Row className="justify-content-center">
            <Col md={6}>
              <h2 className="text-center mb-4 mb-md-5">Our Services </h2>
            </Col>
          </Row>
        </Container>
        <Container className="services__wrapper">
        <figure className="snip153">
          <RiHotelBedFill size={30}/>
        <figcaption>
        <h3>Hygienic and Luxurious Stays</h3>
        </figcaption>
      </figure>
        <figure className="snip153">
        <CgAirplane size={30}/>
        <figcaption> 
        <h3>Hassle Free and Secure Travel</h3>
        </figcaption>
      </figure>
        <figure className="snip153">
       <FaPassport/>
        <figcaption size={30}>
        <h3>Visa and Passport Assistance</h3>
        </figcaption>
      </figure>
     
        </Container>
    <br/>
        <Row className="justify-content-center">
            <Col md={6}>
              <h4 className="text-center mb-4 mb-md-5">100% Customer Satisfaction </h4>
            </Col>
          </Row>
      </section>
      {/* photo gallery end */}
    </>
  );
}
