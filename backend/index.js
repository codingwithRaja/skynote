const connectToMongo = require('./db');
const express = require('express')
connectToMongo();
const app = express()
const port = 3000

// Available Routes
app.use('/api/auth', require('./routes/auth'))
app.use('/api/notes', require('./routes/notes'))


app.get('/', (req, res) => {
    res.send('Hello World From index.js')
})

app.listen(port, () => {
    console.log(`Example app listening on http://localhost:${port}`)
})
