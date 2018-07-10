import React from 'react'
import Link from 'gatsby-link'

import MosaicDivider from '../components/mosaicdivider'

const IndexPage = ({data}) => {
  console.log(data)

  //Trim the excerpt from each post to a set number of characters and add trailing ellipsis
  data.allMarkdownRemark.edges.map(({node}) => (node.frontmatter.excerpt = node.frontmatter.excerpt.substring(0, 250) + '…'))

  return(
  <div id="home">
    <div id="hero">
      <div id="home-hero-headline">
        <h1 id="hero-headline">Lorem Ipsum Dolor Sit Amet</h1>
      </div>
      <div id="home-hero-subhead">
        <p id="hero-subhead">Nullam eu tincidunt mi. Nunc eget nisl arcu. Proin vel quam magna. Etiam sit amet velit massa.</p>
      </div>
    </div>
    <section>
      <div className="card">
        <div className="container">
          <div id="home-who-is-video">
            <div className="videoframe">
              "Who is Eyecarrot" Video
            </div>
            <div className="center">
              <Link to="/about">
                <button className="btn btn-eyc" id="home-who-is-button">The Eyecarrot Story</button>
              </Link>  
            </div>
          </div>
          <div id="home-who-is-content">
            <h2 className="title">Who is Eyecarrot?</h2>
            <p className="big">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean et felis non orci rutrum porttitor. Curabitur dolor massa, ornare non turpis in, vehicula ullamcorper neque. Sed sagittis iaculis est eget maximus. Nunc aliquam varius massa lacinia euismod. Praesent fermentum leo eget condimentum bibendum.</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean et felis non orci rutrum porttitor. Curabitur dolor massa, ornare non turpis in, vehicula ullamcorper neque. Sed sagittis iaculis est eget maximus. Nunc aliquam varius massa lacinia euismod. Praesent fermentum leo eget condimentum bibendum. Nulla egestas, nunc quis viverra placerat, ex mauris gravida neque, sit amet malesuada diam urna ut mauris. Proin eu nulla est. Curabitur aliquet rhoncus tempor. Donec bibendum justo lacus, id aliquam massa faucibus ac. Integer ultrices diam sed efficitur vehicula. Proin sodales metus quis elementum pellentesque. Donec ac consequat nulla. Cras aliquet placerat iaculis. Phasellus velit lorem, pharetra vel odio id, malesuada faucibus nunc.</p>
          </div>
        </div>
      </div>
    </section>
    <MosaicDivider />
    <section>
      <div className="card">
        <div className="container">
          <div id="home-what-do-content">
            <h2 className="title">What we do</h2>
            <p className="big">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean et felis non orci rutrum porttitor. Curabitur dolor massa, ornare non turpis in, vehicula ullamcorper neque. Sed sagittis iaculis est eget maximus. Nunc aliquam varius massa lacinia euismod. Praesent fermentum leo eget condimentum. </p>
            <div className="home-what-do-item">
              <h3>A thing</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean et felis non orci rutrum porttitor. Curabitur dolor massa, ornare non turpis in, vehicula ullamcorper.</p>
            </div>
            <div className="home-what-do-item">
              <h3>A thing</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean et felis non orci rutrum porttitor. Curabitur dolor massa, ornare non turpis in, vehicula ullamcorper.</p>
            </div>
            <div className="home-what-do-item">
              <h3>A thing</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean et felis non orci rutrum porttitor. Curabitur dolor massa, ornare non turpis in, vehicula ullamcorper.</p>
            </div>
          </div>
          <div id="home-what-do-video">
            <div className="slideshow-frame">
              <div className="slideshow-item">
                <div className="videoframe">
                  "What we do" video
                </div>
              </div>
            </div>
            <div className="center">
              <Link to="/products">
                <button className="btn btn-eyc" id="home-what-do-button">Our Products</button>
              </Link>
            </div>    
          </div>
        </div>
      </div>
    </section>
    <MosaicDivider />
    <section>
      <div className="card">
        <div className="container">
          <h2 className="title">News + Blog</h2>
          {data.allMarkdownRemark.edges.map(({node}) => (
            <Link to={node.fields.slug}>
              <div key={node.fields.slug} className="home-news-blog blog-inline">
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
  </div>
  )
}
export default IndexPage

export const  query = graphql`
query HomePageQuery{
  allMarkdownRemark(
    sort: {order: DESC, fields: [frontmatter___date]}
    limit:3) {
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