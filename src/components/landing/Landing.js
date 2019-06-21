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
                                <p className="lead">This is a simple hero unit, a simple Jumbotron-style component for calling extra attention to featured content or information.</p>
                                <hr className="my-2" />
                                <p></p>
                                <p className="lead">
                                    <Button tag={Link} to="/search" className="customBtnLanding">Start Building</Button>
                                </p>
                            </Col>
                        </Row>
                    </Container>
                </Jumbotron>
            </div>
        );
    };
}