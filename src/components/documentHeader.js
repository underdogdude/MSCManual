import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import Logo from "../images/logo.png"
import Header from "./header"

const DocumentHeader = (props) => {
    
    return (
        // <header
        //     style={{
        //     background: `#00052d`
        //     }}
        // >
        //     <div
        //     style={{
        //         margin: `0 auto`,
        //         padding: `1.2rem 1.0875rem`,
        //     }}
        //     >
        //         <nav className="navbar navbar-expand-lg">
        //             <Link
        //                 to="/"
        //                 style={{
        //                     color: `white`,
        //                     textDecoration: `none`,
        //                 }}
        //                 >
        //                     <img 
        //                     src={ Logo } 
        //                     alt="logo" 
        //                     style={{width: "200px"}}
        //                     />
        //             </Link>
        //             / Company
        //         </nav>
        //     </div>
        // </header>
        <Header />
    )
}

DocumentHeader.propTypes = {
    siteLogo: PropTypes.string,
    company: PropTypes.string,
}

DocumentHeader.defaultProps = {
    siteLogo: ``,
    company: `MSC`
}

export default DocumentHeader
