import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component{
  constructor(){
    super()
    this.state = {
      array: ['Banana', 'Brocoli', 'Bagel', 'Candy', 'Corn', 'Whiskey'],
      filterInput: ''
    }
  }

  handleChange(e){
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  render(){
    let display= this.state.array.filter(e =>{
      return e.includes(this.state.filterInput)
    }).map(e => {
      return <h1>{e}</h1>
    })
    return(
      <div>
        <input style={{verticalAlign: "baseline"}}  name='filterInput' onChange={e => this.handleChange(e)} />
        <h1 className='App'>{display}</h1>
      </div>
    )
  }
}
export default App;
