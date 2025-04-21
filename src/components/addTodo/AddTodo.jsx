import { useContext, useState } from "react"
import { reduserContext } from "../../contexts/reduserContext"

export default function AddTodo() {
    const {dispatch} = useContext(reduserContext)
    const [inputValue, setInputValue] = useState('')
    
    function updateTodo(){
        dispatch({
            type:'on_addtodo',
            inputValue
        })
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