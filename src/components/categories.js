import React from "react"
import { graphql } from "gatsby"

const Categories = ({ data, onChangeCat }) => {
  const { group } = data.allMarkdownRemark
  const clickHandler = event => {
    onChangeCat(event.target.innerText)
  }

  return (
    <ol className="category-box">
      <li
        key={"All"}
        className="categories"
        onClick={clickHandler}
        onKeyPress={clickHandler}
        role="presentation"
      >
        All
      </li>
      {group.map(prop => {
        const { fieldValue } = prop
        return (
          <li
            key={fieldValue}
            className="categories"
            onClick={clickHandler}
            onKeyPress={clickHandler}
            role="presentation"
          >
            {fieldValue}
          </li>
        )
      })}
    </ol>
  )
}
export default Categories

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      nodes {
        excerpt
        fields {
          slug
        }
        frontmatter {
          date(formatString: "MMMM DD, YYYY")
          title
          description
          categories
        }
      }
      group(field: frontmatter___categories) {
        edges {
          node {
            id
          }
        }
        fieldValue
        totalCount
      }
    }
  }
`
