import React, { Component } from 'react';
import "./searchForm.css";
import "./searchResults.css";
import BuildItem from "../buildList/BuildItem";

class SearchResults extends Component {
    state = {
        mocName: "",
        mocNumber: "",
        disabled: false
    };

    addItem = evt => {
        evt.preventDefault()
        const newItem = {
            id: this.props.match.params.buildItemId,
            mocName: this.state.mocName,
            mocNumber: this.state.mocNumber
        };

        this.props.addListItem(newItem)
    }

    // searchResult = this.props.searchResults.map((result) => {

    //     return <BuildItem key={result.set_num} result={result} {...this.props} />
    // })


    render() {
        return (
            <div>
                {
                    this.props.searchResults.map((result) => {
                        return <BuildItem key={result.set_num} result={result} {...this.props} />
                    })
                }

            </div>
        )
    }
}

export default SearchResults;