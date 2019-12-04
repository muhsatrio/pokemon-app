import React, { Component } from 'react'
import {connect} from 'react-redux'
import {funcDecrement, funcIncrement} from '../redux/actions';

const mapStateToProps = (state) => {
    return {
        count: state.count
    }
};

class Counter extends Component {

    increment = () => {
        props.dispatch(funcDecrement);
    }

    decrement = () => {
        props.dispatch(funcIncrement);
    }

    render() {
        return (
            <div className="counter">
                <h2>Counter</h2>
                <div>
                    <button onClick={this.decrement}>-</button>
                        <span>{this.props.count}</span>
                    <button onClick={this.increment}>+</button>
                </div>
            </div>
        )
    }
}

export default connect(mapStateToProps)(Counter);
