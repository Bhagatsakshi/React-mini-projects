import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

export default function ToDolist() {
    let [todos, setTodo] = useState([{ task: "Sample task", id: uuidv4(), done: false }]);
    let [newT, setNewT] = useState("");

    let addIt = () => {
        if (newT.trim() === "") return;
        setTodo((prevTodos) => {
            return [...prevTodos, {
                task: newT, id: uuidv4(), done: false 
            }]
        });
        setNewT("");
    }

    let updateTodo = (event) => {
        setNewT(event.target.value || "");
    }

    let delTodo = (id) => {
        // let copy = todos.filter((todo) => todo.id != id); giving us ids which we not clicks
        // and that ids we put into list by set Todo
        setTodo(todos.filter((todo) => todo.id != id));
    }

    // uppercasing one only, get id then use same logic, just check 
    // todo id same as id ,and in else part return normal todo

    let upperAll = () => {
        setTodo((todos) =>
            todos.map((todo) => {
                return {
                    ...todo,
                    task: todo.task.toUpperCase(),
                }
            }));
    }

    let lowerAll = () => {
        setTodo((todos) =>
            todos.map((todo) => {
                return {
                    ...todo,
                    task: todo.task.toLowerCase()
                }
            }));
    }

    let toggleDone = (id) => {
        setTodo(
            todos.map((todo) =>
                todo.id === id ? { ...todo, done: !todo.done } : todo
            )
        )
    }

    return (
        <div>
            <h2>To-Do list</h2>
            <input placeholder="Add a task" value={newT ?? ""} onChange={updateTodo}></input>
            &nbsp;
            <button onClick={addIt}>Add</button>
            <br /><br />
            <hr />
            <h4>Tasks todo</h4>
            <ul>
                {
                    todos.map((todo) => (

                        <p key={todo.id}>
                            <label
                                style={{
                                    textDecoration: todo.done ? "line-through" : "none",
                                    color: todo.done ? "gray" : "black",
                                }}
                            >
                                <input
                                    type="checkbox"
                                    checked={todo.done}
                                    onChange={() => toggleDone(todo.id)}
                                />
                                <span>{todo.task}</span>
                            </label>
                            &nbsp; &nbsp;
                            <button onClick={() => delTodo(todo.id)}>Delete</button>
                            {/* delTodo(todo.id) -> executing ,so to avoid call we convert it in arrow func */}
                        </p>
                    ))
                }
            </ul>
            <br />
            <button onClick={upperAll}>Uppercase All</button>
            &nbsp; &nbsp;
            <button onClick={lowerAll}>Lowercase All</button>
        </div>
    );
}
