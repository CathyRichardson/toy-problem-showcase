import React, { Component } from 'react';

class Palindrome extends Component {
    constructor(props) {
        super(props)

        this.state = {
            userInput: '',
            palindrome: '',
        }
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleButtonClick = this.handleButtonClick.bind(this);
    }

    handleInputChange(event) {
        this.setState({ userInput: event.target.value })
    }

    handleButtonClick() {
        let input = this.state.userInput;
        let reverseArray = [...input].reverse();
        let reverseInput = reverseArray.join("");
        console.log("input:", input, "reverse:", reverseInput)
        if (input === reverseInput) {
            this.setState({ palindrome: "true" })
        } else {
            this.setState({ palindrome: "false" })
        }
    }

    render() {
        return (
            <div className="puzzleBox filterStringPB">
                <h4>Palindrome</h4>
                <input className="inputLine" onChange={this.handleInputChange} />
                <button className="confirmationButton" onClick={this.handleButtonClick}>Check</button>
                <span className="resultsBox"> Palindrome: {this.state.palindrome}</span>
            </div>
        )
    }
}

export default Palindrome;
