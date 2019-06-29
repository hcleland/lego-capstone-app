import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { Jumbotron, Container, Button, Row, Col } from 'reactstrap';
import "./landing.css";
// import Search from "./search/Search";
// import SignUpModal from "./SignUpModal";

export default class Landing extends Component {
    render() {
        return (
            <div className="landing">
                {/* <h1>Lego Capstone App</h1> */}
                <Jumbotron className="jumbotron">
                    <Container>
                        <Row>
                            <Col xs="7">
                                <h1 className="display-3">ReBUILD</h1>
                                <p className="lead">With ReBUILD you can search for NEW creations to build with the bricks from a lego set you already have.</p>
                                <hr className="my-2" />
                                <p></p>
                                <p className="lead">
                                    <Button tag={Link} to="/signup" className="customBtnLanding">Start Building</Button>
                                </p>
                            </Col>
                        </Row>
                    </Container>
                </Jumbotron>
            </div>
        );
    };
}