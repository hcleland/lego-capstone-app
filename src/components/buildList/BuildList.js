import React, { Component } from 'react';
import ApiManager from "../../modules/ApiManager"
import { Link } from 'react-router-dom';
import "./BuildList.css";
import ListItem from "./ListItem";

class BuildList extends Component {

    componentDidMount() {
        this.props.getBuildItems()
    }

    render() {

        return (
            <div>
                <h1>{this.props.currentUser.firstLastName}'s Build List</h1>
                <div className="buildList">
                    < section >
                        {
                            this.props.buildItems.map((buildItem) => {
                                return <ListItem key={buildItem.id} buildItem={buildItem} {...this.props} />
                            })
                        }
                    </section >
                </div>
            </div>
        )
    }
}
export default BuildList