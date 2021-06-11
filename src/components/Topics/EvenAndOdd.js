import React, { Component } from 'react';

class EvenAndOdd extends Component {
    constructor(props) {
        super(props)

        this.state = {
            evenArray: [],
            oddArray: [],
            userInput: "",
        }
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleButtonClick = this.handleButtonClick.bind(this);
    }

    handleInputChange(event) {
        this.setState({ userInput: event.target.value });
    }

    handleButtonClick() {
        let inputArray = this.state.userInput.split(",");
        let evenNums = [];
        let oddNums = [];
        inputArray.forEach(e => {
            let num = parseInt(e, 10);
            if (num % 2 === 0) {
                evenNums.push(num)
            } else {
                oddNums.push(num)
            }
        });
        this.setState({ evenArray: evenNums, oddArray: oddNums });
    }

    integerArrayToString(arr) {
        let str = arr.reduce((acc, element, i) => {
            if (i !== 0) {
                acc += ", ";
            }
            acc += element
            return acc;
        }, '');
        return str;
    }

    render() {
        return (
            <div className="puzzleBox evenAndOddPB">
                <h4>Evens and Odds</h4>
                <input className="inputLine" onChange={this.handleInputChange} />
                <button className="confirmationButton" onClick={this.handleButtonClick}>Split</button>
                <span className="resultsBox"> Evens: [{this.integerArrayToString(this.state.evenArray)}] </span>
                <span className="resultsBox"> Odds: [{this.integerArrayToString(this.state.oddArray)}] </span>
            </div>
        )
    }
}

export default EvenAndOdd;