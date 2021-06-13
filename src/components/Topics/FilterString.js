import React, { Component } from 'react';

class FilterString extends Component {
    constructor(props) {
        super(props)

        this.state = {
            unFilteredArray: ['James', 'Jessica', 'Melody', 'Tyler', 'Blake', 'Jennifer', 'Mark', 'Maddy'],
            userInput: '',
            filteredArray: [],
        }
        this.handleInputChange = this.handleInputChange.bind(this)
        this.handleButtonClick = this.handleButtonClick.bind(this)
    }

    handleInputChange(event) {
        this.setState({ userInput: event.target.value });
    }

    handleButtonClick() {
        let input = this.state.userInput;
        let unFilteredArray = this.state.unFilteredArray;
        let filteredArray = unFilteredArray.filter(e => e.includes(input));
        this.setState({filteredArray: filteredArray})
    }

    render() {
        return (
            <div className="puzzleBox filterStringPB">
                <h4>Filter String</h4>
                <span className="puzzleText"> Names: {JSON.stringify(this.state.unFilteredArray, null, 10)} </span>
                <input className="inputLine" onChange={this.handleInputChange} />
                <button className="confirmationButton" onClick={this.handleButtonClick}>Filter</button>
                <span className="resultsBox filterStringRB">Filtered Names:  {JSON.stringify(this.state.filteredArray, null, 10)} </span>
            </div>
        )
    }
}

export default FilterString;
