import React, { Component } from 'react';
import { Card, CardBody, CardTitle, CardSubtitle, CardText, Label, Input, FormGroup, Button, CardImg } from "reactstrap";
import { Link } from 'react-router-dom';
import "./BuildList.css";

class ListItem extends Component {

    state = {
        // buildItems: [],
        saveDisabled: false,
        textAreaValue: "",
        // checked: false
    }

    handleFieldChange = evt => {
        const stateToChange = {}
        stateToChange[evt.target.id] = evt.target.value
        this.setState(stateToChange)
    }

    updateExistingItem = evt => {
        evt.preventDefault()
        const editedItem = {
            id: this.props.buildItem.id,
            textAreaValue: this.state.textAreaValue,
            checked: this.state.checked,
            set_num: this.props.set_num,
            name: this.props.name,
            year: this.props.year,
            theme_id: this.props.theme_id,
            num_parts: this.props.num_parts,
            moc_img_url: this.props.moc_img_url,
            moc_url: this.props.moc_url,
            designer_name: this.props.designer_name,
            designer_url: this.props.designer_url
        };
        console.log(editedItem.id)
        this.props.updateItem(editedItem)
        console.log("editedItem", editedItem)
    }

    render() {
        console.log(this.state)
        return (
            <>
                < Card key={this.props.buildItem.id} >
                    <div className="buildItemCard">
                        {/* <CardImg top width="100%" src={buildItem.moc_img_url} alt="Card image cap" /> */}
                        <CardBody>
                            <CardImg top width="100%" src={this.props.buildItem.moc_img_url} alt="Card image cap" />
                            <CardTitle><h3>{this.props.buildItem.name} </h3></CardTitle>
                            <CardSubtitle>{this.props.buildItem.set_num}: <a href={this.props.buildItem.moc_url} target="_blank">Instructions</a></CardSubtitle>
                            {/* <CardText>
            <a href={buildItem.moc_url} target="_blank">Instructions</a>
            </CardText>
            <CardLink href={buildItem.moc_url}>Instructions</CardLink> */}
                            <CardText>
                                {/* <p>Number of bricks used: {result.num_parts}</p> */}
                                <Label for="exampleText">Notes:</Label>
                                <Input type="textarea" name="text" id="textAreaValue" onChange={this.handleFieldChange} defaultValue={this.props.buildItem.textAreaValue} />
                            </CardText>
                            <FormGroup check>
                                <Label check>
                                    <Input type="checkbox" id="checkbox2" />{' '}
                                    I Built This!
        </Label>
                                {/* <Button onClick={() => this.getInventory(result.set_num)} color="primary">Edit</Button> */}
                            </FormGroup>
                            <p></p>
                            <Button tag={Link} to="/buildItems" className="customBtnEdit" onClick={this.updateExistingItem}>Save Notes</Button>

                            <div className="divider" />
                            <Button onClick={
                                () => {
                                    this.setState(
                                        { saveDisabled: true },
                                        () => this.props.deleteItem(this.props.buildItem.id)
                                    )
                                }
                            }>Delete</Button>
                        </CardBody>
                    </div>
                </Card>
                <p></p>
            </>
        )
    }
}
export default ListItem