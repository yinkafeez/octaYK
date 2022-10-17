import React from "react"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import { Container } from "react-bootstrap"
import {BsTwitter} from "react-icons/bs"
import {BsFacebook} from "react-icons/bs"
import {BsInstagram} from "react-icons/bs"
import {CgMailOpen} from "react-icons/cg"


function SocialMedia() {
    return(
        <Container>
            <Row className="social-medai-row">
                <Col xs={0} md={2}></Col>
                <Col xs={12} md={8} className="social-medai-col">
                    {/* <Row> */}
                        <span  className="social-media-item">
                            <BsTwitter /> Twitter 
                        </span>
                        <span  className="social-media-item">
                            <BsFacebook /> Facebook 
                        </span>
                        <span  className="social-media-item"> 
                            <BsInstagram /> Instagram 
                        </span>
                        <span  className="social-media-item"> 
                            <CgMailOpen /> Gmail 
                        </span>
                    {/* </Row> */}
                </Col>
                <Col xs={0} md={2}></Col>
            </Row>
        </Container>
    )
}

export default SocialMedia