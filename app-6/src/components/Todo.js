import React, {Component} from 'react'

class Todo extends Component{
    constructor(){
        super()
        this.state = {

        }
    }

    render(){

        return(
            <div>{this.props.task}</div>
        )
    }
}

export default Todo