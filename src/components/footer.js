import React from "react"
import DancingBear from "../images/bear-dance.gif"

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
                            <li className="link">Menu1</li>
                            <li className="link">Menu2</li>
                            <li className="link">Menu3</li>
                        </ul>
                    </div>
                    <div className="col-md">
                        <h4>MetroConnect</h4>
                        <ul className="link__warpper">
                            <li className="link">Menu1</li>
                            <li className="link">Menu2</li>
                            <li className="link">Menu3</li>
                        </ul>
                    </div>
                    <div className="col-md">
                        <h4>HISMSC</h4>
                        <ul className="link__warpper">
                            <li className="link">Menu1</li>
                            <li className="link">Menu2</li>
                            <li className="link">Menu3</li>
                        </ul>
                    </div>
                    <div className="col-md">
                        <h4>Investor Relations</h4>
                        <ul className="link__warpper">
                            <li className="link">Menu1</li>
                            <li className="link">Menu2</li>
                            <li className="link">Menu3</li>
                        </ul>
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