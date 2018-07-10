import React from 'react'
import Link from 'gatsby-link'
import HubspotForm from '../components/hubspotform.js'

class ContactForm extends React.Component {    
    render() {
        return (
        <section>
            <div className="card">
                <div className="container">
                    <h2 className="title">Contact Us</h2>
                    <div id="contactform-intro">
                        <div id="contactform-intro-paragraph">
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin purus erat, vestibulum eget elementum eget, maximus non magna. Orci varius natoque penatibus.</p>
                        </div>
                        <div id="contactform-intro-lists">
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
                    </div>
                    <div id="contactform-form-wrapper">
                        <HubspotForm formId={this.props.formId} />
                    </div>
                </div>
            </div>
        </section>
        );
    }
}

export default ContactForm