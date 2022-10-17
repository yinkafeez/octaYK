import React from "react"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import Container from "react-bootstrap/Container"
import IMG10 from "../images/IMG10.png"

function SubscriptionPage() {
    return(
        <Container fluid className="subscription-container">
            <Container className="subscription-second-container">
                <Row className="subscription-row">
                    <Col xs={6} className="subscription-col">
                        <p className="subscription-title"> Join OctTY Community </p>
                        <p className="subscription-instruction"> Join and Subscribe to our community to stay abreast with us </p>
                        <div className="subscription-input-div">
                            <input placeholder="Enter Your Email"  className="subscription-input" /> 
                            <button className="subscription-button"> Subscribe </button> 
                        </div>
                    </Col>
                    <Col xs={6} className="subscription-img-col">
                        <div> <img src={IMG10}  width={450} height={375} /> </div>
                    </Col>
                </Row>
            </Container>
        </Container>
    )
}

export default SubscriptionPage 