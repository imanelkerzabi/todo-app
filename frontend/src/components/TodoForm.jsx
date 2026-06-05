import { useState } from 'react'

function TodoForm({ onAdd }) {
    const [title, setTitle] = useState('')

    function handleSubmit() {
        if (title === '') return 
        onAdd(title)
        setTitle('')

    }

    return ( 
        <div>
            <input 
            type = "text"
            value = {title}
            onChange ={(e) => setTitle(e.target.value)}
            placeholder = "Ajouter un todo"
            />
            <button onClick={handleSubmit}>Ajouter</button>
        </div>
    )
}

export default TodoForm