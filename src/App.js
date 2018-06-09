import React, { Component } from 'react';
import logo from './logo.svg';
import axios from 'axios';
import './App.css';
import Arrayadd from './components/Arrayadd';
import Arrayremove from './components/Arrayremove';
import Arrayedit from './components/Arrayedit';

const expressAPI = `http://localhost:3031/api/stuff`

class App extends Component {
  constructor() {
    super();

    this.state = {
      frontArray: []
    }
  }

  componentDidMount = () => {
    axios.get(expressAPI).then(res => {
      this.setState({ frontArray: res.data })
    }).catch(error => {
      console.error(error)
    })
  }

  addArray = (data) => {
    axios.post(expressAPI, {val: data}).then(res => {
      this.setState({ frontArray: res.data })
    }).catch(error => {
      console.error(error)
    })
  }

  removeArrayState = (data) => {
    this.setState({ frontArray: data })
  }

  editArray = (oldVal, newVal) => {
    axios.put('http://localhost:3031/api/stuff/'+oldVal+'&'+newVal).then(res => {
      this.setState({ frontArray: res.data })
    }).catch(error => {
        console.error(error)
    })
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        { this.state.frontArray.map(x => (
          <h4 key={x.val}>{x.val}</h4>
        )) }
        <Arrayadd key={ this.state.frontArray.id } addArray={this.addArray} />
        <Arrayremove key={ this.state.frontArray.id } removeArrayState={this.removeArrayState}/>
        <Arrayedit key={ this.state.frontArray.id } editArray={ this.editArray } />
      </div>
    );
  }
}

export default App;