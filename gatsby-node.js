/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

 // You can delete this file if you're not using it

const path = require(`path`)
const { createFilePath } = require(`gatsby-source-filesystem`)
const _ = require('lodash')

exports.onCreateNode = ({ node, getNode, boundActionCreators }) => {
  const { createNodeField } = boundActionCreators
  if (node.internal.type === `MarkdownRemark`) {
    const slug = createFilePath({ node, getNode, basePath: `pages` })
    createNodeField({
      node,
      name: `slug`,
      value: slug,
    })
  }
}

exports.createPages = ({ graphql, boundActionCreators }) => {
  const { createPage } = boundActionCreators

  const categoryTemplate = path.resolve("src/templates/categories.js");

  return new Promise((resolve, reject) => {
    graphql(`
      {
        allMarkdownRemark {
          edges {
            node {
              frontmatter{
                title
                author
                date
                categories
                excerpt
              }
              fields {
                slug
              }
            }
          }
        }
      }
    `).then(result => {
      //Make the pages for each individual post
      result.data.allMarkdownRemark.edges.forEach(({ node }) => {
        createPage({
          path: node.fields.slug,
          component: path.resolve(`./src/templates/posts.js`),
          context: {
            slug: node.fields.slug,
          },
        })

        // Category pages:
        let categories = []
        // Iterate through each post, putting all found categories into `categories`
        result.data.allMarkdownRemark.edges.forEach(({ node }) => {
          if (node.frontmatter.categories) {
            node.frontmatter.categories.forEach(function (category){
              categories = categories.concat(category)
            })
          }
        });
        // Eliminate duplicate categories
        categories = _.uniq(categories)

        // Make category pages
        categories.forEach(category => {
          createPage({
            path: `/categories/${_.kebabCase(category)}/`,
            component: categoryTemplate,
            context: {
              category,
            },
          })
        })
        resolve()
      })
    })
  })
}