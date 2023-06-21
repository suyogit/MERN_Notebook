const connectToMongo = require('./db')
const express = require('express')
var cors = require('cors')
connectToMongo();

const app = express()
const port = 5000


app.use(cors())

app.use(express.json())

// app.get('/api/login', (req, res) => { //get hello suyog  after typing http://locahost:3000/api/login
//     res.send('Hello Suyog!')
// })

//available routes
app.use('/api/auth/', require('./routes/auth'))
app.use('/api/notes', require('./routes/notes'))

app.listen(port, () => {
    console.log(`Notebook backend listening on port ${port}`)
})
