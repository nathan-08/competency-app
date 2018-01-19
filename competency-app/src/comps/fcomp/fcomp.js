import React, { Component } from 'react';
import './fcomp.css'

export default class Fcomp extends Component {
    constructor(props){
        super(props)
        // 36C
        this.state={
            input: '',
            arr: []
        }

    }
    handleInput=(e)=>{
        // 36D  
        this.setState({input : e.target.value})
    }
    handleSubmit=(e)=>{
        e.preventDefault();
        this.setState({arr: [...this.state.arr, this.state.input], input: ''})
    }
    // 36 F
    render(){
        return(
            <div className='Fcomp'>
                <h3>F u n c t i o n a l  C o m p o n e n t </h3>

                <p>the secret number is: {this.props.secretNumber}</p>
                <form  onSubmit={this.handleSubmit}>
                <input  value={this.state.input} onChange={this.handleInput} placeholder="todo list"/>
                </form>
                <p>your list: {this.state.arr.map((item, index)=>(<p key={index}>{item}</p>))} </p>
                
            </div>
            
        )
    }
}