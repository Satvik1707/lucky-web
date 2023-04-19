import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import "./gallery.css";

export default function Home() {
  return (
    <>
      {/* photo gallery start */}
      <section className="photo-gallery-area pt-80">
        <Container fluid>
          {/* section heading */}
          <Row className="justify-content-center">
            <Col md={6}>
              <h2 className="text-center mb-4 mb-md-5">
                What Our Clients Say About Us{" "}
              </h2>
            </Col>
          </Row>
        </Container>
        <Container fluid className="px-20 testimonials__wrapper" style={{"display":"flex","justifyContent":"center"}}>
          <figure className="snip1533">
            <figcaption>
              <blockquote>
                <p>
                Very professional staff, quality service ... I booked Dubai tour through them in last September. Everything was well organized. A big thanks to team.
                </p>
              </blockquote>
              <h3>AKSHITA PRAKASH</h3>
            </figcaption>
          </figure>
          <figure className="snip1533">
            <figcaption>
              <blockquote>
                <p>
                Enjoyed a lot on my recent international trip to Vietnam. Full marks for your team. Excellent services. We enjoyed the trip very much. Once again thank you team.
                </p>
              </blockquote>
              <h3>NAVDEEP CHAWLA</h3>
            </figcaption>
          </figure>
          <figure className="snip1533">
            <figcaption>
              <blockquote>
                <p>
                I recently visited Singapore, it was a journey that will remain fresh in my memory for years to come. The accommodation and travelling facilities were beyond my expectations. I personally recommend this company for all your dream tours.
                </p>
              </blockquote>
              <h3>SUKSHITA DIXIT</h3>
            </figcaption>
          </figure>
          <figure className="snip1533">
            <figcaption>
              <blockquote>
                <p>
                I am fan of this site, first time I have booked tour for Dubai and He provide the Amazing Tour with   budget price. Thanks Lucky tours and events team and I will suggest to my friends and relative to book this company. This was really amazing experience
                </p>
              </blockquote>
              <h3>
RAJENDER SINGH
</h3>
            </figcaption>
          </figure>
        </Container>
      </section>
      {/* photo gallery end */}
    </>
  );
}
