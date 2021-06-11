import React, { Component } from 'react';

class FilterObject extends Component {
    constructor(props) {
        super(props)

        this.state = {
            unFilteredArray: [
                {
                  name: 'Jimmy Joe',
                  title: 'Hack0r',
                  age: 12,
                },
                {
                  name: 'Jeremy Schrader',
                  age: 24,
                  hairColor: 'brown'
                },
                {
                  name: 'Carly Armstrong',
                  title: 'CEO',
                }
              ],
            userInput: '',
            filteredArray: [],
        }

        this.handleInput = this.handleInput.bind(this);
        this.handleButtonClick = this.handleButtonClick.bind(this);
    }

    handleInput(event){
        this.setState({ userInput: event.target.value });
    }

    handleButtonClick(){

    }

    render() {
        return (
            <div className="puzzleBox filterObjectPB">
                <h4>Filter Object</h4>
                <span className="puzzleText"> Original: { JSON.stringify(this.state.unFilteredArray, null, 10) } </span>
                <input  className="inputLine" onChange={this.handleInput}/>
                <button className="confirmationButton" onClick={this.handleButtonClick}>Filter</button>
                <span className="resultsBox filterObjectRB">Filtered: { JSON.stringify(this.state.filteredArray, null, 10) }</span>
            </div>
        )
    }
}

export default FilterObject;
