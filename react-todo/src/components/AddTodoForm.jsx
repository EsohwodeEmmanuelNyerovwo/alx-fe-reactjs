import React from 'react'
import { useState } from 'react'

const AddTodoForm = () => {
    const [input, setInput] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (input.trim()) {
            addTodo(input);
            setInput('');
        }
    };
    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Add a todo"
                data-testid="todo-input"
            />
            <button type="submit">Add</button>
        </form>
    );
}

export default AddTodoForm