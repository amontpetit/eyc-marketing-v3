import React from 'react'
import Link from 'gatsby-link'

import MosaicDivider from '../components/mosaicdivider'
import StockTicker from '../components/stockticker'
import ContactForm from '../components/contactform.js'

const Invest = ({data}) => {
  console.log(data);

  //Trim the excerpt from each post to a set number of characters and add trailing ellipsis
  data.NewsPosts.edges.map(({node}) => (node.frontmatter.excerpt = node.frontmatter.excerpt.substring(0, 144) + '…'));
  data.PressPosts.edges.map(({node}) => (node.frontmatter.excerpt = node.frontmatter.excerpt.substring(0, 288) + '…'));

  return(
    <div id="invest">
      <div id="hero-half">
        <h1 id="hero-headline">Invest with Eyecarrot</h1>
      </div>
      <section>
        <div className="card">
          <div className="container">
            <h2 className="title">Grow With Us</h2>
            <div id="invest-overview">
              <p className="big">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin purus erat, vestibulum eget elementum eget, maximus non magna. Orci varius natoque penatibus.</p>
              <p>Nam mollis consequat lorem, a vulputate turpis fringilla ut. In condimentum, urna sed aliquam iaculis, libero orci porta quam, sit amet volutpat turpis ipsum in sem. Quisque convallis rutrum lorem et rhoncus. Nullam lacinia arcu ac nisi tempor lacinia. In pretium elit id commodo gravida. Sed blandit eros vitae lacus dapibus condimentum. Nulla vulputate massa et massa viverra, iaculis tempus tellus semper.</p>
            </div>
            <div id="invest-stockticker">
              <div id="invest-stock-info-wrapper">
                  <StockTicker />
              </div>
            </div>
          </div>
        </div>
      </section>
      <MosaicDivider />
      <section>
        <div className="card">
          <div className="container">
            <h2 className="title">Our Team</h2>

          </div>
        </div>
      </section>  
      <section>
        <div className="card">
          <div className="container">
            <h2 className="title">Press Releases</h2>
            {data.PressPosts.edges.map(({node}) => (
              <Link to={node.fields.slug}>
                <div key={node.fields.slug} className="invest-press-release blog-inline">
                  <div className="blog-title">
                    <h4>{node.frontmatter.title}</h4>
                  </div>
                  <div className="blog-excerpt">
                    <p>{node.frontmatter.excerpt}</p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
      <MosaicDivider />
      <section>
        <div className="card">
          <div className="container">
            <h2 className="title">News + Blog</h2>
            {data.NewsPosts.edges.map(({node}) => (
              <Link to={node.fields.slug}>
                <div key={node.fields.slug} className="invest-news-blog blog-inline">
                  <div className="blog-title">
                    <h4>{node.frontmatter.title}</h4>
                  </div>
                  <div className="blog-excerpt">
                    <p>{node.frontmatter.excerpt}</p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
      <MosaicDivider />
      <section id="invest-kit">
        <div className="card">
          <div className="container">
            <h2 className="title">Investor Kit</h2>
            <div id="invest-kit-description">
              <p className="big">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin purus erat, vestibulum eget elementum eget, maximus non magna. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.</p>
              <p>Quisque posuere ex eu augue scelerisque, ac facilisis purus aliquam. Nam mollis consequat lorem, a vulputate turpis fringilla ut. In condimentum, urna sed aliquam iaculis, libero orci porta quam, sit amet volutpat turpis ipsum in sem. Quisque convallis rutrum lorem et rhoncus. Nullam lacinia arcu ac nisi tempor lacinia. In pretium elit id commodo.</p>
            </div>
            <div id="invest-kit-download">
                <div id="invest-kit-image">
                    <img className="fit" src="#" />
                </div>
                <div id="invest-kit-meta">
                  <a href="#"><button className="btn btn-eyc">Download</button></a>
                  <p className="small">EYC_InvestorKit.pdf &mdash; 00.0MB</p>
                  <p className="tiny">Last Updated: 2018-05-29</p>
                </div>
            </div>
          </div>
        </div>
      </section>
      <MosaicDivider />
      <ContactForm formId="b0205f84-f7b2-4c7d-89f1-0ade09338b1c"/>
      <MosaicDivider />
    </div>
  )
}

export default Invest

export const  query = graphql`
query InvestPageQuery{
  PressPosts: allMarkdownRemark(
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
  NewsPosts: allMarkdownRemark(
    sort: {order: DESC, fields: [frontmatter___date]}
    limit:3
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