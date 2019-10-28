import React from 'react'

export default class Cell extends React.Component{
    constructor(props){
        super(props)
        this.state = { color: this.props.value }
    }

    handlerClick = ()=>{
        this.setState({ color: '#333' })
    }
    render() {
        return (
            <div className="cell" 
            style = {{backgroundColor: this.state.color}} 
            onClick={this.handlerClick}>
                
            </div>
        )
    }
}