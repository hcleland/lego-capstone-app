import React, { Component } from 'react';
import {
    Row, Col, Container, Media,
} from "reactstrap";

class SearchDetails extends Component {

    render() {
        return (
            <>
                {this.props.searchDetails.map(brick => (
                    // <div key={brick.id}>
                    //     <img src={brick.part.part_img_url} alt-text="individual lego brick" />
                    //     <p>{brick.part.part_img_url}</p>
                    // </div>
                    <Container key={brick.id}>
                        <Row>
                            <Col sm={{ size: 'auto' }}>
                                <Media src={brick.part.part_img_url} alt="individual lego brick" rounded />
                            </Col>
                        </Row>
                    </Container>
                    // <div key={brick.id}>
                    //     <img src="{brick.part.part_img_url}"></img>
                    // </div>
                ))}
            </>
        )
    }
}
export default SearchDetails