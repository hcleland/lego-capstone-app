import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { Jumbotron, Container, Button, Row, Col } from 'reactstrap';
import "./landing.css";
// import SignUpModal from "./SignUpModal";

export default class Landing extends Component {
    render() {
        return (
            <div>
                <h1>Lego Capstone App</h1>
                <Jumbotron className="jumbotron">
                    <Container>
                        <Row>
                            <Col xs="7">
                                <h1 className="display-3">ReBUILD</h1>
                                <p className="lead">This is a simple hero unit, a simple Jumbotron-style component for calling extra attention to featured content or information.</p>
                                <hr className="my-2" />
                                <p>It uses utility classes for typography and spacing to space content out within the larger container.</p>
                                <p className="lead">
                                    <Button color="primary">Learn More</Button>
                                </p>
                            </Col>
                            <Col xs="5"><img className="jumbotronPic" src="https://resources.workstate.com/hubfs/blog-images/cloud-shift/BuildingBlocksOfTheCloud.jpg?t=1509467179536&width=320&name=BuildingBlocksOfTheCloud.jpg"></img></Col>
                        </Row>
                    </Container>
                    {/* <h1 className="display-3">ReBUILD</h1>
                    <p className="lead">This is a simple hero unit, a simple Jumbotron-style component for calling extra attention to featured content or information.</p>
                    <hr className="my-2" />
                    <p>It uses utility classes for typography and spacing to space content out within the larger container.</p>
                    <img className="jumbotronPic" src="https://resources.workstate.com/hubfs/blog-images/cloud-shift/BuildingBlocksOfTheCloud.jpg?t=1509467179536&width=320&name=BuildingBlocksOfTheCloud.jpg"></img> */}
                </Jumbotron>
            </div>
        );
    };
}