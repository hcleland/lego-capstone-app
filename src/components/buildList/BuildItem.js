import React, { Component } from 'react';

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
        console.log("is this working")
        return (
            <div>
                <h3>{this.props.buildItem.mocName}</h3>
            </div>
        )
    }
}

export default BuildItem;