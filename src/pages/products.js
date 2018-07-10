import React from 'react'
import Link from 'gatsby-link'

import MosaicDivider from '../components/mosaicdivider'

const Products = () => {
  return(
    <div id="products">
      <div id="hero">
        <img className="fit" src="https://www.eyecarrot.com/wp-content/uploads/BinoviMasterHero.png"/>
      </div>
      <section>
        <div className="card">
            <div className="container space-bottom-big">
            <h2 className="title">Overview</h2>
            <div id="products-overview-intro">
                <p className="big">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin purus erat, vestibulum eget elementum eget, maximus non magna. Orci varius natoque penatibus.</p>
                <p>Nam mollis consequat lorem, a vulputate turpis fringilla ut. In condimentum, urna sed aliquam iaculis, libero orci porta quam, sit amet volutpat turpis ipsum in sem. Quisque convallis rutrum lorem et rhoncus. Nullam lacinia arcu ac nisi tempor lacinia. In pretium elit id commodo gravida. Sed blandit eros vitae lacus dapibus condimentum. Nulla vulputate massa et massa viverra, iaculis tempus tellus semper.</p>
            </div>
            <div id="products-overview-features">
                <ul className="nobullets" id="products-features-list">
                <li className="products-features-listitem">Prescribe and track vision therapy activities for your patients to complete at home with help from HD video instructions.</li>
                <li className="products-features-listitem">Create custom programs for a broad range of vision issues, or custom tailor plans for specific patients.</li>
                <li className="products-features-listitem">Keep in touch with patients and communicate results quickly and securely with in-app messaging.</li>
                <li className="products-features-listitem">Learn about new theories and practices to stay current with industry trends and developments in treatment.</li>
                </ul>
            </div>
        </div>
        <MosaicDivider />
        <div className="container center"> 
            <h2 className="title">Find out more about Binovi</h2>
            <p className="big">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin purus erat, vestibulum eget elementum eget, maximus non magna. Orci varius natoque penatibus.</p>
            <div className="buttonwrapper center">
                <div className="cta">
                    <a href="https://www.eyecarrot.com"><button className="btn btn-cta">Binovi in Detail</button></a>
                </div>
            </div>
        </div>
        </div>
      </section>
      <MosaicDivider />
    </div>
  )
}

export default Products