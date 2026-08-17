import React from 'react'
import {useSelector , useDispatch} from 'react-redux'
import {removeTodo} from '../Features/todoSlice'

function Todo() {
    const todos = useSelector((state) => state.todos)
    const dispatch = useDispatch()

    return(
        <>
        
        <div>
            Todos
        </div>
        {todos.map((todo) => (
            <li key={todo.id} className="flex items-center justify-between border border-black/10 rounded-lg px-3 py-1.5 bg-white/20">
                {todo.text} 
                <button onClick={() => dispatch(removeTodo(todo.id))} className="text-red-500 hover:text-red-700">
                    Remove
                </button>
            </li>
        ))}
        
        </>
    )


}

export default Todo