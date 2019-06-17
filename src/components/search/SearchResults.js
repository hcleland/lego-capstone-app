import React, { Component } from 'react';
import {
    Row, Col, Button, Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle,
} from "reactstrap";
import "./searchForm.css";
import "./searchResults.css";
import { Link } from "react-router-dom";

class SearchResults extends Component {
    state = {
        // searchResults: [],
        searchInput: " ",
        moc: [{ id: 1, color: { name: 'blue' } }]
    };


    render() {
        console.log("this.state.moc", this.state.moc)
        return (
            <React.Fragment>
                <div>
                    <h1>Search Results here</h1>
                    <section className="searchResults">
                        {this.props.searchResults.map(result =>
                            <div key={result.set_num}>
                                <Row>
                                    <Col sm="6">
                                        <Card className="resultCard">
                                            <CardImg top width="50%" src={result.moc_img_url} alt="Card image cap" />
                                            <CardBody>
                                                <CardTitle><h3>{result.name}</h3></CardTitle>
                                                <CardSubtitle>{result.set_num}</CardSubtitle>
                                                <CardText>
                                                    Designed by: {result.designer_name}
                                                </CardText>
                                                <CardText>
                                                    Number of bricks used: {result.num_parts}
                                                </CardText>
                                                <Button onClick={() => this.props.getDetails(result.set_num)} tag={Link} to="/searchDetails" color="primary">Details</Button>
                                                <div className="divider" />
                                                <Button tag={Link} to="/buildList" color="danger">Add to Build List

                                        </Button>
                                            </CardBody>
                                        </Card>
                                    </Col>
                                </Row>
                            </div>
                        )}
                    </section>
                </div >
                {/* <SearchDetail searchResult={this.state.moc} /> */}
            </React.Fragment>
        )
    }
}

export default SearchResults;