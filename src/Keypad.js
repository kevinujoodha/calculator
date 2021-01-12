import React from 'react';

class Keypad extends React.Component {
    render() {
        return (
            <>
                <div>
                    <button onClick={() => this.props.onClick(7)}>7</button>
                    <button onClick={() => this.props.onClick(8)}>8</button>
                    <button onClick={() => this.props.onClick(9)}>9</button>
                </div>

                <div>
                    <button onClick={() => this.props.onClick(4)}>4</button>
                    <button onClick={() => this.props.onClick(5)}>5</button>
                    <button onClick={() => this.props.onClick(6)}>6</button>
                </div>

                <div>
                    <button onClick={() => this.props.onClick(1)}>1</button>
                    <button onClick={() => this.props.onClick(2)}>2</button>
                    <button onClick={() => this.props.onClick(3)}>3</button>
                </div>

                <button onClick={() => this.props.onClick(0)}>0</button>
            </>
        );
    }
}

export default Keypad;