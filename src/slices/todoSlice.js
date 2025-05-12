import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    todoList:[
  {id:1 , name:"todo 1" ,checked:false},
  {id:2 , name:"todo 2" ,checked:false},
  {id:3 , name:"todo 3" ,checked:false}
]
}

const todosSlice = createSlice({
    name:'todo',
    initialState,
    reducers:{
        add_todo:(state , action)=>{            
            const length = state.todoList.length
            const inputValue = action.payload
                state.todoList.push({ id: length !== 0 ? state.todoList[length - 1].id + 1 : 1, name: inputValue , checked:false})                     
        },
        delete_todo:(state , action)=>{
            const id = action.payload
            state.todoList =  state.todoList.filter(el=>el.id !== id && el)
        
        },
        edit_todo:(state , action)=>{
            const id = action.payload.id
            const value = action.payload.input

            const index = state.todoList.findIndex(value => value.id === id)
            if (index !== -1) {
                state.todoList[index].name = value
            }
        },
        check_todo:(state , action)=>{
            const id = action.payload
            state.todoList.forEach((value)=>{
                if (value.id === id) {
                    value.checked = !value.checked
                }
            })
        }
    }
})


export const {add_todo ,check_todo,delete_todo,edit_todo} = todosSlice.actions
export default todosSlice.reducer