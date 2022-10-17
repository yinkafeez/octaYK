import React from "react"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import Container from "react-bootstrap/Container"
import IMG4 from "../images/IMG4.png"
import IMG5 from "../images/IMG5.png"
import IMG6 from "../images/IMG6.png"
import IMG7 from "../images/IMG7.png"
import IMG8 from "../images/IMG8.png"
import IMG9 from "../images/IMG9.png"



function TeamPage() {
    return(
        <Container fluid className="team-container">
            <div className="team-header"> Meet Our Team </div>
            {/* first row */}
            <Row className="team-row">
                <Col xs={12} md={4} lg={4} className="team-col">
                    <div className="team-img-border-bg-div-container"> 
                        <div className="team-img-border-bg"></div> 
                    </div>
                    <div className="team-img"> <img src={IMG4} width={240} height={235} /> </div>
                    <div className="team-bio-div">
                        <p className="team-name"> Jeff Jogn </p>
                        <p className="team-position"> Founder, CEO </p>
                    </div>
                </Col>
                <Col xs={12} md={4} lg={4} className="team-col">
                    <div className="team-img-border-bg-div-container"> 
                        <div className="team-img-border-bg"></div> 
                    </div>
                    <div className="team-img"> <img src={IMG5} width={240} height={235} /> </div>
                    <div className="team-bio-div">
                        <p className="team-name"> Seth Jane </p>
                        <p className="team-position"> Co-founder </p>
                    </div>
                </Col>
                <Col xs={12} md={4} lg={4} className="team-col">
                    <div className="team-img-border-bg-div-container"> 
                        <div className="team-img-border-bg"></div> 
                    </div>
                    <div className="team-img"> <img src={IMG6} width={240} height={235} /> </div>
                    <div className="team-bio-div">
                        <p className="team-name"> Bobby. H </p>
                        <p className="team-position"> Web Dev </p>
                    </div>
                </Col>
            </Row>


            {/* second row */}
            <Row className="team-row">
                <Col xs={12} md={4} lg={4} className="team-col">
                    <div className="team-img-border-bg-div-container"> 
                        <div className="team-img-border-bg"></div> 
                    </div>
                    <div className="team-img"> <img src={IMG7} width={240} height={235} /> </div>
                    <div className="team-bio-div">
                        <p className="team-name"> Mary Ana </p>
                        <p className="team-position"> Future Director </p>
                    </div>
                </Col>
                <Col xs={12} md={4} lg={4} className="team-col">
                    <div className="team-img-border-bg-div-container"> 
                        <div className="team-img-border-bg"></div> 
                    </div>
                    <div className="team-img"> <img src={IMG8} width={240} height={235} /> </div>
                    <div className="team-bio-div">
                        <p className="team-name"> Jeff Kihm </p>
                        <p className="team-position"> Full Stack Dev </p>
                    </div>
                </Col>
                <Col xs={12} md={4} lg={4} className="team-col">
                    <div className="team-img-border-bg-div-container"> 
                        <div className="team-img-border-bg"></div> 
                    </div>
                    <div className="team-img"> <img src={IMG9} width={240} height={235} /> </div>
                    <div className="team-bio-div">
                        <div className="team-name"> Jim Juin </div>
                        <div className="team-position"> NFT/Game Dev </div>
                    </div>
                </Col>
            </Row>


        </Container>
    )
}

export default TeamPage