import { useState, useEffect } from 'react'
import Header from './components/Header.jsx'
import TodoForm from './components/TodoForm.jsx'
import TodoList from './components/TodoList.jsx'

function App() {
  const [todos, setTodos] = useState([])

  useEffect(() => {
    fetch('http://localhost:3000/todos')
      .then((res) => res.json())
      .then((data) => setTodos(data))
  }, [])

  function addTodo(title) {
    fetch('http://localhost:3000/todos', {
      method : 'POST',
      headers: { 'Content-Type' : 'application/json'},
      body: JSON.stringify({ title, title})

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