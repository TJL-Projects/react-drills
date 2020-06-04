import React, {Component} from 'react'

class Image extends Component {
    constructor(props){
        super(props)
        this.state ={

        }
    }

    render(){
        return(
            <div>
                <img src={this.props.url} alt='photo' />
            </div>
        )
    }
}

export default Image