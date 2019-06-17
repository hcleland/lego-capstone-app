import React, { Component } from 'react';
import { FormGroup, Label, Input, Card, CardBody, CardTitle, CardSubtitle, CardText, Button, CardImg } from 'reactstrap';
import { Link } from "react-router-dom";
import "./BuildList.css"

class BuildList extends Component {
    render() {
        return (
            <React.Fragment>
                <div>
                    <h1 id="userHeader">User's Build List</h1>
                    <section className="buildList">
                        {this.props.buildItems.map(buildItem =>
                            <Card>
                                <div key={buildItem.id} className="buildItem_card">
                                    {/* <CardImg top width="100%" src={buildItem.moc_img_url} alt="Card image cap" /> */}
                                    <CardBody>
                                        <CardTitle><h3>{buildItem.mocName}</h3></CardTitle>
                                        <CardSubtitle>{buildItem.mocNumber}</CardSubtitle>
                                        <CardText>
                                            <p><a href={buildItem.mocURL} target="_blank">Instructions: </a></p>
                                            {/* <p>Number of bricks used: {result.num_parts}</p> */}
                                            <Label for="exampleText">Notes:</Label>
                                            <Input type="textarea" name="text" id="exampleText" />
                                        </CardText>
                                        <FormGroup check>
                                            <Label check>
                                                <Input type="checkbox" id="checkbox2" />{' '}
                                                I Built This!
                                            </Label>
                                        </FormGroup>
                                        {/* <Button onClick={() => this.getInventory(result.set_num)} color="primary">Edit</Button> */}
                                        <p></p>
                                        <Button tag={Link} to="/buildList" className="customBtnEdit">Edit</Button>
                                        <div className="divider" />
                                        {/* <Button onClick={() => this.getInventory(result.set_num)} color="danger">Add to Build List</Button> */}
                                        <Button tag={Link} to="/buildList" className="customBtnDelete">Delete

                                        </Button>
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




//     <div>
//         <ul>
//             {/* <li>User Id</li>
//             <li>MOC Name</li>
//             <li>Instructions Link</li>
//             <li>Built Checkbox</li>
//             <li>Notes</li> */}
//             {/* <li>{this.props.buildItems}</li> */}
//         </ul>

//         <section>
//             {
//                 this.props.buildItems.map((buildItem) => {
//                     return <BuildItem key={buildItem.id} buildItem={buildItem} />
//                         <p></p>
//                 })
//             }
//         </section>
//         <FormGroup row>
//             <Col sm={{ size: 10 }}>
//                 <FormGroup check>
//                     <Label check>
//                         <Input type="checkbox" id="checkbox2" />{' '}
//                         I Built This!
//   </Label>
//                 </FormGroup>
//             </Col>
//         </FormGroup>
//         <FormGroup>
//             <Label for="exampleText">Notes:</Label>
//             <Input type="textarea" name="text" id="exampleText" />
//         </FormGroup>
//     </div>


export default BuildList;