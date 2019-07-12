import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import Logo from "../images/logo.png"

const Header = () => (
    <header
        style={{
        background: `#00052d`
        }}
    >
        <div
        style={{
            margin: `0 auto`,
            maxWidth: 1140,
            padding: `1.2rem 1.0875rem`,
        }}
        >
            <nav className="navbar navbar-expand-lg">
                <Link
                    to="/"
                    style={{
                        color: `white`,
                        textDecoration: `none`,
                    }}
                    >
                        <img 
                        src={ Logo } 
                        alt="logo" 
                        style={{width: "200px"}}
                        />
                </Link>

                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item active">
                            <Link
                              to={`/MSC/`}
                              className="nav-link"
                            >
                                MSC
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link
                              to="/MSC/"
                              className="nav-link"
                              state={{ company: "MCC" }}
                            >
                                MCC
                            </Link>
                        </li>

                        <li className="nav-item">
                            <Link
                              to="/MSC/"
                              className="nav-link"
                              state={{ company: "HIS" }}
                            >
                                HIS
                            </Link>
                        </li>

                        <li className="nav-item">
                            <Link
                              to="/MSC/"
                              className="nav-link"
                              state={{ company: "IR" }}
                            >
                                IR
                            </Link>
                        </li>
                    </ul>
                </div>
            </nav>

            
        </div>
    </header>
)

Header.propTypes = {
    siteLogo: PropTypes.string,
}

Header.defaultProps = {
    siteLogo: ``,
}

export default Header
