import React from "react"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import Container from "react-bootstrap/Container"
import {BsTwitter} from "react-icons/bs"
import {FaFacebookF} from "react-icons/fa"
import {AiFillInstagram} from "react-icons/ai"
import {AiFillMail} from "react-icons/ai"


function Footer() {
    return(
        <Container fluid className="footer-container">
            <Container>
                <Row className="footer-row">
                    <Col xs={6} className="footer-col-one">
                        <p className="footer-web-name"> Octa<b>YK</b> </p>
                        <p className="footer-description"> OctaYK is your base to accessing your Asset </p>
                        <div className="footer-social-media-div">
                            <BsTwitter className="footer-social-media-icon" /> 
                            <FaFacebookF className="footer-social-media-icon" /> 
                            <AiFillInstagram className="footer-social-media-icon" /> 
                            <AiFillMail className="footer-social-media-icon" />
                        </div>
                        <p className="copyright-par"> @2022 OctaTY Digital Limited. All Right Reserved. </p>
                    </Col>
                    <Col xs={2} className="footer-col">
                        <p className="footer-title"> About </p>
                        <p className="footer-items"> NFT Staking </p>
                        <p className="footer-items"> Herous </p>
                        <p className="footer-items"> TYverse </p>
                        <p className="footer-items"> Future </p>
                    </Col>
                    <Col xs={2} className="footer-col">
                        <p className="footer-title"> Contact </p>
                        <p className="footer-items"> Privacy </p>
                        <p className="footer-items"> Term of Use </p>
                        <p className="footer-items"> Cookie </p>
                    </Col>
                    <Col xs={2} className="footer-col">
                        <p className="footer-title"> Collections </p>
                        <p className="footer-items"> Our Items </p>
                        <p className="footer-items"> Contracts </p>
                        <p className="footer-items"> Collections </p>
                    </Col>
                </Row>
            </Container>
        </Container>
    )
    
}


export default Footer