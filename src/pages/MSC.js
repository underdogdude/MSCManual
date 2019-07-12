import React from "react"
import { Link, graphql } from "gatsby"
import Document from "../components/document"
import SEO from "../components/seo"


const MSC = ({data}) => {
    const { edges } = data.allMarkdownRemark
    return (
        <Document>
            <SEO title="MSC" />
            <h1>MSC</h1>
            {
                edges.map(edge => { 
                    const {frontmatter} = edge.node
                    return (
                        <div key={frontmatter.path}>
                            <Link
                                to={frontmatter.path}
                            >
                                {frontmatter.title}
                            </Link>
                        </div>
                    )
                })
            }
            <Link to="/">Go back to the homepage</Link>
        </Document>
    )
}

export const query = graphql`
    query MSCQuery {
        allMarkdownRemark {
            edges {
              node {
                id
                frontmatter {
                  date
                  excerpt
                  path
                  tags
                  title
                }
              }
            }
          }
    }
`
export default MSC
