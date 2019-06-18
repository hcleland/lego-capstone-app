import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Row, Col, Card, CardImg, CardBody, CardTitle, CardSubtitle, CardText, Button } from 'reactstrap';
import ApiManager from "../../modules/ApiManager"

class BuildItem extends Component {

    state = {
        saveDisabled: false
    }

    handleAdd = result => {
        this.setState({ disabled: true })
        ApiManager.addListItem(result)
    }

    // handleClick = (event) => {
    //     console.log("click", event, this.props.buildItem.id);
    //     this.setState({
    //         saveDisabled: true
    //     })
    //     this.props.addItem(this.props.buildItem.id);
    // }

    render() {
        return (
            <React.Fragment>
                <div>
                    {/* <h1>Search Results here</h1> */}
                    <section className="searchResults">
                        {/* {this.props.searchResults.map(result => */}
                        <div key={this.props.result.set_num}>
                            <Row>
                                <Col sm="6">
                                    <Card className="resultCard">
                                        <CardImg top width="50%" src={this.props.result.moc_img_url} alt="Card image cap" />
                                        <CardBody>
                                            <CardTitle><h3>{this.props.result.name}</h3></CardTitle>
                                            <CardSubtitle>{this.props.result.set_num}</CardSubtitle>
                                            <CardText>
                                                Designed by: {this.props.result.designer_name}
                                            </CardText>
                                            <CardText>
                                                Number of bricks used: {this.props.result.num_parts}
                                            </CardText>
                                            <Button onClick={() => this.props.getDetails(this.props.result.set_num)} tag={Link} to="/searchDetails" color="primary">Details</Button>
                                            <div className="divider" />
                                            <Button disabled={this.state.disabled} onClick={() => this.handleAdd(this.props.result)} color="danger">{(this.state.disabled) ? "Added to List" : "Add to List"}</Button>
                                        </CardBody>
                                    </Card>
                                </Col>
                            </Row>
                        </div>

                    </section>
                </div >
            </React.Fragment>
        )
    }
}

export default BuildItem;