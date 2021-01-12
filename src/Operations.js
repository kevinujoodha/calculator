import React from 'react';

class Operations extends React.Component {
    render() {
        return (
            <>
                <div>
                    <button onClick={() => this.props.onClick('+')}>+</button>
                    <button onClick={() => this.props.onClick('-')}>-</button>
                    <button onClick={() => this.props.onClick('*')}>x</button>
                    <button onClick={() => this.props.onClick('/')}>%</button>
                    <button onClick={() => this.props.onClick('=')}>=</button>
                </div>
            </>
        );
    }
}

export default Operations;