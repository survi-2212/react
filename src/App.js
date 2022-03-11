import React from "react";
import ArithmeticOperation from "./ArithmeticOperation/ArithmeticOperation"; 
import Assignment from "./To_Do/Assignment";

class App extends React.Component{
  render(){
    return(
      <div>
        {/* <ArithmeticOperation/> */}
        <Assignment/>
      </div>
    )
  }
}
export default App
