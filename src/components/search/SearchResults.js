import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import ApiManager from '../../modules/ApiManager';
import {
    Form, Col, Button, Input, Label, CardDeck, Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle,
} from "reactstrap";
import "./searchForm.css";
import Search from "./Search"
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
                {/* <div className="searchForm">
                    <Form>
                        <Label for="userName" sm={4}>Lego Set Number</Label>
                        <Col sm={10}>
                            <Input type="text" required name="userName" onChange={this.props.handleFieldChange} id="searchInput" placeholder="31088-1" />
                        </Col>
                        <Label for="userName" sm={4}><Button onClick={this.getSearchResults} color="success">Search</Button></Label>
                    </Form>
                    <div> */}
                <div>
                    <h1>Search Results here</h1>
                    <section className="searchResults">
                        {this.props.searchResults.map(result =>
                            <div key={result.set_num} className="result_card">
                                <Card>
                                    <CardImg top width="100%" src={result.moc_img_url} alt="Card image cap" />
                                    <CardBody>
                                        <CardTitle><h3>{result.name}</h3></CardTitle>
                                        <CardSubtitle>{result.set_num}</CardSubtitle>
                                        <CardText>
                                            <p>Designed by: {result.designer_name}</p>
                                            <p>Number of bricks used: {result.num_parts}</p></CardText>
                                        <Button onClick={() => this.getInventory(result.set_num)} color="primary">Details</Button>
                                        <div className="divider" />
                                        {/* <Button onClick={() => this.getInventory(result.set_num)} color="danger">Add to Build List</Button> */}
                                        <Button tag={Link} to="/buildList" color="danger">Add to Build List

                                        </Button>
                                    </CardBody>
                                </Card>
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