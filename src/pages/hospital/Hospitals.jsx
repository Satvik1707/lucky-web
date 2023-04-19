import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { Col, Container, Row, Card } from "react-bootstrap";

// components
import PageHeader from "../../layout/PageHeader";

// icons
import { BsArrowRightShort } from "react-icons/bs";

export default function Hospitals({ hospitals }) {
  // page title
  useEffect(() => {
    console.log(hospitals);
    document.title = "Hospitals | Lucky Tour and Events";
  });

  return (
    <>
      <PageHeader />
      <section className="tour-places-area pt-40 pb-40">
        <Container>
          <div>
            We believe in the ancient Indian philosophy of promoting health and
            happiness for all. As a medical travel technology company, we offer
            patient-friendly accommodation near top hospitals in India. Complex
            medical treatments like cancer, cardiology, advanced dental,
            fertility, orthopedic, or cosmetic surgeries often require expertise
            and facilities not available locally. India has become a global hub
            for medical tourism, with cities like Chennai, Delhi, Mumbai,
            Bangalore, Hyderabad, Kolkata, and Vellore boasting world-class
            hospitals and leading medical specialists. Our AI-enabled services
            cater to patients' needs, providing budget-friendly accommodations,
            transport, food, medicines, medical equipment, and trained
            attendants. We aim to make your medical stay as comfortable and
            peaceful as possible, so you can focus on your health and loved
            ones.
          </div>
          <br />
          <h3>Our Support</h3>
          <ol>
            <div
              style={{
                borderLeft: "2px black solid",
                marginBottom: "10px",
                paddingLeft: "10px",
                display: "flex",
                alignItems: "center",
                justifyContent: "flex-start",
              }}
            >
              <span style={{ fontSize: "18px" }}>
                Verified Properties:&nbsp;
              </span>
              <span style={{ fontSize: "14px" }}>
                Every aspect of every property that comes for listing with us is
                verified by a dedicated team, with relevant photographs.
              </span>
            </div>
            <div
              style={{
                borderLeft: "2px black solid",
                marginBottom: "10px",
                paddingLeft: "10px",
                display: "flex",
                alignItems: "center",
                justifyContent: "flex-start",
              }}
            >
              <span style={{ fontSize: "18px" }}>
                Secure payment gateway:&nbsp;
              </span>
              <span style={{ fontSize: "14px" }}>
                our online payment gateway uses the highest security assurance.
              </span>
            </div>
            <div
              style={{
                borderLeft: "2px black solid",
                marginBottom: "10px",
                paddingLeft: "10px",
                display: "flex",
                alignItems: "center",
                justifyContent: "flex-start",
              }}
            >
              <span style={{ fontSize: "18px" }}>
                Easy cancellation/rescheduling:&nbsp;
              </span>
              <span style={{ fontSize: "14px" }}>
                Want to reschedule or cancel your booking with us? No worries.
                Our easy rescheduling and refund policies and procedures are
                designed to make your life easy.
              </span>
            </div>
            <div
              style={{
                borderLeft: "2px black solid",
                marginBottom: "10px",
                paddingLeft: "10px",
                display: "flex",
                alignItems: "center",
                justifyContent: "flex-start",
              }}
            >
              <span style={{ fontSize: "18px" }}>
                Independent User Reviews:&nbsp;
              </span>
              <span style={{ fontSize: "14px" }}>
                We urge you to read the independent, uninfluenced reviews and
                ratings posted by our genuine users before booking our property.
              </span>
            </div>
            <div
              style={{
                borderLeft: "2px black solid",
                marginBottom: "10px",
                paddingLeft: "10px",
                display: "flex",
                alignItems: "center",
                justifyContent: "flex-start",
              }}
            >
              <span style={{ fontSize: "18px" }}>Loyalty coupons:&nbsp;</span>
              <span style={{ fontSize: "14px" }}>
                Our Loyalty Coupons make you stays rewarding in more ways than
                one!
              </span>
            </div>
          </ol>
          <br />
          <p>
            <strong>Stay well. Get well.</strong>
          </p>
          <p>
            The most important part of a medical travel plan is accommodation.
            Ideally, it should be located close to the hospital or clinic where
            patients and their companions can enjoy a comfortable and affordable
            stay – before, during and even after the treatment i.e. recovery and
            follow-up stage.
          </p>
          <p>
            Here, we go the extra mile to provide patient-friendly rooms for
            patients and their loved ones in different medical hubs across
            India. Our every property is carefully selected and adapted as per
            our standardized format that has been meticulously designed to
            ensure a comfortable, affordable and problem-free stay for both the
            patients and their companions.
          </p>
          <p>
            Our promise of patient-friendly rooms reflect our commitment of
            providing a stress free stay. Our every property is manned by
            attendants to cater to the requirements of patients and their
            companions. They are equipped with basic medical device and
            equipment.
          </p>
          <p>
            The rooms undergo regular checking and monitoring in order to
            maintain a safe and hygienic environment for the users.
          </p>
          <p>
            Book our room today and get ready for a safe, happy and healthy stay
            during your medical travel.
          </p>
          <br />
          <p>
            <strong>Travel well. Get well.</strong>
          </p>
          <p>
            As, we have handpicked our ‘Transport Partners’ who offer
            well-maintained vehicles and certified drivers to ensure smooth,
            problem-free transport from airports, railway/bus stations to our
            property or hospital.
          </p>
          <p>
            If Pre-booked get ready to be greeted and picked up by a
            well-trained, well-behaved driver the moment you step out of the
            airport or railway/bus station. Once you meet the our certified
            driver, get ready for a smooth ride to our property or hospital, as
            per your schedule.
          </p>
          <p>
            We also provide vehicles for Non-Emergency Patient Transport (NEPT)
            for patients who require clinical monitoring or supervision during
            transport, but not a time-critical ambulance response.
          </p>
          <p>
            Upon special request made at the time of booking a room, we will
            definitely strive to arrange for vehicles in special cases for
            patients having an illness or disability that makes it impractical
            to use any other form of transport; for example, severe immobility
            or disorientation.
          </p>
          <p>
            We regularly monitors its transport service providers – to ensure
            that their fleet of cars is in good enough shape to provide safe,
            hassle-free rides to the patients and their companions at a
            reasonable cost.
          </p>
          <br />
          <p>
            <strong>Check well. Get well.</strong>
          </p>
          <p>
            Home Medical Devices come in various shapes, sizes and weights. You
            may need extra space, money, effort and in some cases even legal
            clearance for air travel. So, carrying them along may not be a good
            idea for medical travelers. Although some airlines do allow patients
            to carry their medical equipment and mobility aids, it is always
            cumbersome for the traveller to carry it to distant locations. Be it
            a battery-powered wheelchair or mobility aid or apnoea monitors or
            exterior medical devices or an oxygen cylinder. we make sure your
            requirement of medical equipment is taken care of during your
            medical trip.
          </p>
          <p>
            With us, you don’t need to carry your heavy, odd-sized medical
            equipment during your medical travel. We have tied up with ‘Medical
            Equipment Partners’ who – upon special request placed at the time of
            booking – can help provide the required Home Medical equipment as
            per your specific requirements or doctor’s instructions at nominal
            charges.
          </p>
          <p>
            You may check the availability of various devices and can book it in
            advance before your travel starts.
          </p>
          <br />
          <p>
            <strong>WAITING AREA</strong>
          </p>
          <p>1. Regular surface cleaning with disinfectants</p>
          <p>2. Cleaning of the door handles and elevator</p>
          <p>3. Time to time cleaning of furniture</p>
          <br />
          <p>
            <strong>ROOM</strong>
          </p>
          <p>
            Guests are greeted with our handy Welcome Kit, containing hand
            sanitizers, tissues, and disposable gloves. Besides, the rooms are
            sanitized before check-in and after check-out to ensure they are
            safe for the next guest. The sanitization includes the following:
          </p>
          <ol>
            <li>1. Regular cleaning</li>
            <li>
              2. Sanitization of electronic items such as remote controls of TV and
              AC/non-AC
            </li>
          </ol>
          <p>
            All the facilities from visa to the patient’s proper treatment are
            looked after by us.
          </p>
          <Row>
            {hospitals &&
              hospitals.map((hospital, i) => (
                <Col md={4} className="mb-3" key={i}>
                  <Card className="h-100 shadow border-0">
                    <Card.Img variant="top" src={hospital.images[0]} />
                    <Card.Body>
                      <Row className="align-items-center">
                        <Col xs={9}>
                          <h4 className="mb-1">{hospital.name}</h4>
                          <p className="text-ash">{hospital.location}</p>
                        </Col>
                        <Col xs={3}>
                          <Link
                            to={`/hospital-details/${hospital.id}`}
                            className="btn rounded-circle"
                          >
                            <BsArrowRightShort />
                          </Link>
                        </Col>
                      </Row>
                    </Card.Body>
                  </Card>
                </Col>
              ))}
          </Row>
        </Container>
      </section>
    </>
  );
}
