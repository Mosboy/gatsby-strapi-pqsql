import React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/layout"

const IndexPage = ({ data, location }) => {
  return (
    <Layout location={location}>
      <h1>Hi people </h1>
      <p>Welcome to your new Gatsby site.</p>
      <p>Now go build omething great.</p>
      <ul>
        {data.allStrapiArticle.edges.map(document => (
          <li key={document.node.id}>
            <h2>
              <Link to={`/${document.node.id}`}>{document.node.title}</Link>
            </h2>
            <img
              src={document.node.image.url}
              style={{ width: 200, height: 200 }}
              alt="blog_img"
            />
            <p>{document.node.content} </p>
          </li>
        ))}
      </ul>
      <Link to="/page-2/"> Go to page 2</Link>
    </Layout>
  )
}

export default IndexPage

export const pageQuery = graphql`
  query IndexQuery {
    allStrapiArticle {
      edges {
        node {
          id
          image {
            url
          }
          title
          content
        }
      }
    }
  }
`
