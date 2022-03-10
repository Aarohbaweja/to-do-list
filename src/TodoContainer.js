import React,{Component} from 'react'

export default class TodoContainer extends Component{
    state={
       label:null,
       id:null
    };

    handleSubmit=(e)=>{
        e.preventDefault();
        this.props.addTask(this.state);
        this.setState({
            label:null,
            id:null
        });
        document.getElementById("inputtask").value='';

    }
    handleChange=(e)=>{
        this.setState({
            label:e.target.value
        });
    };

render(){
    return(
        <form onSubmit={this.handleSubmit}>
            <input id="inputtask" type="text" className="validate" placeholder="Enter Tasks to be done" onChange={this.handleChange}></input>
            
            <button className="btn waves-effect waves-light" onClick={this.handleSubmit}>Add Task</button>
        </form>
    );
}

}