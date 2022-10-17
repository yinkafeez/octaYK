import React from "react"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import Container from "react-bootstrap/Container"
import SocialMedia from "./SocialMedia"
import {BsArrowRight} from "react-icons/bs"
import {AiOutlineBarChart} from "react-icons/ai"
import IMG3 from "../images/IMG3.png"
function WorkStrategy() {
    return(
        <>
            
            <Container fluid className="work-strategy-container">
                <SocialMedia />
                <Row className="work-strategy-row">
                    <Col xs={7}>
                        <p className="work-strategy-welcome-par"> 
                            Welcome to the future of web3 DAO with Iworld4 
                        </p>
                        <p className="work-strategy-decription-par">
                            OctTy is your base to accessing and owning an Asset in nft in the most 
                            unimaginable way
                        </p>
                    </Col>
                    <Col xs={5}></Col>
                </Row>
                {/* work-strategy first row */}
                <Row>
                    <Col xs={6}>
                        <p className="work-strategy-par"> HOW IT WORK <BsArrowRight style={{width:"76px"}}/> </p>
                    </Col>
                    <Col className="work-strategy-col-one">
                        <div className="work-strategy-div-one">
                            <Row>
                                <Col xs={4} className="work-strategy-icon-one-col">
                                    <AiOutlineBarChart className="work-strategy-icon-one"  />
                                </Col>
                                <Col>
                                    <p className="work-strategy-title-one-par"> Future Market Space </p>
                                    <p className="work-strategy-text-one-par">
                                        OctTy is your base to accessing and owning an Asset in nft in the most 
                                        unimaginable way
                                    </p>
                                </Col>
                            </Row>
                        </div>
                        <div id="work-strategy-one-base"></div>
                    </Col>
                </Row>

                {/* work-strategy second row */}
                <Row>
                    <Col xs={6} className="work-strategy-col-two">
                        <div className="work-strategy-div-two">
                            <Row>
                                <Col xs={4} className="work-strategy-icon-two-col">
                                    <div id="work-strategy-icon-two"></div>
                                    <div id="work-strategy-icon-two"></div>
                                    <div id="work-strategy-icon-two"></div>
                                </Col>
                                <Col>
                                    <p className="work-strategy-title-two-par"> Player Web </p>
                                    <p className="work-strategy-text-two-par">
                                        OctTy is your base to accessing and owning an Asset in nft in the most 
                                        unimaginable way
                                    </p>
                                </Col>
                            </Row>
                        </div>
                        <div id="work-strategy-two-base"></div>
                    </Col>
                    <Col></Col>
                </Row>

                 {/* work-strategy third row */}
                 <Row>
                    <Col></Col>
                    <Col xs={6} className="work-strategy-col-three">
                        <div className="work-strategy-div-three">
                            <Row>
                                <Col xs={4} className="work-strategy-icon-three-col">
                                    <img src={IMG3} />
                                </Col>
                                <Col>
                                    <p className="work-strategy-title-three-par"> Pixel Metaverse </p>
                                    <p className="work-strategy-text-three-par">
                                        OctTy is your base to accessing and owning an Asset in nft in the most 
                                        unimaginable way
                                    </p>
                                </Col>
                            </Row>
                        </div>
                        <div id="work-strategy-three-base"></div>
                    </Col>
                </Row>
            </Container>
        </>
    )
}
export default WorkStrategy