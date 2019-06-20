import React, { Component } from 'react';
import { Container, Row } from 'reactstrap';
import BrickPic from "./BrickPic";

class SearchDetails extends Component {

    render() {

        return (
            <>
                <Container>
                    <Row>
                        {this.props.searchDetails.map((brick) => {
                            return <BrickPic key={brick.part.part_img_url} brick={brick} {...this.props} />
                        }
                            // <div key={brick.id}>
                            //     <img src={brick.part.part_img_url} alt-text="individual lego brick" />
                            //     <p>{brick.part.part_img_url}</p>
                            // </div>

                            // <div key={brick.id}>
                            //     <img src="{brick.part.part_img_url}"></img>
                            // </div>
                        )}
                    </Row>
                </Container>
            </>
        )
    }
}
export default SearchDetails