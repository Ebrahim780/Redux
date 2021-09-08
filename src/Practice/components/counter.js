import React, { Component } from 'react';

class Counter extends Component {

    render() { 
        const {value, increment, decrement} = this.props;
        return(
            <div>
                <h2>
                    Number: {value}
                </h2>
                <button onClick={increment}>Increase</button>
                <button onClick={decrement}>Decrease</button>
            </div>
        )
    }
}

export default Counter;