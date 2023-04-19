import React, { useEffect } from "react";
import { Col, Container, Row } from "react-bootstrap";

// components
import PageHeader from "../../layout/PageHeader";

// images
import about from "../../assets/img/home-banner/1.jpg";

export default function About() {
  // page title
  useEffect(() => {
    document.title = "About | Lucky Tour and Events";
  });

  return (
    <>
      <PageHeader />

      {/* about us start */}
      <section className="about-us-area pt-60 pb-60">
        <Container>
          <Row className="align-items-center">
            <Col md={6} className="mb-3">
              <div className="about-img">
                <img src={about} alt="about" className="img-fluid rounded" />
              </div>
            </Col>
            <Col md={6} className="mb-3">
              <div className="about-content">
                <h3 className="text-red mb-3">HOW WE ARE BEST FOR TRAVEL !</h3>
                <p className="text-ash">
                  For a traveler, exploring the different dimensions of the
                  world can be one of the most exhilarating experiences of life.
                  But if one does not know where to start, it can be very
                  frustrating. Owing to our experience , we narrow down up to
                  the minutest detail to plan and develop exclusive tour
                  packages helping our clients enjoy the most beautiful sights
                  across the world. whether an individual, a family, a group of
                  friends or a corporate. We are here to provide you our best
                  services, hustle free travel.. you would love it.
                  <br />
                  TRAVEL IS AN INVESTMENT IN YOURSELF.. So invest with us at the
                  best places..!
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      {/* about us end */}
    </>
  );
}
