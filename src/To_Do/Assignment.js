import React from "react";

export default class Assignment extends React.Component{
    constructor(){
        super();
        this.state={
            taskArr:[],
            taskInput:"",
            taskcomplete:[]
        }
    }

    handleinput=(event)=>{
        this.setState({
            taskInput:event.target.value
        })
    }  
    handlepush =()=>{
        var temp=this.state.taskArr
        temp.push(this.state.taskInput)
        this.setState({
            taskArr:temp,
            taskInput:""
        })
        
    }

    handlecomplete =(index)=>{
        var temp=this.state.taskArr
        var temp2=this.state.taskcomplete
        var temp3=temp.splice(index,1)
        temp2.push(temp3)
        this.setState({
            taskArr:temp,
            taskcomplete:temp2
        })
    }
    render(){
        return(
            <div>
                <input type="text" onChange={this.handleinput} value={this.state.taskInput}/>
                {/* <h1>{this.state.taskInput}</h1> */}
                <button onClick={this.handlepush} disabled={this.state.taskInput===""?true:false}>Add Task</button>

                <h2>Tasks to do</h2>
                <div>
                    <ol>
                        {this.state.taskArr.map( (item,index)=>{
                            return( 
                                <li>{item}
                                 <button onClick={()=>{
                                     this.handlecomplete(index)
                                 }}>Completed</button>
                                 </li>                            
                            )
                        })}
                    </ol>
                </div>

                <h2>Completed Task</h2>
                <ol>
                    {this.state.taskcomplete.map( (list)=>{
                        return(
                            <li>{list}</li>
                        )
                    })}
                </ol>

            </div>
        )
    }
}
