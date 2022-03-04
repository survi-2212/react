import React from "react";

class ArithmeticOperation extends React.Component{
    constructor(){
        super();
        this.state={
            num1:0,
            num2:0,
            add:0,
            sub:0,
            mul:0,
            div:0
        }
    }

    handlenum1=(event)=>{
        this.setState({
            num1: event.target.value
        })
    }
    handlenum2=(event)=>{
        this.setState({
            num2: event.target.value
        })
    }
    handleAdd=()=>{
        this.setState({
            add:parseInt(this.state.num1)+parseInt(this.state.num2)
        })
    }
    handleSub=()=>{
        this.setState({
            sub:parseInt(this.state.num1)-parseInt(this.state.num2)
        })
    }
    handleMul=()=>{
        this.setState({
            mul:parseInt(this.state.num1)*parseInt(this.state.num2)
        })
    }
    handleDiv=()=>{
        this.setState({
            div:parseInt(this.state.num1)/parseInt(this.state.num2)
        })
    }
    render(){
        return(
            <div>
                <input type="text" placeholder="Enter number" onChange={this.handlenum1} /><br /><br />
                <input type="text" placeholder="Enter number" onChange={this.handlenum2} /><br /><br />
                <button onClick={this.handleAdd}>ADD</button>
                <span>{this.state.add}</span>
                <br /><br />

                <button onClick={this.handleSub}>SUB</button>
                <span>{this.state.sub}</span>
                <br /><br />

                <button onClick={this.handleMul}>MUL</button>
                <span>{this.state.mul}</span>
                <br /><br />

                <button onClick={this.handleDiv}>DIV</button>
                <span>{this.state.div}</span>
                <br /><br />
            </div>
        )
    }
}
export default ArithmeticOperation