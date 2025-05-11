import { ADD_TODO, CHECK_TODO, DELETE_TODO, EDIT_TODO } from "../rowStrings/todoStr";

const intialSatae = [
  {id:1 , name:"todo 1" ,checked:false},
  {id:2 , name:"todo 2" ,checked:false},
  {id:3 , name:"todo 3" ,checked:false}
]

/* eslint-disable no-unreachable */
export default function todoReduser(todos = intialSatae , action){
switch (action.type) {
    case ADD_TODO :{

                const length = todos.length
                const inputValue = action.inputValue
                            
                               return[
                                    ...todos,
                                    { id: length !== 0 ? todos[length - 1].id + 1 : 1, name: inputValue }
                                ]  
                                 
            }
        break;
    case CHECK_TODO:{

        const id = action.id
        
        const updatedTodo = todos.map((el)=>{           
            if(el.id === id) {
               return {...el , checked:!el.checked}
            }
            return el
        })
        return updatedTodo
    }
        break;
    case EDIT_TODO:{
        const id = action.id
        const value = action.value
        const updatedTodo = todos.map((el)=>{           
            if(el.id === id) {
               return {...el , name:value}
            }
            return el
        })
        return updatedTodo
    }
        break;
    case DELETE_TODO:{
        const id = action.id
        return todos.filter(el=>el.id !== id && el)
    }
    break;
    default:{
        return todos
    }
        break;
}   
}