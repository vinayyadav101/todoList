import { useState } from "react"

export default function AddTodo({add_todo}) {
    
        const [inputValue, setInputValue] = useState('')
    
    function updateTodo(){
        add_todo(inputValue)
        setInputValue('')
    }

    return (
        <>
            <input type="text" onChange={(e) => setInputValue(e.target.value)} value={inputValue} placeholder="enter todo name..."></input>
            <button
                onClick={updateTodo}>Save</button>
        </>
    )
}