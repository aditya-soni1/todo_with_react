import './TodoListItem.css';

const TodoListItem=(props)=>
{  
    return <div id="todoListItem" key={props.tempTodo.id}>
            {
            props.tempTodo.completed===true ?       // using turney operator ( condition ? if execurtion : else execution)
            <><input type='checkbox' onChange={()=>props.checkedChange(props.tempTodo.id)} checked/> <s>{props.tempTodo.title}</s></> :
            <><input type='checkbox' onChange={()=>props.checkedChange(props.tempTodo.id)}/>
            {
               props.editingFlag === props.tempTodo.id ?
              <>
               <input type='text' id='editingTodo' defaultValue={props.tempTodo.title}/>
               <button onClick={()=>props.deleteTodo(props.tempTodo.id)}>delete</button>
               <button onClick={()=>props.saveEditedTodo(props.tempTodo.id)}>save</button>
              </> :
              <>
              {props.tempTodo.title}
              <button onClick={()=>props.deleteTodo(props.tempTodo.id)}>delete</button>
              <button onClick={()=>props.editTodo(props.tempTodo.id)}>Edit</button>
              </>
            }
            </>
            } 
           
            </div>
}
export default TodoListItem;