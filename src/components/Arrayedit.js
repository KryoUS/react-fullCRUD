import React, { Component } from 'react';

export default class Arrayedit extends Component {
    constructor() {
        super()

        this.state = {
            oldVal: '',
            newVal: ''
        }
    }

    updateOldInput = (oldVal) => {
        this.setState( {oldVal} )
    }

    updateNewInput = (newVal) => {
        this.setState( {newVal} )
    }

    updateArray = (oldVal, newVal) => {
        this.props.editArray(oldVal, newVal)
    }

    render() {
        return (
            <div className="editContainer">
                <input className="inputBar" placeholder="Replace which word?" value={this.state.oldVal} onChange={(e) => this.updateOldInput(e.target.value)} />
                <input className="inputBar" placeholder="New word!" value={this.state.newVal} onChange={(e) => this.updateNewInput(e.target.value)} />
                <button className="inputButton" onClick={ () => this.updateArray(this.state.oldVal, this.state.newVal) }>Change</button>
            </div>
        )
    }
}