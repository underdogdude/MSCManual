import React from "react"
import { Link, graphql } from "gatsby"
import Document from "../components/document"
import SEO from "../components/seo"


const MCC = ({data}) => {
    return (
        <Document>
            <SEO title="MCC" />
            <div>
                <iframe src="https://docs.google.com/document/d/e/2PACX-1vTPAXgmTVpRS9GUQLB9tNrlj05km2C9P8JUhNStfLx6DZkIqU35704C265L7cU05Ic_OwgDPIcKsn01/pub?embedded=true" frameborder="0" scrolling="yes" seamless="seamless" style={{"display":"block", "width":"100%", "height":"100vh"}}></iframe>
            </div>
        </Document>
    )
}

export default MCC
