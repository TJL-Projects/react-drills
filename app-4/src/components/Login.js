import React, {Component} from 'react'

class Login extends Component{
    constructor(){
        super()
        this.state = {
            userInput: '',
            passInput: ''
        }

        this.buttonClick = this.buttonClick.bind(this)
    }

    userChange(value){
        this.setState({
            userInput: value
        })
    }

    passChange(value){
        this.setState({
            passInput: value
        })
    }

    buttonClick(){
        const {userInput, passInput} = this.state
        alert(`Username: ${userInput}  Password: ${passInput}`)
    }

    render(){
        return(
            <div>
                <input onChange={ e => this.userChange(e.target.value)}/>
                <input onChange={ e => this.passChange(e.target.value)}/>
                <button onClick={this.buttonClick}>Login</button>
            </div>
        )
    }
    
}

export default Login