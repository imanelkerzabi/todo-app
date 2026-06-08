import { useState, useEffect } from 'react'
import Header from './components/Header.jsx'
import TodoForm from './components/TodoForm.jsx'
import TodoList from './components/TodoList.jsx'

const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:3000'

function App() {
  const [todos, setTodos] = useState([])

  useEffect(() => {
    fetch(`${API_URL}/todos`)
      .then((res) => res.json())
      .then((data) => setTodos(data))
  }, [])

  function addTodo(title) {
    fetch(`${API_URL}/todos`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ title: title })
    })
      .then((res) => res.json())
      .then((newTodo) => setTodos([...todos, newTodo]))
  }

  return (
    <div>
      <Header />
      <TodoForm onAdd={addTodo} />
      <TodoList todos={todos} />
    </div>
  )
}

export default App