import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'

import '../style/style.css'
import '../style/responsive.css'

import ScrollHeader from '../components/scrollheader.js'
import Header from '../components/header'
import Footer from '../components/footer'

console.log("Built using React ", React.version);

const TemplateWrapper = ({ children }) => (
  <div>
    <Helmet
      title="Eyecarrot Innovations"
      meta={[
        { name: 'description', content: 'Sample' },
        { name: 'keywords', content: 'sample, something' },
      ]}
      bodyAttributes={{
        onScroll: ScrollHeader
      }}
    />
    <ScrollHeader>
      <Header />
    </ScrollHeader>
    <div>
      {children()}
    </div>
    <Footer />
  </div>
)
TemplateWrapper.propTypes = {
  children: PropTypes.func,
}
export default TemplateWrapper

export const query = graphql`
  query SiteTitleQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`