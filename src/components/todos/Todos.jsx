import { useContext } from "react"
import AddTodo from "../addTodo/AddTodo"
import TodoList from '../todoList/TodoList'
import { todoContext } from "../../contexts/todoContext"
import { reduserContext } from "../../contexts/reduserContext"

export function Todos() {
    const {todos} = useContext(todoContext)
    const {dispatch} = useContext(reduserContext)

    function updateCheck(id){
        dispatch({
            type:'on_Cheacked',
            id
        })
    }
    function edit(id , value){
        dispatch({
            type:'on_edit',
            id,
            value
        })
    }
    function deleteTodo(id){
        dispatch({
            type:"on_delete",
            id
        })
    }

    return(
        <div className="todoContainer">
            <div className="addtodo">
                <AddTodo />
            </div>
            <div className="todolist">
                {
                    todos.map((el)=> <TodoList
                    key={el.id} 
                    todo={el}
                    updateCheck = {updateCheck}
                    edit={edit}
                    deleteTodo={deleteTodo}
                    />)
                }
            </div>
        </div>
 
    )
}