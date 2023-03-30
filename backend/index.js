const connectToMongo = require('./db');
const express = require('express')
connectToMongo();
const app = express()
const port = 5000

app.use(express.json())

// Available Routes
app.use('/api/auth', require('./routes/auth'))
app.use('/api/notes', require('./routes/notes'))


app.get('/', (req, res) => {
    res.send('Hello World From index.js')
})

app.listen(port, () => {
    console.log(`Sky_Note backend listening on http://localhost:${port}`)
})

