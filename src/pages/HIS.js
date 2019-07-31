import React from "react"
import { Link, graphql } from "gatsby"
import Document from "../components/document"
import SEO from "../components/seo"


const HIS = () => {
    return (
        <Document>
            <SEO title="HIS" />
            <div>
                <iframe src="https://docs.google.com/document/d/e/2PACX-1vQJN9DC_FBFIoBxgKwHfGpVHsRLbZueJjJOrggb5CHn0zbKO7BB6r62gNoXQb_U2b5E7notgRQDKVcS/pub?embedded=true" frameborder="0" scrolling="yes" seamless="seamless" style={{"display":"block", "width":"100%", "height":"100vh"}}></iframe>
            </div>
        </Document>
    )
}

export default HIS
