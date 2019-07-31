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
            <div 
                className="section__light"
                style={{ paddingTop: "70px", paddingBottom: "70px" }}
            >
                <div className="container">
                        <main>{children}</main>
                </div>
            </div>
            <Footer />
        </div>
    </>
  )
}


Document.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Document
