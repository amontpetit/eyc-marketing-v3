import React from 'react'
import Link from 'gatsby-link'

import MosaicDivider from '../components/mosaicdivider'
import ContactForm from '../components/contactform.js'

const PressKit = ({data}) => {
  console.log(data);

    //Trim the excerpt from each post to a set number of characters and add trailing ellipsis
  data.allMarkdownRemark.edges.map(({node}) => (node.frontmatter.excerpt = node.frontmatter.excerpt.substring(0, 144) + '…'))

  return(
    <div id="presskit">
      <div id="hero-half">
        <h1 id="hero-headline">Press Kit</h1>
      </div>
      <section>
        <div className="card">
          <div className="container">
            <h2 className="title">Overview</h2>
            <div id="press-kit-overview-left">
              <p className="big">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin purus erat, vestibulum eget elementum eget, maximus non magna. Orci varius natoque penatibus.</p>
              <p>Nam mollis consequat lorem, a vulputate turpis fringilla ut. In condimentum, urna sed aliquam iaculis, libero orci porta quam, sit amet volutpat turpis ipsum in sem. Quisque convallis rutrum lorem et rhoncus. Nullam lacinia arcu ac nisi tempor lacinia. In pretium elit id commodo gravida. Sed blandit eros vitae lacus dapibus condimentum. Nulla vulputate massa et massa viverra, iaculis tempus tellus semper.</p>
            </div>
            <div id="press-kit-overview-right">
              <p className="big">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin purus erat, vestibulum eget elementum eget, maximus non magna. Orci varius natoque penatibus.</p>
              <p>Nam mollis consequat lorem, a vulputate turpis fringilla ut. In condimentum, urna sed aliquam iaculis, libero orci porta quam, sit amet volutpat turpis ipsum in sem. Quisque convallis rutrum lorem et rhoncus. Nullam lacinia arcu ac nisi tempor lacinia. In pretium elit id commodo gravida. Sed blandit eros vitae lacus dapibus condimentum. Nulla vulputate massa et massa viverra, iaculis tempus tellus semper.</p>
            </div>
            <div className="buttonwrapper center">
                <div className="cta">
                    <Link to="/about"><button className="btn btn-cta">Get the whole story</button></Link>
                </div>
            </div>
          </div>
        </div>
      </section>
      <MosaicDivider />
      <ContactForm formId="addd572d-0fb7-4d20-b503-fee7cfce8b97"/>
      <MosaicDivider />
      <section>
        <div className="card">
          <div className="container">
            <h2 className="title">Assets + Materials</h2>
            <div id="press-kit-assets-image">
                <img className="contain" src="#"/>
                <div id="press-kit-assets-meta">
                  <a href="#"><button className="btn btn-eyc">Download</button></a>
                  <p className="small">EYC_PressAssets.zip &mdash; 00.0MB</p>
                  <p className="tiny">Last Updated: 2018-05-29</p>
                </div>
            </div>
            <div id="press-kit-assets-description">
                <p className="big">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin purus erat, vestibulum eget elementum eget, maximus non magna. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.</p>
                <p>Quisque posuere ex eu augue scelerisque, ac facilisis purus aliquam. Nam mollis consequat lorem, a vulputate turpis fringilla ut. In condimentum, urna sed aliquam iaculis, libero orci porta quam, sit amet volutpat turpis ipsum in sem. Quisque convallis rutrum lorem et rhoncus. Nullam lacinia arcu ac nisi tempor lacinia. In pretium elit id commodo.</p>
            </div>
          </div>
        </div>
      </section>
      <MosaicDivider />
      <section>
        <div className="card">
          <div className="container">
            <h2 className="title">Our Clients</h2>
            //Testimonials Slider
          </div>
        </div>
      </section>
      <MosaicDivider />
      <section>
        <div className="card">
          <div className="container">
            <h2 className="title">Awards + Mentions</h2>
            <div className="press-kit-awards">
                <div className="press-awards-image">
                    <img className="fit" src="#"/>
                </div>
                <div className="press-awards-content">
                  <h4>Award Title or Mention Publication</h4>
                  <p>Description of the award, why it was won, who awarded it, and how we feel about it. Keep it short and to the point.</p>
                  <p className="small right">September 2000</p>
                </div>
            </div>
            <div className="press-kit-awards">
                <div className="press-awards-image">
                    <img className="fit" src="#"/>
                </div>
                <div className="press-awards-content">
                  <h4>Award Title or Mention Publication</h4>
                  <p>Description of the award, why it was won, who awarded it, and how we feel about it. Keep it short and to the point.</p>
                  <p className="small right">September 2000</p>
                </div>
            </div>
            <div className="press-kit-awards">
                <div className="press-awards-image">
                    <img className="fit" src="#"/>
                </div>
                <div className="press-awards-content">
                  <h4>Award Title or Mention Publication</h4>
                  <p>Description of the award, why it was won, who awarded it, and how we feel about it. Keep it short and to the point.</p>
                  <p className="small right">September 2000</p>
                </div>
            </div>
          </div>
        </div>
      </section>
      <MosaicDivider />
      <section>
        <div className="card">
          <div className="container">
            <h2 className="title">Press Releases</h2>
            {data.allMarkdownRemark.edges.map(({node}) => (
              <Link to={node.fields.slug}>
                <div key={node.fields.slug} className="press-kit-press-release blog-inline">
                  <div className="blog-title">
                    <h4>{node.frontmatter.title}</h4>
                  </div>
                  <div className="blog-excerpt">
                    <p>{node.frontmatter.excerpt}</p>
                  </div>
                </div>
              </Link>
            ))}
            <div className="buttonwrapper">
                <div className="center space-top-big">
                    <Link to="/categories/press"><button className="btn btn-eyc">Archive</button></Link>
                </div>
            </div>
          </div>
        </div>
      </section>
    <MosaicDivider />
    </div>
  )
}

export default PressKit

export const  query = graphql`
query PressKitQuery{
  allMarkdownRemark(
    sort: {order: DESC, fields: [frontmatter___date]}
    limit:6
    filter: { 
        frontmatter: {
          categories: { 
            in: "press"
          }
        }
      }
    ) 
    {
    totalCount
    edges {
      node {
        fields{
          slug
        }
        frontmatter {
          title
          date
          author
          categories
          excerpt
        }
      }
    }
  }
}
`