import React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/layout"

const UserTemplate = ({ data, location }) => (
  <Layout location={location}>
    <h1>{data.strapiUser.username}</h1>
    <ul>
      {data.strapiUser.articles.map(article => (
        <li key={article.id}>
          <h2>
            <Link to={`/Article_${article.id}`}> {article.title} </Link>
          </h2>
          <img
            src={article.image.url}
            alt="image"
            style={{ width: 200, height: 200 }}
          />
          <p>{article.content}</p>
        </li>
      ))}
    </ul>
  </Layout>
)
export default UserTemplate

export const query = graphql`
  query UserTemplate($id: String!) {
    strapiUser(id: { eq: $id }) {
      id
      username
      articles {
        id
        title
        image {
          url
        }
        content
      }
    }
  }
`
