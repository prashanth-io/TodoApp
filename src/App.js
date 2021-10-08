import logo from './logo.svg';
import './App.css';
import React from 'react';
//import React from 'react';

import TodoList from './TodoList';
import {library} from "@fortawesome/fontawesome-svg-core";
import {faTrash} from "@fortawesome/free-solid-svg-icons";


library.add(faTrash);




class App extends React.Component{



  constructor(props){
    super(props);
    this.state={
      todo:[],
      currentTodo:{
        text:"",
        key:""
      }
    };

    this.handlechange=this.handlechange.bind(this);
    this.additem=this.additem.bind(this);
    this.deleteTodo=this.deleteTodo.bind(this);
  }

  handlechange(event){
       
      this.setState({
          currentTodo:{
            text:event.target.value,
            key:Math.floor(Math.random()*1000)
          }
      });
}


additem(event){
event.preventDefault();
  const newitem=this.state.currentTodo
  console.log(newitem);


  if(newitem.text !=="")
  {
    const newTodo=[...this.state.todo,newitem] //destructing the item and unpack the value from item ,unpack the values from newitem and store in this.state.todo 

    this.setState({
      todo:newTodo,
      currentTodo:{
        text:"",
        key:""
      }
    })
  }

}


deleteTodo(key)
{
  const filterTodo=this.state.todo.filter((item)=>item.key !=key);
  this.setState({
    todo:filterTodo
  });
}


  render(){

    

    return (
      <div className="App">
        <header>
        <h1 id="title">T0-do-App</h1>
        <form id="to-do" onSubmit={this.additem}>
          <input type="text" placeholder="enter text" onChange={this.handlechange} value={this.state.currentTodo.text}/>
          <button type="submit">ADD</button>
        </form>

        </header>
        <TodoList todo={this.state.todo} deleteTodo={this.deleteTodo}/>


      </div>
    )
  }

}



export default App;



//npm run build is used for optimization during the deplyoment of the website