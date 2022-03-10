import React, {Component} from 'react';
import TodoUi from './TodoUI'
import TodoContainer from './TodoContainer'
import './App.css';
import Pagination from './Pagination'


class App extends Component {

  constructor()
  {
    super();
    this.state={
      todos:[
        { label:"Buy Milk",
        id:1
        },
        {label:"Learn Redux",
        id:2
        }
      ]
    };
  }
  addTask=(task)=>{
    task.id=Math.random();
    let temp=[...this.state.todos,task];
    this.setState({
      todos:temp
    });
  };

  deleteTask=(id)=>{
    let temp=this.state.todos.filter((task)=>{
      return task.id!==id
    })
   this.setState({
     todos:temp
   });
  };

  render(){
  return (
    <div className="App" >
          <div className="todos Container">
          <h1 className="center blue-text">Todo's</h1>
          <TodoUi todoList={this.state.todos} deleteTask={this.deleteTask} />
          </div>
          <br></br>
          <div className="addtask container">
          <TodoContainer addTask={this.addTask}/>
          </div>
    </div>
  );
  }
}

export default App;
