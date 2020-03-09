
import React, { Component } from 'react'

export default class Todo extends Component {
  state={
    NewTask:"",
    list:[]
  }

  //grabbing input value
  
  handelInput=(e)=>{
  
    this.setState({
     NewTask:e.target.value
    })
  }
//Adding Items


  AddTexte=(e)=> {
    e.preventDefault()
    
      this.setState({
        list : [...this.state.list,{todo :this.state.NewTask,id:Math.random(), isComplete :false}],
        NewTask:"",
            })      
          
}
// ClearItems

clearCompleted = (index) => {
  
   this.setState({
     list : [...this.state.list.filter((el,i)=>i!==index)]
   })
}

completeToDo=(id)=>{
  this.setState({
    list:this.state.list.map((el,index)=>
   index===id ?{...el,isComplete:!el.isComplete} :el)
  })
}

  
  render() {
    return (
      <div className="todoListMain">
        <div className="header">
          <form className="colorCss">
            <input placeholder="Enter new task" value={this.state.NewTask} onChange={this.handelInput} />
            <button type="submit" onClick={this.AddTexte}> Add </button>
          </form>
        </div>
        <ul >
          {this.state.list.map((el,i)=>
          <div key={i}>
        <li style={{textDecoration: el.isComplete ? "line-through":"none"}}>{el.todo}</li>
        < button onClick= {()=>this.clearCompleted(i)}>clear</button>
        <button onClick={()=>this.completeToDo(i)}> done</button>
        
        </div>
        
          )} 
          
        </ul>
        
      </div>
    )
  }
}
