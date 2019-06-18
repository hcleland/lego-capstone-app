import React, { Component } from 'react';
import "./BuildList.css"

class ItemForm extends Component {

    state = {
        mocName: "",
        mocNumber: "",
        notes: ""
        // checkbox: ""
    };

    handleFieldChange = evt => {
        const stateToChange = {};
        stateToChange[evt.target.id] = evt.target.value;
        this.setState(stateToChange);
    };

    makeNewItem = evt => {
        const buildItem = {
            name: this.state.mocName,
            mocNumber: this.state.mocNumber,
            notes: this.state.notes,
            userId: parseInt(this.state.UserId)
        };

        this.props.addListItem(buildItem)
            .then(() => this.props.history.push("/animals"));
    };

    render() {
        return (
            <React.Fragment>
                <form className="buildItemForm">
                    <div className="form-group">
                        <label htmlFor="mocName">MOC Name</label>
                        <input
                            type="text"
                            required
                            className="form-control"
                            onChange={this.handleFieldChange}
                            id="mocName"
                            placeholder="MOC Name"
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="mocNumber">MOC Number</label>
                        <input
                            type="text"
                            required
                            className="form-control"
                            onChange={this.handleFieldChange}
                            id="mocNumber"
                            placeholder="MOC Number"
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="notes">Notes</label>
                        <input
                            type="textarea"
                            required
                            className="form-control"
                            onChange={this.handleFieldChange}
                            id="notes"
                            placeholder=""
                        />
                    </div>
                    <button type="button" onClick={this.makeNewItem} className="btn btn-primary">Submit</button>
                </form>
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


export default ItemForm;