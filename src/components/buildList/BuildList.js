import React, { Component } from 'react';
import BuildItem from "../buildList/BuildItem";
import ApiManager from "../../modules/ApiManager"
import { userInfo } from 'os';

class BuildList extends Component {

    state = {
        buildItems: []
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

    componentDidMount() {
        const newState = {};
        ApiManager.getAllItems()
            .then(items => {
                console.log("componentDidMount items", items);
                newState.buildItems = items
            })
            .then(() => this.setState(newState))
    }

    render() {
        return (

            // <section className="buildList">
            //     <h2>Build List</h2>
            //     {
            //         this.state.buildItems.map(buildItem =>
            //             <div key={buildItem.id}>
            //                 {buildItem.name}
            //                 {buildItem.}
            //             </div>)
            //     }
            // </section>
            // <h2>hello</h2>
        )
    }
}

export default BuildList