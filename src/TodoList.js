import React from 'react';
import './todolist.css';
//import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"


function TodoList(props)
{
    const todo=props.todo;
    const listtodo=todo.map((item)=>{

//here map acts like a for loop function
        return(
            <div className="log" key={item.key}>
                <p>{item.text}
                
                <span onClick={() =>props.deleteTodo(item.key)}>D</span>
                </p>
            </div>
        )
    })
     return (
     <div>
         {listtodo}
     </div>)

}

export default TodoList;


//npm i --save @fortawesome/fontawesome-svg-core
//npm i --save @fortawesome/free-solid-svg-icons
//npm i --save @fortawesome/react-fontawesome

