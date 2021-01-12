import React from 'react';
import Screen from "./Screen";
import Keypad from "./Keypad";
import Operations from "./Operations";

class Calculator extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            operand1: null,
            operand2: null,
            operator: null,
            result: null
        };
    }

    render() {
        const message = this.state.result ? this.state.result : (this.state.operand1 + this.state.operator + this.state.operand2);
        return (
            <>
                <Screen text={message}/>
                <Keypad onClick={(number) => this.handleKeypadClick(number)}/>
                <Operations onClick={(operation) => this.handleOperationClick(operation)}/>
            </>
        );
    }

    handleKeypadClick(number) {
        if(this.state.result) {
            this.setState({result: number});
        } else {
            if (!this.state.operand1) {
                this.setState({operand1: number});
            } else {
                if (this.state.operator && !this.state.operand2) {
                    this.setState({operand2: number});
                }
            }
        }
    }

    handleOperationClick(operation) {
        if(operation === '=') {
            if (this.state.operand1 && this.state.operand2) {
                this.setState({result: eval(this.state.operand1 + this.state.operator + this.state.operand2)})
            }
        } else {
            if (this.state.operand1 && !this.state.operand2) {
                this.setState({operator: operation})
            }
        }
    }
}

export default Calculator;