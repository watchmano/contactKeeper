const express = require('express')
const connectDB = require('./config/db')
const chalk = require('chalk')

const app = express()

// Connect Database
connectDB()

// Init Middleware
app.use(express.json({ extended: false }))

app.get('/', (req, res) => res.json({ msg: 'Welcome to the ContactKeeper API'}))

// Define Routes

app.use('/api/users', require('./routes/users'))
app.use('/api/auth', require('./routes/auth'))
app.use('/api/contacts', require('./routes/contacts'))


const PORT = process.env.PORT || 5000
const serverRunMsg = chalk.blue.bold(`Server started on port ${PORT}`)
app.listen(PORT, () => console.log(serverRunMsg))

