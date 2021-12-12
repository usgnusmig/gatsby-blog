import React, { useState } from "react"
import { Link, graphql } from "gatsby"
import Bio from "../components/bio"
import Layout from "../components/layout"
import Seo from "../components/seo"
import { Helmet } from "react-helmet"

const Index = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata?.title || `Title`
  const posts = data.allMarkdownRemark.nodes

  const [filteredCat, setFilteredCat] = useState("All")

  const filterCatHandler = selected => {
    setFilteredCat(selected)
  }

  if (posts.length === 0) {
    return (
      <Layout
        location={location}
        title={siteTitle}
        data={data}
        onChangeCat={filterCatHandler}
      >
        <Seo title="All posts" />
        <Bio />
        <p>No blog posts found.</p>
      </Layout>
    )
  } else if (filteredCat === "All") {
    return (
      <Layout
        location={location}
        title={siteTitle}
        data={data}
        onChangeCat={filterCatHandler}
      >
        <Helmet>
          <meta
            name="google-site-verification"
            content="c4xYskFHQz0OFG-ogDXYSQWlNWLeJIpR8r1N-tRoOnA"
          />
          <meta
            name="naver-site-verification"
            content="1750e4b1320dea37fd637ef2b9c6f0b1d6ed9d81"
          />
        </Helmet>
        <Seo title="All posts" />
        <ol>
          {posts.map(post => {
            const title = post.frontmatter.title || post.fields.slug

            return (
              <li key={post.fields.slug}>
                <article
                  className="post-list-item"
                  itemScope
                  itemType="http://schema.org/Article"
                >
                  <header>
                    <h2>
                      <Link to={post.fields.slug} itemProp="url">
                        <span itemProp="headline">{title}</span>
                      </Link>
                    </h2>
                    <p
                      dangerouslySetInnerHTML={{
                        __html: post.frontmatter.description || post.excerpt,
                      }}
                      itemProp="description"
                    />
                    <small>{post.frontmatter.date}</small>
                    <br />
                    <small>{post.frontmatter.categories}</small>
                  </header>
                  {/* <section></section> */}
                </article>
              </li>
            )
          })}
        </ol>
      </Layout>
    )
  } else {
    const filterExpenses = posts.filter(post => {
      return post.frontmatter.categories === filteredCat
    })
    return (
      <Layout
        location={location}
        title={siteTitle}
        data={data}
        onChangeCat={filterCatHandler}
      >
        <Helmet>
          <meta
            name="google-site-verification"
            content="c4xYskFHQz0OFG-ogDXYSQWlNWLeJIpR8r1N-tRoOnA"
          />
          <meta
            name="naver-site-verification"
            content="1750e4b1320dea37fd637ef2b9c6f0b1d6ed9d81"
          />
        </Helmet>
        <Seo title="All posts" />
        <ol>
          {filterExpenses.map(post => {
            const title = post.frontmatter.title || post.fields.slug

            return (
              <li key={post.fields.slug}>
                <article
                  className="post-list-item"
                  itemScope
                  itemType="http://schema.org/Article"
                >
                  <header>
                    <h2>
                      <Link to={post.fields.slug} itemProp="url">
                        <span itemProp="headline">{title}</span>
                      </Link>
                    </h2>
                    <p
                      dangerouslySetInnerHTML={{
                        __html: post.frontmatter.description || post.excerpt,
                      }}
                      itemProp="description"
                    />
                    <small>{post.frontmatter.date}</small>
                    <br />
                    <small>{post.frontmatter.categories}</small>
                  </header>
                  {/* <section></section> */}
                </article>
              </li>
            )
          })}
        </ol>
      </Layout>
    )
  }
}

export default Index

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
