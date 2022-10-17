import React from "react"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import Container from "react-bootstrap/Container"


function RoadmapPage() {
    return(
        <Container fluid className="Roadmap-container">
            <div className="Roadmap-title"> Our Roadmap For You </div>
            <Row className="Roadmap-row">
                {/* Col One */}
                <Col xs={3} className="Roadmap-col-one">
                    <div className="Roadmap-div-one">
                        <div className="Roadmap-height"></div>
                        <Row>
                            <Col xs={2} sm={4}> <div className="Roadmap-base"> 1 </div> </Col>
                            <Col className="Roadmap-base-list-col">
                                <span className="Roadmap-base-list-title"> Phase; </span> 
                                <span> 
                                    <span className="Roadmap-base-list-items"> A. Open Private </span> <br /> 
                                    <span className="Roadmap-base-list-items"> B. Seed  Render </span> <br /> 
                                    <span className="Roadmap-base-list-items"> C. Coin Checker  </span> 
                                </span>
                            </Col>
                        </Row>
                    </div>
                </Col>
                {/* Col Two */}
                <Col xs={3} className="Roadmap-col-two">
                    <div className="Roadmap-div-two">
                        <div className="Roadmap-height"></div>
                        <Row>
                            <Col xs={2} sm={4}> <div className="Roadmap-base"> 2 </div> </Col>
                            <Col className="Roadmap-base-list-col">
                                <span className="Roadmap-base-list-title"> Phase; </span> 
                                <span> 
                                    <span className="Roadmap-base-list-items"> A. Open Private </span> <br /> 
                                    <span className="Roadmap-base-list-items"> B. Seed  Render </span> <br /> 
                                    <span className="Roadmap-base-list-items"> C. Coin Checker  </span> 
                                </span>
                            </Col>
                        </Row>
                    </div>
                </Col>
                {/* Col Three */}
                <Col xs={3} className="Roadmap-col-three">
                    <div className="Roadmap-div-three">
                        <div className="Roadmap-height"></div>
                        <Row>
                            <Col xs={2} sm={4}> <div className="Roadmap-base"> 3 </div> </Col>
                            <Col className="Roadmap-base-list-col">
                                <span className="Roadmap-base-list-title"> Phase; </span> 
                                <span> 
                                    <span className="Roadmap-base-list-items"> A. Open Private </span> <br /> 
                                    <span className="Roadmap-base-list-items"> B. Seed  Render </span> <br /> 
                                    <span className="Roadmap-base-list-items"> C. Coin Checker  </span> 
                                </span>
                            </Col>
                        </Row>
                    </div>
                </Col>
                {/* Col Four */}
                <Col xs={3} className="Roadmap-col-four">
                    <div className="Roadmap-div-four">
                        <div className="Roadmap-height"></div>
                        <Row>
                            <Col xs={2} sm={4}> <div className="Roadmap-base"> 4 </div> </Col>
                            <Col className="Roadmap-base-list-col">
                                <span className="Roadmap-base-list-title"> Phase; </span> 
                                <span> 
                                    <span className="Roadmap-base-list-items"> A. Open Private </span> <br /> 
                                    <span className="Roadmap-base-list-items"> B. Seed  Render </span> <br /> 
                                    <span className="Roadmap-base-list-items"> C. Coin Checker  </span> 
                                </span>
                            </Col>
                        </Row>
                    </div>
                </Col>

            </Row>
            
        </Container>
        
    )
}

export default RoadmapPage