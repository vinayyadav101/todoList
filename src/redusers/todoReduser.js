export default function todoReduser(todos , action){
switch (action.type) {
    case "on_addtodo" :{
                const length = todos.length
                const inputValue = action.inputValue
                            if (inputValue.length !== 0) {
                               return[
                                    ...todos,
                                    { id: length !== 0 ? state[length - 1].id + 1 : 1, name: inputValue }
                                ]
                            }
                    }
        break;
    case 'on_Cheacked':{
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
    case 'on_edit':{
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
    case 'on_delete':{
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