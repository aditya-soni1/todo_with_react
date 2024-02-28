import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import TodoListItem from './TodoListItem';

var count = 1

function App() 
{
  //to handle action in js
  const [editingFlag,seteditingFlag] = useState(-1)
  const [selectedFilter,setselectedFilter] = useState("Incompleted")
  var [todo, setTodo] = useState([
    {
    id:count++,
    title:"todo1",
    completed:false
    },
    {
      id:count++,
    title:"todo2",
    completed:false
    },
    {
    id:count++,
    title:"todo3",
    completed:true
    }

  ])  //using use state hooks of react
  const addTodo=()=>
  {
    console.log("add todo")
    const todoText = document.getElementById("todoInput").value
    let todoObject = {
                         id:count++, //careating an object 
                         title:todoText,
                         completed:false
                      }
    console.log("todoText: "+todoText)
    todo.push(todoObject)
    setTodo([...todo]) //spred operator to open or expand the array
    //document.getElementById("todoInput").value =""
    
  }
  
  console.log("length of todo :"+todo.length)

  const deleteTodo=(id)=>
  {
    todo = todo.filter(tempTodo=>
      {
         if(id===tempTodo.id)
         {
          return false
         }
         else
         {
           return true
         }
      })
      setTodo([...todo])
  }
  const checkedChange=(id)=>
  {
    console.log("id:",id)
    todo.map(todoTemp=>
      {
        if(id===todoTemp.id)
        {
            todoTemp.completed = !todoTemp.completed
        }
        return todoTemp
      })
      setTodo([...todo])
  }
  const editTodo=(id)=>
  {
    console.log(" editTodo")
    seteditingFlag(id)
  }
  const saveEditedTodo=(id)=>
  {
    console.log("saveEditedTodo")
    let updateTodoText = document.getElementById("editingTodo").value
    todo = todo.map(tempTodo=>
      {
        if(tempTodo.id===id)
        {
          tempTodo.title = updateTodoText
        }
        return tempTodo
      })
      setTodo([...todo])
      seteditingFlag(-1)
  }
const handelFilter =(filterType)=>
{
  console.log("filter clicked",filterType)
  switch(filterType)
  {
    case "Incomplete" :
      console.log("Incomplete executed")
      setselectedFilter("Incomplete")
       break
    case "Completed" :
      console.log("completed executed")
      setselectedFilter("Completed")
       break
    case "All" :
      console.log("all executed")
      setselectedFilter("All")
       break
      default :
  }

}


//to show in frontend
  return (
    <div id='praentDiv'>
      <h1 className='header'>Todo App</h1>
      <div>
        <label onClick={()=>(handelFilter)("Incomplete")}>Incomplete | </label>
        <label onClick={()=>(handelFilter)("Completed")}>Completed | </label>
        <label onClick={()=>(handelFilter)("All")}>All</label>
      </div>
      <input id="todoInput" type="text" placeholder='add todo...'/>
      <button onClick={addTodo}>add</button> <br/>
      {
      todo.map(tempTodo =>
        {
          switch (selectedFilter)
          {
            case "Incomplete" :
              if(!tempTodo.completed)
              {
                
                 return <TodoListItem
                tempTodo = {tempTodo}
                checkedChange = {checkedChange}
                editingFlag = {editingFlag}
                saveEditedTodo = {saveEditedTodo}
                deleteTodo = {deleteTodo}
                editTodo = {editTodo}
                 />
              }
            break
            case "Completed" :
              if(tempTodo.completed)
              {
                
                    return <TodoListItem
                    tempTodo = {tempTodo}
                    checkedChange = {checkedChange}
                    editingFlag = {editingFlag}
                    saveEditedTodo = {saveEditedTodo}
                    deleteTodo = {deleteTodo}
                    editTodo = {editTodo}
                    />
              }
            break
          case "All" :
                   
                return <TodoListItem
                tempTodo = {tempTodo}
                checkedChange = {checkedChange}
                editingFlag = {editingFlag}
                saveEditedTodo = {saveEditedTodo}
                deleteTodo = {deleteTodo}
                editTodo = {editTodo}
                />
          break
          default :
          }
        })
       }
    </div>
  );
}
export default App;
