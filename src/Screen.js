import React from 'react';

class Screen extends React.Component {
    render() {
        return (
            <>
                <h1>{this.props.text}</h1>
            </>
        );
    }
}

export default Screen;