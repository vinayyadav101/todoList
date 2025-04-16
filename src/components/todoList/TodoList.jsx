export default function TodoList({id , todo}) {
    return (
        <div className="todo" id={id}>
            <h1>{todo}</h1>
            <button>Edit</button>
            <button>Delete</button>
        </div>
    )
}