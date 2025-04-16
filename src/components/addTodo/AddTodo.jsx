import { useState } from "react"

export default function AddTodo({cb}) {
    const [inputValue , setInputValue] = useState('')

    return (
        <>
            <input type="text" onChange={(e)=>setInputValue(e.target.value)} value={inputValue} placeholder="enter todo name..."></input>
            <button onClick={()=>{
                if (inputValue.length !== 0) {
                    cb(inputValue)
                    setInputValue('')
                } 
            }}>Save</button>
        </>
    )
}