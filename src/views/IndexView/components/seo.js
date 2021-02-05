import React from "react"
import PropTypes from "prop-types"
import { Helmet } from "react-helmet"
import { useLocation } from "@reach/router"
import { useStaticQuery, graphql } from "gatsby"

const query = graphql`
  {
    site {
      siteMetadata {
        siteTitle
        siteDescription
        author
        keywords
        siteUrl
        defaultImage: image
      }
    }
  }
`
const SEO = ({ title, description, image }) => {
  const { pathname } = useLocation()
  const { site } = useStaticQuery(query)
  const {
    siteTitle,
    siteDescription,
    keywords,
    siteUrl,
    defaultImage,
  } = site.siteMetadata

  const seo = {
    title: title || siteTitle,
    description: description || siteDescription,
    image: `${siteUrl}${image || defaultImage}`,
    url: `${siteUrl}${pathname}`,
  }
  return (
    <Helmet htmlAttributes={{ lang: "cz" }} title={`${title} | ${siteTitle}`}>
      <meta name="description" content={seo.description} />
      <meta name="image" content={seo.image} />
      <meta name="keywords" content={keywords} />
      <meta
        name="google-site-verification"
        content="5jtx7w3SWkGeYjKc3oHQUb0sQOUJzWxnFu7YORJta00"
      />

      {/* facebook cards */}
      <meta property="og:url" content={seo.ulr} />
      <meta property="og:type" content="website" />
      <meta property="og:title" content={seo.title} />
      <meta property="og:description" content={seo.description} />
      <meta property="og:image" content={seo.image} />
      <meta property="og:image:width" content="100%" />
      <meta property="og:image:height" content="auto" />
    </Helmet>
  )
}

export default SEO

SEO.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  image: PropTypes.string,
}
SEO.defaultProps = {
  title: null,
  description: null,
  image: null,
}
