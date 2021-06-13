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
        // if ([...input].forEach() === [...input].reverse()) {
        //     this.setState({palindrome: true})
        // }
        // this.setState({palindrome: false})

        // if( for (let i = input.length - 1; i>= 0; i--) === for (let i = 0; i < input.length; i++) ) {
        //     this.setState({palindrome: true})
        // }  
        // this.setState({palindrome: false})
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
