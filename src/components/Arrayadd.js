import React, { Component } from 'react';

export default class Arrayadd extends Component {
    constructor() {
        super()

        this.state = {
            val: ''
        }
    }

    updateInput = (val) => {
        this.setState( {val} )
    }

    addWord = () => {
        this.props.addArray(this.state.val)
        this.setState({val: ''})
    }

    render() {
        return (
            <div className="removeContainer">
                <input className="inputBar" placeholder="Add a word!" value={this.state.val} onChange={(e) => this.updateInput(e.target.value)} />
                <button className="inputButton" onClick={ this.addWord }>Add</button>
            </div>
        )
    }
}