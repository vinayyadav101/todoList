import { ADD_TODO, CHECK_TODO, DELETE_TODO, EDIT_TODO } from "../rowStrings/todoStr"

export const add_todo = (inputValue)=>({type:ADD_TODO,inputValue})
export const check_todo = (id)=>({type:CHECK_TODO,id})
export const edit_todo = (id,value)=>({type:EDIT_TODO,id,value})
export const delete_todo = (id)=>({type:DELETE_TODO,id})