import React, { Component } from 'react';
import BuildItem from "./BuildItem";

class BuildList extends Component {
    render() {
        return (
            <React.Fragment>
                <div>
                    <h1>User's Build List</h1>
                    <ul>
                        {/* <li>User Id</li>
                        <li>MOC Name</li>
                        <li>Instructions Link</li>
                        <li>Built Checkbox</li>
                        <li>Notes</li> */}
                        {/* <li>{this.props.buildItems}</li> */}
                    </ul>
                    <section>
                        {
                            this.props.buildItems.map((buildItem) => {
                                return <BuildItem key={buildItem.id} buildItem={buildItem} />
                            })
                        }
                    </section>
                </div>
            </React.Fragment>
        )
    }
}

export default BuildList;