import React, { useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';

// icons
import { FaFacebookF, FaTwitter, FaInstagram } from 'react-icons/fa';

export default function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');

const handleSubmit = async (e) => {
  e.preventDefault();

  const data = {
    name: name,
    email: email,
    phone:phone,
    message: message
  };

  try {
    const response = await fetch('https://formspree.io/f/mayzlllw', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    });

    if (response.ok) {
      alert('Your message has been sent successfully!');
      setName('');
      setEmail('');
      setMessage('');
      setPhone('');
    } else {
      throw new Error('Something went wrong.');
    }
  } catch (error) {
    alert(error.message);
  }
};

  return (
    <>
      {/* get in touch start */}
      <section className="get-in-touch-area pt-60 pb-60">
        <Container>
          <Row className='align-items-center'>
            <Col md={7} className='mb-3'>
              <div className="details-area mb-3">
                <h6 className="text-orange text-uppercase">Get in touch</h6>
                <h2 className='text-uppercase'>REACH & CONTACT US!</h2>
                <p className="text-ash">
                <div className="social-icon-area">
                <ul>
                  <li>
                    <a href="#f"><FaFacebookF /></a>
                  </li>
                  <li>
                    <a href="#t"><FaTwitter /></a>
                  </li>
                  <li>
                    <a href="#d"><FaInstagram /></a>
                  </li>
                </ul>
              </div>
                </p>
              </div>
              <form onSubmit={handleSubmit}>
                <div className='mb-3'>
                  <label htmlFor='name' className='form-label'>
                    Name
                  </label>
                  <input
                    type='text'
                    className='form-control'
                    id='name'
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>
                <div className='mb-3'>
                  <label htmlFor='email' className='form-label'>
                    Email Address
                  </label>
                  <input
                    type='email'
                    className='form-control'
                    id='email'
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <div className='mb-3'>
                  <label htmlFor='email' className='form-label'>
                    Phone Number
                  </label>
                  <input
                    type='text'
                    className='form-control'
                    id='phone'
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                  />
                </div>
                <div className='mb-3'>
                  <label htmlFor='message' className='form-label'>
                    Message
                  </label>
                  <textarea
                    className='form-control'
                    id='message'
                    rows='5'
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                  ></textarea>
                </div>
                <button type='submit' className='btn btn-primary'>
                  Send
                </button>
              </form>

            </Col>
            <Col md={5}>
              {/* map */}
              
              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7016.899894927275!2d77.05387907709715!3d28.43584981441063!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d1888054e2d75%3A0xa49245f339865ca2!2sSector%2046%2C%20Gurugram%2C%20Haryana%20122022!5e0!3m2!1sen!2sin!4v1681026268972!5m2!1sen!2sin" title="map" className='rounded' width="100%" height="350" loading="lazy"></iframe>
            </Col>
          </Row>
        </Container>
      </section>
      {/* get in touch end */}
    </>
  )
}
