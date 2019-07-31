import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Contact from "../components/contact"
import SEO from "../components/seo"
import ImgPath from "../images/tutorial-path.svg"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <div 
      className="section__light"
      style={{ paddingTop: "70px", paddingBottom: "70px" }}
    >
      <div className="container">
        <h2 className="text__blue font-weight-bold" style={{paddingBottom: "40px"}}>
            Check out the tutorials
        </h2>

        <div className="row">
            <div className="col-md-4">
                <div className="tutorial__headerwrapper">
                    <div className="tutorial__img">
                        <img src={ImgPath} />
                    </div>

                    <div className="tutorial__text">
                        MetroSystems (MSC)
                    </div>
                </div>

                <div className="tutorial__wrapper">
                    <div className="tutorial__list" >
                    <Link
                              to="/MSC/"
                        >
                        <div className="iconwrapper">
                            <i className="far fa-newspaper"></i>
                        </div>
                        <span className="text">Posts</span>
                        </Link>
                    </div>
                    <div className="tutorial__list" >
                        <Link
                              to="/MSC/"
                        >
                        <div className="iconwrapper">
                            <i className="far fa-address-card"></i>
                        </div>
                        <span className="text">Banner</span>
                        </Link>
                    </div>
                    <div className="tutorial__list" >
                        <Link
                              to="/MSC/"
                            >
                        <div className="iconwrapper">
                            <i className="fas fa-users"></i>
                        </div>
                        <span className="text">Careers</span>
                        </Link>
                    </div>
                    <div className="tutorial__list" >
                        <Link
                              to="/MSC/"
                            >
                        <div className="iconwrapper">
                            <i className="fas fa-arrow-alt-circle-right"></i>
                        </div>
                        <span className="text">View All</span>
                        </Link>
                    </div>
                </div>
            </div>
            <div className="col-md-4">
                <div className="tutorial__headerwrapper">
                    <div className="tutorial__img">
                        <img src={ImgPath} />
                    </div>

                    <div className="tutorial__text">
                        MetroConnect (MCC)
                    </div>
                </div>

                <div className="tutorial__wrapper">
                    <div className="tutorial__list" >
                        <Link
                              to="/MCC/"
                            >
                        <div className="iconwrapper">
                            <i className="far fa-newspaper"></i>
                        </div>
                        <span className="text">Posts</span>
                        </Link>
                    </div>
                    <div className="tutorial__list" >
                        <Link
                              to="/MCC/"
                            >
                            <div className="iconwrapper">
                                <i className="fas fa-arrow-alt-circle-right"></i>
                            </div>
                            <span className="text">View All</span>
                        </Link>
                    </div>
                </div>

            </div>
            <div className="col-md-4">
                <div className="tutorial__headerwrapper">
                    <div className="tutorial__img">
                        <img src={ImgPath} />
                    </div>

                    <div className="tutorial__text">
                        HISMSC (HIS) 
                    </div>
                </div>
                <div className="tutorial__wrapper">
                    <div className="tutorial__wrapper">
                        
                        <div className="tutorial__list" >
                        <Link
                              to="/HIS/"
                            >
                            <div className="iconwrapper">
                                <i className="far fa-newspaper"></i>
                            </div>
                            <span className="text">Posts</span>
                        </Link>
                        </div>
                        <div className="tutorial__list" >
                        <Link
                              to="/HIS/"
                            >
                            <div className="iconwrapper">
                                <i className="fas fa-arrow-alt-circle-right"></i>
                            </div>
                            <span className="text">View All</span>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </div>
    <Contact />
  </Layout>
)

export default IndexPage
