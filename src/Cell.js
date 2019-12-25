import React, { Component} from 'react';
export default class Cell extends React.Component{

    constructor(props){
        super(props)
        this.state = {
            color: this.props.value
        }
    };
    //need a method to alter state
    clickListener = () => {
        this.setState({
            color: '#333'
        })
    };

    render() {
        return (
            <div 
            className="cell" 
            style={{backgroundColor: this.state.color}} 
            onClick={this.clickListener}>

            </div>
        )
    }

}