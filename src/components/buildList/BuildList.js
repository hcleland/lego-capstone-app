import React, { Component } from 'react';
import ApiManager from "../../modules/ApiManager"
import { Card, CardBody, CardTitle, CardSubtitle, CardText, Label, Input, FormGroup, Button, CardImg } from "reactstrap";
import { Link } from 'react-router-dom';
import "./BuildList.css";

class BuildList extends Component {

    state = {
        // buildItems: [],
        saveDisabled: false
    }

    // getBuildItems = () => {
    //     ApiManager.getAllItems()
    //         .then(results => {
    //             this.setState({
    //                 buildItems: results
    //             });
    //             console.log("getBuildItems results", results);
    //         });
    // };

    // handleDelete = (id) => {
    //     const newState = {};
    //     ApiManager.deleteListItem(id)
    //         .then(ApiManager.getAllItems)
    //         .then(items => {
    //             console.log("items", items);
    //             newState.items = items
    //         })
    //         .then(() => {
    //             this.props.history.push("/buildItems")
    //             this.setState(newState)
    //         })
    // };

    // handleDelete = buildItem => {
    //     this.setState({ disabled: true })
    //     ApiManager.deleteListItem(buildItem)
    // }


    // componentDidMount() {
    //     const newState = {};
    //     ApiManager.getAllItems()
    //         .then(items => {
    //             console.log("componentDidMount items", items);
    //             newState.buildItems = items
    //         })
    //         .then(() => this.setState(newState))
    // }

    render() {
        return (
            <React.Fragment>
                <div className="buildList">
                    <h1 id="userHeader">User's Build List</h1>
                    <section>
                        {this.props.buildItems.map(buildItem =>
                            <Card key={buildItem.id}>
                                <div className="buildItem_card">
                                    {/* <CardImg top width="100%" src={buildItem.moc_img_url} alt="Card image cap" /> */}
                                    <CardBody>
                                        <CardImg top width="100%" src={buildItem.moc_img_url} alt="Card image cap" />
                                        <CardTitle><h3>{buildItem.name} </h3></CardTitle>
                                        <CardSubtitle>{buildItem.set_num}: <a href={buildItem.moc_url} target="_blank">Instructions</a></CardSubtitle>
                                        {/* <CardText>
                                <a href={buildItem.moc_url} target="_blank">Instructions</a>
                                </CardText>
                                <CardLink href={buildItem.moc_url}>Instructions</CardLink> */}
                                        <CardText>
                                            {/* <p>Number of bricks used: {result.num_parts}</p> */}
                                            <Label for="exampleText">Notes:</Label>
                                            <Input type="textarea" name="text" id="exampleText" />
                                        </CardText>
                                        <FormGroup check>
                                            <Label check>
                                                <Input type="checkbox" id="checkbox2" />{' '}
                                                I Built This!
                            </Label>
                                            {/* <Button onClick={() => this.getInventory(result.set_num)} color="primary">Edit</Button> */}
                                        </FormGroup>
                                        <p></p>
                                        <Button tag={Link} to="/buildList" className="customBtnEdit">Save Notes</Button>
                                        <div className="divider" />
                                        {/* <Button onClick={() => this.getInventory(result.set_num)} color="danger">Add to Build List</Button> */}
                                        {/* <Button className="customBtnDelete" onClick={() => this.handleDelete(this.props.buildItem)}
                                            disabled={this.stateSaveDisabled}
                                        >Delete</Button> */}
                                        <Button onClick={
                                            () => {
                                                this.setState(
                                                    { saveDisabled: true },
                                                    () => this.props.deleteItem(buildItem.id)
                                                )
                                            }
                                        }>Delete</Button>
                                    </CardBody>
                                </div>
                            </Card>
                        )}
                    </section>
                </div>
            </React.Fragment>
        )
    }
}

export default BuildList