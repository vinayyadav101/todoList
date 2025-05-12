import {  useState } from "react"
import './todolist.css'

export default function TodoList({ todo ,updateCheck , edit , deleteTodo}) {

    const [input , setInput] = useState('')
    const [hiden , setHiden] =useState(false)


    
    return (
        <div className="todo" id={todo.id}>
           <input type="checkbox" name=""  id="" checked={!!todo.checked} onChange={()=>updateCheck(todo.id)}/>
           {hiden ? <input type='text' onChange={(e)=>setInput(e.target.value)} value={input}/> : <h1>{todo.name}</h1>}
            <button onClick={()=>{
                setHiden(!hiden)
                if (input.length !== 0) {
                edit({id:todo.id ,input})
                }
            }}>Edit</button>
            <button onClick={()=> deleteTodo(todo.id)}>Delete</button>
        </div>
    )
}