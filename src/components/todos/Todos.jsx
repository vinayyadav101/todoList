import { useState } from "react";
import AddTodo from "../addTodo/AddTodo";
import TodoList from "../todoList/TodoList";

export default function Todos() {
    const [todos , setTodos] = useState([
        {id:1 , name:"todo 1"},
        {id:2 , name:"todo 2"},
        {id:3 , name:"todo 3"}
    ])

    
    return(
        <div className="todoContainer">
            <div className="addtodo">
                <AddTodo cb={(todo)=> {
                    todo && 
                    setTodos((el)=>([
                        ...el  ,
                        {id:todos.length + 1 , name:todo}
                    ]))
                }} />
            </div>
            <div className="todolist">
                {todos.map((el)=> <TodoList key={el.id} id={el.id} todo={el.name} 
                edit={(id , value)=>{
                    
                    const updatedTodo = todos.map((el)=>{           
                        if(el.id === id) {
                           return {...el , name:value}
                        }
                        return el
                    })
                        setTodos(updatedTodo)
                    
                }}/>)}
            </div>
        </div>
    )
}