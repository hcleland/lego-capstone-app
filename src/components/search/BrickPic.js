import React, { Component } from 'react';
import "./searchDetails.css"
import { Container, Row, Col, Media } from "reactstrap";

class BrickPic extends Component {

    render() {

        return (

            <div>
                {
                    // <Container key={brick.id}>
                    //     <Row>
                    //         <Col sm={{ size: 1 }}>
                    //             <Media src={brick.part.part_img_url} alt="individual lego brick" rounded />
                    //         </Col>
                    //     </Row>
                    // </Container>
                    <Col xs="auto"><img src={this.props.brick.part.part_img_url} />
                        <p>Quantity Needed: {this.props.brick.quantity}</p>
                    </Col>


                }
            </div>
        )

    }
}

export default BrickPic