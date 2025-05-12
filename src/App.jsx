/* eslint-disable no-unused-vars */
import { Todos } from "./components/todos/Todos";
import { useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { add_todo, check_todo, delete_todo, edit_todo } from "./slices/todoSlice";
export default function App() {
      const dispatch = useDispatch()  
      const action = bindActionCreators({add_todo,delete_todo,check_todo,edit_todo},dispatch)

      return(

        <Todos addTodo={action.add_todo} deleteTodo={action.delete_todo} editTodo={action.edit_todo} checkTodo={action.check_todo}/>
    )
}

