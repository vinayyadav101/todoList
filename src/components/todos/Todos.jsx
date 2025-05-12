import { useSelector } from "react-redux"
import AddTodo from "../addTodo/AddTodo"
import TodoList from '../todoList/TodoList'



export function Todos({addTodo,deleteTodo,editTodo,checkTodo}) {


    // useselector to use access of entiyer state of store amd also avilable for rerandering.
        const todos = useSelector((state)=>state.todo.todoList)
console.log(todos);


    return(
        <div className="todoContainer">
            <div className="addtodo">
                <AddTodo add_todo ={addTodo}/>
            </div>
            <div className="todolist">
                {
                    todos.map((el)=> <TodoList
                    key={el.id} 
                    todo={el}
                    updateCheck = {checkTodo}
                    edit={editTodo}
                    deleteTodo={deleteTodo}
                    />)
                }
            </div>
        </div>
    
    )
}