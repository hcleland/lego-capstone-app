import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class BuildItem extends Component {

    state = {
        saveDisabled: false
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
            // <article>
            //     <h3>{this.props.animal.name}</h3>
            //     <button onClick={this.handleClick} disabled={this.state.saveDisabled}>Delete</button>
            //     <Link to={`/animals/${this.props.animal.id}`}>Details</Link>
            //     <button
            //         type="button"
            //         className="btn btn-success"
            //         onClick={() => {
            //             this.props.history.push(`/animals/${this.props.animal.id}/edit`);
            //         }}>Edit</button>
            // </article>
            <div>{this.buildItem.mocName}</div>
        )
    }
}

export default BuildItem;