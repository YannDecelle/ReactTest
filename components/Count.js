import React, { useState, useEffect } from 'react';

export default function Count() {
    const [todo, setTodo] =  useState('');
    const [todolist, setTodolist] =  useState([]);
    const [lastitem, setlastitem] = useState(null);
    const [ user, setUser] = useState(null)
    const [ connected, setConnected] = useState(false);

    useEffect(() => {
        setlastitem(todolist.length - 1);
    }, [todolist])
    useEffect(() => {
        localStorage.setItem("todos", todolist);
    }, [todolist])    
    useEffect(() => {
        const userlocal = localStorage.getItem('user');
        userlocal !== null ? setUser(userlocal) : null;
    }, [connected])

    function deleteTodo(removeIndex) {
        setTodolist(todolist.filter((item, index) => {
            if (index != removeIndex) {
                return item
            }
        }))
    } 

    return (
        <div>
            <h2>To do :</h2>
            { todolist.map((item, index) => {
                return (
                    <p style={{color : index === lastitem ? 'red' : 'black'}} key={index}>{item} <span onClick={() => {deleteTodo(index)}}>-</span></p>
                )
            })}

            <input type="text" onChange={event => setTodo(event.target.value)} value={todo}/>
            <button onClick={() => (setTodolist(todolist => [...todolist, todo]), setTodo(''))}>+</button>
            
        </div>
    )
}