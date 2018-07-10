import React from 'react'
import Link from 'gatsby-link'

import MosaicDivider from '../components/mosaicdivider'
import ContactForm from '../components/contactform.js'

const Contact = ({data}) => {
  console.log(data);
  return(
    <div id="contact">
      <div id="hero-half">
        <div className="column-lg-100">
          <h1 id="hero-headline">Contact Us</h1>
        </div>
      </div>
      <ContactForm formId="addd572d-0fb7-4d20-b503-fee7cfce8b97"/>
      <MosaicDivider />
      <section>
          <div className="card" id="google-maps-card">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5791.597467968827!2d-79.6774281!3d43.46479890000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x882b5cc67c51b091%3A0x1eac095a7d679b33!2s482+South+Service+Rd+E!5e0!3m2!1sen!2sca!4v1527867946019" allowfullscreen id="google-maps-embed"></iframe>
        </div>
        </section>
        <MosaicDivider />
    </div>
  )
}

export default Contact
