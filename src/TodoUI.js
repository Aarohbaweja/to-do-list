import React from 'react'

function TodoUi (props)
{
const {todoList,deleteTask}=props;

const list=todoList.length ? (
    todoList.map(todo=>{
        return(
       <div className="todosClass container" key={todo.id}>
            <span onClick={()=>{deleteTask(todo.id)}}>{todo.label}</span>
        </div>
        )          
    }
    )
    ):(
        <span>You have no new content YAY!!</span>
    )

 
return(
    <div>
         {list}
         <h1>{props.children}</h1>
    </div>
   
);

}

export default TodoUi;