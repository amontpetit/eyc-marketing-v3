import React from 'react'
import Link from 'gatsby-link'

import HubspotForm from '../components/hubspotform.js'

const Footer = () => (
  <footer>
    <div className="container">
      <div id="footer-logo">
        <img src="https://www.eyecarrot.com/wp-content/uploads/EC-Logo_Horizontal.png"/>
      </div>
      <div className="footer-column" id="footer-nameplate">
        <h4>Eyecarrot Innovations</h4>
        <ul className="nobullets">
          <li><a href="mailto:info@eyecarrot.com">info@eyecarrot.com</a></li>
          <li><a href="tel:4169436271">416.943.6271</a></li>
          <li><a href="tel:18554167158">1.855.416.7158</a></li>
        </ul>
        <ul className="sociallistsmall">
          <li>
            <a href="http://www.twitter.com/eyecarrot" target="_blank">
              <div className="social twitter">
                <i className="fa fa-twitter"></i>
              </div>
            </a>
          </li>
          <li>
            <a href="https://www.linkedin.com/company/eyecarrot" target="_blank">
              <div className="social linkedin">
                <i className="fa fa-linkedin"></i>
              </div>
            </a>
          </li>
          <li>
            <a href="https://www.facebook.com/eyecarrot/" target="_blank">
              <div className="social facebook">
                <i className="fa fa-facebook"></i>
              </div>
            </a>
          </li>
          <li>
            <a href="https://www.youtube.com/channel/UCxLuMi3jWom_uT0HY_BFjng" target="_blank">
              <div className="social youtube">
                <i className="fa fa-youtube-play"></i>
              </div>
            </a>
          </li>
        </ul>
      </div>
      <div className="footer-column">
        <h4>Invest with Eyecarrot</h4>
        <ul className="footer-list">
          <li className="footer-listitem"><Link to="/about">Our Story</Link></li>
          <li className="footer-listitem"><Link to="/invest">Corporate Information</Link></li>
          <li className="footer-listitem"><Link to="/invest#invest-kit">Investor Factsheet</Link></li>
          <li className="footer-listitem"><Link to="/presskit">Press Kit</Link></li>
        </ul>
      </div>
      <div className="footer-column">
        <h4>News</h4>
        <ul className="footer-list">
          <li className="footer-listitem"><Link to="/news">News + Blog</Link></li>
          <li className="footer-listitem"><Link to="/categories/press">Press Room</Link></li>
          <li className="footer-listitem"><Link to="/categories/perspectives">Perspectives</Link></li>
        </ul>
      </div>
      <div className="footer-column">
        <h4>Products</h4>
        <ul className="footer-list">
          <li className="footer-listitem"><a href="https://www.eyecarrot.com" target="_blank">Binovi Pro</a></li>
          <li className="footer-listitem"><a href="https://www.eyecarrot.com" target="_blank">Binovi Coach</a></li>
          <li className="footer-listitem"><a href="https://www.eyecarrot.com" target="_blank">Binovi Touch</a></li>
        </ul>
      </div>
      <div className="footer-column" id="footer-contact">
        <h4>Contact Us</h4>
        <p className="small">Stay in touch with Eyecarrot and keep updated on news, press releases, and updates</p>
        <HubspotForm formId="52b52923-1a55-437d-b13b-f8aba2f13efa" isFooter="true"/>
      </div>
    </div>
    <div className="container">
      <div className="mosaic-rule"></div>
      <p className="fineprint center">© 2018 Eyecarrot Innovations Corp.</p>
    </div>
  </footer>
)

//52b52923-1a55-437d-b13b-f8aba2f13efa

export default Footer
