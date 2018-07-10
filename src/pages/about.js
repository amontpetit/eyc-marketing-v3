import React from 'react'
import Link from 'gatsby-link'

import MosaicDivider from '../components/mosaicdivider'

const About = () => (
  <div id="about">
    <div id="hero-half">
        <h1 id="hero-headline">About Eyecarrot</h1>
    </div>
    <section>
      <div className="card">
        <div className="container">
          <div id="about-mission">
            <h2 className="title">Our Mission</h2>
            <p className="big">We at Eyecarrot aspire for more: more for the doctor, more for the therapist, more for the patient, and more for the benefits of Vision Therapy.</p>
            <p>Our sight is vital in how we view the world around us. Sight and vision allow us to connect with our surroundings, keep us safe, and helps maintain our sharpness of mind.</p>
            <p>Eyecarrot is focused on the importance of vision. We have made vision therapy accessible through an improved technology that combines data, expert knowledge and insights of vision care professionals to help patients on a global scale &mdash; Binovi.</p>
            <p>Binovi’s commitment will always be to maximize the collaboration between optometrists, therapists, and patients and their education.</p>
          </div>
          <div id="about-vision">
            <h2 className="title">Our Vision</h2>
            <p className="big">We’ve designed the Binovi platform to serve as the foundation for constructive innovation within vision therapy. Our strategic approach sees us deliver a collaborative care system that integrates software, hardware, data and the expert knowledge and insights of vision care professionals.</p>
            <p>Technology is rapidly changing the way businesses are operated, and we are building Binovi to apply this technology to the complexities of running a modern Vision Therapy Practice.</p>
            <p>Our innovative platform that helps Optometrists treat vision issues with in-office therapy as well as home based activities.</p>
            <p>Carrots are still good for the eyes, iPads are good for Optometrists and their teams, and over half of the world now has a smartphone and access to the Internet. We want to use our technology to empower the world to measure, exercise and evolve the entire Visual System – for the eyes, the brain and the body to work together in perfect harmony.</p>
          </div>
        </div>
      </div>
    </section>
    <MosaicDivider />
    <section>
      <div className="card">
        <div className="container">
          <div className="center">
            <img id="about-story-image" src="#" />
            <h2 className="title">Our Story</h2>
          </div>
          <div id="about-story">
            <p className="big">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin purus erat, vestibulum eget elementum eget, maximus non magna. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Quisque posuere ex eu augue scelerisque, ac facilisis purus aliquam.</p>
            <p>Nam mollis consequat lorem, a vulputate turpis fringilla ut. In condimentum, urna sed aliquam iaculis, libero orci porta quam, sit amet volutpat turpis ipsum in sem. Quisque convallis rutrum lorem et rhoncus. Nullam lacinia arcu ac nisi tempor lacinia. In pretium elit id commodo gravida. Sed blandit eros vitae lacus dapibus condimentum. Nulla vulputate massa et massa viverra, iaculis tempus tellus semper.</p>
            <p>Pellentesque sapien eros, dignissim et commodo in, vestibulum eu mauris. Praesent lobortis, nibh eu aliquam pharetra, metus tortor volutpat mi, ut eleifend enim tellus et libero. Maecenas sagittis ante et elementum aliquet. Aenean vel porttitor ex. Mauris convallis dolor a mollis tempor. In hac habitasse platea dictumst. Duis id pellentesque eros. Nullam vel ante non libero fermentum iaculis at at mi. Praesent ornare turpis tortor. In lacinia ultricies nisi in lobortis.</p>
            <p>Sed efficitur diam nec consectetur fermentum. Pellentesque at metus id ante hendrerit tristique ac quis enim. Nulla maximus tempor ligula, porta interdum lectus fermentum at. Vivamus in faucibus augue. Aliquam ut porta enim. Nulla rutrum arcu enim, eget egestas odio suscipit sed. Donec rhoncus condimentum pulvinar. Donec tincidunt tincidunt urna vitae efficitur. Nunc libero lectus, tincidunt vel fermentum quis, gravida tincidunt libero. Suspendisse ut luctus mauris, ac hendrerit ipsum. Sed vestibulum purus neque, et porta lectus placerat eget.</p>
          </div>
        </div>
      </div>
    </section>
    <MosaicDivider />
  </div>
)

export default About
