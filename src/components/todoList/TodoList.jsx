export default function TodoList({id , todo , edit}) {
    return (
        <div className="todo" id={id}>
            <h1>{todo}</h1>
            <button onClick={()=>edit(2,"hello")}>Edit</button>
            <button>Delete</button>
        </div>
    )
}