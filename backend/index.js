const express = require('express');
const cors = require('cors');
const pool = require('./db');

const app = express();
app.use(cors())
app.use(express.json())

//Récupérer  tous les todos
app.get('/todos', async (req, res)  => {
    const result = await pool.query('SELECT * FROM todos')
    res.json(result.rows)
})

// Ajouter un todo
app.post('/todos', async (req, res) => {
  const { title } = req.body
  const result = await pool.query(
    'INSERT INTO todos (title) VALUES ($1) RETURNING *',
    [title]
  )
  res.status(201).json(result.rows[0])
})

// Marquer comme fait
app.patch('/todos/:id', async (req, res) => {
  const { id } = req.params
  const result = await pool.query(
    'UPDATE todos SET done = TRUE WHERE id = $1 RETURNING *',
    [id]
  )
  res.json(result.rows[0])
})

// Supprimer un todo
app.delete('/todos/:id', async (req, res) => {
  const { id } = req.params
  await pool.query('DELETE FROM todos WHERE id = $1', [id])
  res.json({ message: 'Supprimé' })
})

const PORT = process.env.PORT || 3000
 app.listen(PORT, () => {
   console.log(`Server is running on port ${PORT}`)
 })