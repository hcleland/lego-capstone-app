import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Row, Col, Card, CardImg, CardBody, CardTitle, CardSubtitle, CardText, Button } from 'reactstrap';
import ApiManager from "../../modules/ApiManager"
import "./BuildList.css"


class BuildItem extends Component {

    state = {
        saveDisabled: false,
        buildItems: []
    }

    // handleAdd = result => {
    //     this.setState({ saveDisabled: true })
    //     ApiManager.addListItem(result)
    //         .then(this.props.getBuildItems)
    // }

    handleAdd = newResultItem => {
        let credentials = sessionStorage.getItem("credentials")
        const parsedObj = JSON.parse(credentials)
        console.log(parsedObj.id);
        // console.log(parseInt(sessionStorage.getItem(credentials.id)))
        // const storedObj = JSON.parse(storedData);

        const newObj = {
            set_num: newResultItem.set_num,
            name: newResultItem.name,
            year: newResultItem.year,
            theme_id: newResultItem.theme_id,
            num_parts: newResultItem.num_parts,
            moc_img_url: newResultItem.moc_img_url,
            moc_url: newResultItem.moc_url,
            designer_name: newResultItem.designer_name,
            designer_url: newResultItem.designer_url,
            textAreaValue: "",
            isBuilt: false,
            userId: parsedObj.id
        }

        ApiManager.addListItem(newObj)
            .then(() => ApiManager.getAllItems())
            .then(results => {
                const filteredBuildItems = results.filter(buildItem => {
                    return parsedObj.id === buildItem.userId;
                });
                this.setState({
                    buildItems: filteredBuildItems
                });
            });
    };



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
                <div className="buildItem">
                    {/* <h1>Search Results here</h1> */}
                    <section className="searchResults">
                        {/* {this.props.searchResults.map(result => */}
                        <div key={this.props.result.set_num}>
                            <Row>
                                <Col sm="8">
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
                                            <Button disabled={this.state.saveDisabled} onClick={() => this.handleAdd(this.props.result)} color="danger">{(this.state.saveDisabled) ? "Added to List" : "Add to List"}</Button>
                                        </CardBody>
                                    </Card>
                                    <p></p>
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