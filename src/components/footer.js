import React from "react"
import DancingBear from "../images/bear-dance.gif"
import dangerBtn from "../images/panic-btn.jpg"

const Footer = () => { 

    return (
        <div className="footer__container">
            <footer className="footer__inner container">
                <div className="row">
                    <div className="col-md">
                        <img src={DancingBear} className="w-100" />
                    </div>
                    <div className="col-md">
                        <h4>MetroSystems</h4>

                        <ul className="link__warpper">
                            <li className="link">Posts</li>
                            <li className="link">Banners</li>
                            <li className="link">Careers</li>
                            <li className="link">View All</li>
                        </ul>
                    </div>
                    <div className="col-md">
                        <h4>MetroConnect</h4>
                        <ul className="link__warpper">
                            <li className="link">Posts</li>
                            <li className="link">View All</li>
                        </ul>
                    </div>
                    <div className="col-md">
                        <h4>HISMSC</h4>
                        <ul className="link__warpper">
                            <li className="link">Posts</li>
                            <li className="link">View All</li>
                        </ul>
                    </div>
                    <div className="col-md">
                        <a href="http://line.me/ti/p/~zuppusit" target="_blank">
                        <img 
                             data-toggle="tooltip" data-placement="top" title="Do You Need Help?"
                            className="panic-btn"
                            src={ dangerBtn } 
                            alt="btn" 
                            style={{width: "200px"}}
                            
                        />
                        </a>
                    </div>
                    
                </div>
                <hr style={{
                    borderTop: "1px solid rgb(53,53,53)"
                }} />
                <div className="text-muted">
                    
                    © {new Date().getFullYear()}, Cheers ✌️
                </div>
               
            </footer>
        </div>
    )
}

export default Footer;