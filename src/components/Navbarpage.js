import React, {useState,useEffect}  from "react"
import { MdClose } from "react-icons/md"
import { FiMenu } from "react-icons/fi"
import Button from "react-bootstrap/Button"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import { Container } from "react-bootstrap"

function Navbarpage() {


    // const[toggleMenu,setToggleMenu] = useState("")
    // const [screenWidth, setScreenWidth] = useState(window.innerWidth)

    // // handle toggle function on button click
    // function handleToggle() {
    //     setToggleMenu(!toggleMenu)
    // }

    // // function that will resize the nav on every size
    // useEffect(() => {

    //     const changeWidth = () => {
    //       setScreenWidth(window.innerWidth);
    //     }
    
    //     window.addEventListener('resize', changeWidth)

    //     return () => {
    //         window.removeEventListener('resize', changeWidth)
    //     }
    
    //   }, [])


      return(

            <Container fluid className="nav-container">
                {/* nav  */}
                <div >
                    {/* nav section one */}
                    <Row>
                        <Col xs={3}> 
                            <p className="webNameItems"> Octa<b>YK</b> </p>
                        </Col>
                        <Col xs={6}>
                            <Row>
                                <Col xs={3}><p className="Items"> Future </p></Col>
                                <Col xs={3}><p className="Items"> Marketplace </p></Col>
                                <Col xs={3}><p className="Items"> Octproject </p></Col>
                                <Col xs={3}><p className="Items"> Roadmap </p></Col>
                            </Row>
                        </Col>
                        <Col xs={3}>
                            <div className="btnItemsDiv">
                                <Button className="btnItems"> App </Button>
                            </div>
                        </Col>
                    </Row>

                     {/* nav section two */}

                    <div className="section-two-container-div">
                        <Row>
                            <Col xs={1} md={2} lg={3}></Col>
                            <Col xs={10} md={8} lg={6} className="top-title-col">
                                <p className="top-title"> THE DEFI DIGITAL STORE </p>
                                <h6 className="top-sub-title">
                                    ACCESS AND OWN <b className="top-sub-title-bold"> AN ASSET </b> BY UNLOCKING THE 
                                    CREATIVITY <b className="top-sub-title-bold"> OF YOUR  NFT </b>
                                </h6>
                                <p className="top-description"> OctTy is your base to accessing and owning an Asset in nft in the most 
                                    unimaginable way 
                                </p>
                            </Col>
                            <Col xs={1} md={2} lg={3}></Col>
                        </Row>
                        <Row className="nav-div-btn-row">
                            <Col xs={2} sm={3}></Col>
                            <Col xs={8} sm={6} className="nav-div-btn-col">
                                <Row>
                                    <Col xs={6}>
                                        <Button className="nav-div-btn-one"> Apply Here </Button> 
                                    </Col>
                                    <Col xs={6}>
                                        <Button className="nav-div-btn-two"> Join Here </Button> 
                                    </Col>
                                </Row>
                                
                            </Col>
                            <Col xs={2} sm={3}></Col>
                        </Row>
                    </div>
                </div>
            </Container>
      )
}

export default Navbarpage