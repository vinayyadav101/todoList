/* eslint-disable no-unused-vars */
import { useReducer, useState } from "react";
import { todoContext } from "./contexts/todoContext";
import { reduserContext } from "./contexts/reduserContext";
import { Todos } from "./components/todos/Todos";
import todoReduser from "./redusers/todoReduser";


export default function App() {

const [todos , dispatch] = useReducer(todoReduser , intialSatae)


    return(
        <todoContext.Provider value={{todos}} >
          <reduserContext.Provider value={{dispatch}}>
            <Todos />
            </reduserContext.Provider>
      </todoContext.Provider>
    )
}

const intialSatae = [
  {id:1 , name:"todo 1" ,checked:false},
  {id:2 , name:"todo 2" ,checked:false},
  {id:3 , name:"todo 3" ,checked:false}
]