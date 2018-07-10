import React from 'react'
import Link from 'gatsby-link'

import MosaicDivider from '../components/mosaicdivider'

const News = ({data}) => {
  console.log(data);

  //Trim the excerpt from each post to a set number of characters and add trailing ellipsis
  data.allMarkdownRemark.edges.map(({node}) => (node.frontmatter.excerpt = node.frontmatter.excerpt.substring(0, 144) + '…'))

  return(
    <div id="news">
      <div id="hero-half">
        <h1 id="hero-headline">News + Blog</h1>
      </div>
      <section className="clearfix">
        {data.allMarkdownRemark.edges.map(({node}) => (
            <Link to={node.fields.slug}>
            <div key={node.fields.slug} className="news-blog-post">
            <div className="card-newsblog">
                <div className="blog-title">
                    <h4>{node.frontmatter.title}</h4>
                </div>
                <div className="blog-excerpt">
                    <p>{node.frontmatter.excerpt}</p>
                </div>
                <p className="tiny right"> More <i className="fa fa-angle-right"></i></p>
                </div>
            </div>
            </Link>
        ))}
      </section>
      <MosaicDivider />
    </div>
  )
}

export default News

export const  query = graphql`
query  NewsBlogPageQuery{
  allMarkdownRemark(
    sort: {order: DESC, fields: [frontmatter___date]}
    limit:9999
  ) 
    {
    totalCount
    edges {
      node {
        fields{
          slug
        },
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