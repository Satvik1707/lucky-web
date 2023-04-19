import React from 'react';
import {Container} from 'react-bootstrap';

export default function Footer() {
  return (
    <>
      {/* footer top start */}
      <footer className='footer-area pt-60 pb-55'>
      </footer>

      {/* footer bottom start */}
      <div className="footer-bottom py-3">
        <Container>
          <p className="text-center text-white">&copy; { new Date().getFullYear() } - All rights reserved by Lucky Tour and Events.</p>
        </Container>
      </div>
    </>
  )
}
