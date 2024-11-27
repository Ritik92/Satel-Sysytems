// 1. First run these commands in terminal:
//    npm init -y
//    npm install express

// Import express
const express = require('express')

// Create express app
const app = express()

// Tell express to understand JSON
app.use(express.json())

// Create some sample data
const users = [
    { id: 1, name: "John" },
    { id: 2, name: "Jane" }
]

// Route 1: Homepage
app.get('/', (req, res) => {
    res.send('Welcome to my first server!')
})

// Route 2: Get all users
app.get('/users', (req, res) => {
    res.json(users)
})

// Route 3: Get one user by ID
app.get('/users/:id', (req, res) => {
    const id = parseInt(req.params.id)
    const user = users.find(user => user.id === id)
    
    if (!user) {
        return res.status(404).send('User not found')
    }
    
    res.json(user)
})

// Route 4: Create new user
app.post('/users', (req, res) => {
    const newUser = {
        id: users.length + 1,
        name: req.body.name
    }
    
    users.push(newUser)
    res.json(newUser)
})

// Start server
app.listen(3000, () => {
    console.log('Server running at http://localhost:3000')
})