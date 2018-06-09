import React, { Component } from 'react';
import arrayremovefn from './Arrayremovefn';

export default class Arrayremove extends Component {
    constructor() {
        super()

        this.state = {
            val: ''
        }
    }

    updateInput = (val) => {
        this.setState( {val} )
    }

    removeWord = () => {
        arrayremovefn(this.state.val).then(x => {
            this.props.removeArrayState(x)
            this.setState({ val: '' })
        })
    }

    render() {
        return (
            <div className="removeContainer">
                <input className="inputBar" placeholder="Remove a word!" value={this.state.val} onChange={(e) => this.updateInput(e.target.value)} />
                <button className="inputButton" onClick={ this.removeWord }>Remove</button>
            </div>
        )
    }
}