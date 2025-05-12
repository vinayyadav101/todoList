// import { combineReducers } from "redux";
// import todoReduser from "./redusers/todoReduser";
import { configureStore } from "@reduxjs/toolkit";
import reducer from "./slices/todoSlice";


// combinreducers to work for automatic rerander facility only store use not automatic rerander its manul . so use combinereducers
// const reducers = combineReducers({todo:todoReduser})

// export  const store = createStore(reducers)

export const store = configureStore({
    reducer:{
        todo:reducer
    }
})

// (if you have use without combineReduser using useselectore to above like error ahow in browser) 



// export   const store = createStore(reducers)
// Todos.jsx:11 Selector unknown returned the root state when called. This can lead to unnecessary rerenders.
// Selectors that return the entire state are almost certainly a mistake, as they will cause a rerender whenever *anything* in state changes. 
// {stack: 'Error\n    at http://localhost:5173/node_modules/.v…ite/deps/react-dom_client.js?v=326657b7:17424:20)'}
// stack
// : 
// "Error\n    at http://localhost:5173/node_modules/.vite/deps/react-redux.js?v=326657b7:1058:25\n    at memoizedSelector (http://localhost:5173/node_modules/.vite/deps/react-redux.js?v=326657b7:31:32)\n    at http://localhost:5173/node_modules/.vite/deps/react-redux.js?v=326657b7:51:24\n    at mountSyncExternalStore (http://localhost:5173/node_modules/.vite/deps/react-dom_client.js?v=326657b7:4550:26)\n    at Object.useSyncExternalStore (http://localhost:5173/node_modules/.vite/deps/react-dom_client.js?v=326657b7:16562:18)\n    at exports.useSyncExternalStore (http://localhost:5173/node_modules/.vite/deps/chunk-6P6Q65E3.js?v=326657b7:930:36)\n    at exports.useSyncExternalStoreWithSelector (http://localhost:5173/node_modules/.vite/deps/react-redux.js?v=326657b7:60:21)\n    at useSelector2 (http://localhost:5173/node_modules/.vite/deps/react-redux.js?v=326657b7:1076:85)\n    at Todos (http://localhost:5173/src/components/todos/Todos.jsx?t=1746938083664:23:17)\n    at react-stack-bottom-frame (http://localhost:5173/node_modules/.vite/deps/react-dom_client.js?v=326657b7:17424:20)"
// [[Prototype]]
// : 
// Object
// Todos	@	Todos.jsx:11
// <Todos>		
// App	@	App.jsx:13
// <App>		
// (anonymous)	@	main.jsx:11
