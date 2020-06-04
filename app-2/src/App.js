import React, { Component } from 'react';
import './App.css';

class App extends Component{
  constructor(){
    super()
    this.state = {
      array: ['cookies', 'milk', 'eggs', 'candy']
    }
  }

  render(){

    return(
      <div>

        {this.state.array.map( e => {
          return <h1 className='App'>{e}</h1>
        })}
      </div>
    )
  }
}

export default App;
