import React from 'react';

import Screen from './Screen/Screen.js'
import Keypad from './Keypad/Keypad.js';

class Calculator extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            equation: '',
            result: 0,
        };
    }

    onButtonPress = event => {
        let equation = this.state.equation;
        const pressedButton = event.target.innerHTML;

        if (pressedButton === 'C') return this.clear(); // clear screen
        else
            if ((pressedButton >= '0' && pressedButton <= '9') || pressedButton === '.') equation += pressedButton; // add button value to equation
            else
                if (['+', '-', '*', '/', '%'].indexOf(pressedButton) !== -1) equation += ' ' + pressedButton + ' '; // add operations to equation
                else if (pressedButton === '=') { // equal button to evaluate the equation
                    try { // check if equation is valid via try/catch block
                        const evalResult = eval(equation); // eval is used here for simplicity, do not use in production code.
                        const result = Number.isInteger(evalResult) ? evalResult : evalResult.toFixed(2);
                        this.setState({ result });
                    } catch (error) {
                        const result = "Invalid";
                        this.setState({ result });
                    }
                }
                else {
                    equation = equation.trim();
                    equation = equation.substr(0, equation.length - 1);
                }
        this.setState({ equation: equation });
    }

    clear() {
        this.setState({ equation: '', result: 0 });
    }

    render() {
        return (
            <main className="calculator">
                <Screen equation={this.state.equation} result={this.state.result} />
                <Keypad onButtonPress={this.onButtonPress}/>
            </main>
        );
    }
}

export default Calculator;