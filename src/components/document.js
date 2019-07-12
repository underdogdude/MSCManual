import React from "react"
import PropTypes from "prop-types"
import DocumentHeader from "../components/documentHeader"
import Footer from "./footer"
import "./layout.css"
import "./footer.css"

const Document = ({ children }) => {
  return (
    <>
        <DocumentHeader />
        <div
            style={{
                margin: `0 auto`
            }}
        >
            <main>{children}</main>
            <Footer />
        </div>
    </>
  )
}


Document.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Document
