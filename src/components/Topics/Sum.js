import React, { Component } from 'react';

class Sum extends Component {
    constructor(props) {
        super(props)

        this.state = {
            number1: 0,
            number2: 0,
            sum: null,
        }
        this.handleInput1 = this.handleInput1.bind(this);
        this.handleInput2 = this.handleInput2.bind(this);
        this.handleButtonClick = this.handleButtonClick.bind(this);
    }

    handleInput1(event) {
        let num1 = parseInt(event.target.value)
        this.setState({ number1: num1 })
    }

    handleInput2(event) {
        let num2 = parseInt(event.target.value)
        this.setState({ number2: num2 })
    }

    handleButtonClick() {
        let num1 = this.state.number1;
        let num2 = this.state.number2;
        let sum = num1 + num2;
        this.setState({ sum: sum })
    }

    render() {
        return (
            <div className="puzzleBox sumPB">
                <h4>Sum</h4>
                <input className="inputLine" onChange={this.handleInput1} />
                <input className="inputLine" onChange={this.handleInput2} />
                <button className="confirmationButton" onClick={this.handleButtonClick}>Add</button>
                <span className="resultsBox">Sum: {this.state.sum}</span>
            </div>
        )
    }
}

export default Sum;
