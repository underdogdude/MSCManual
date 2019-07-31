import React from "react"
import { Link, graphql } from "gatsby"
import Document from "../components/document"
import SEO from "../components/seo"


const MSC = ({data}) => {
    const { edges } = data.allMarkdownRemark
    return (
        <Document>
            <SEO title="MSC" />
            <div>

                <iframe src="https://docs.google.com/document/d/e/2PACX-1vT8NdRf3Wg9nQ2f97lCfiqUu3cN_pJ_8gMMCEu27r0XsSffLI1DVNkt6MFcl0InYffFs3SAm5kR0oaY/pub?embedded=true" frameborder="0" scrolling="yes" seamless="seamless" style={{"display":"block", "width":"100%", "height":"100vh"}}></iframe>
            </div>
         
            {/* {
                edges.map(edge => { 
                    const {frontmatter} = edge.node
                    console.log(frontmatter, ' front fuck');
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
            } */}
            {/* <Link to="/">Go back to the homepage</Link> */}
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
