const express = require('express')
const app = express()
const port = 4000
const cors = require('cors')
const mongoose = require("mongoose");
const errorHandler = require('./middlewares/errorHandler')


app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cors())
app.use('/api',require('./routes'))
app.use(errorHandler)

mongoose.connect('mongodb://127.0.0.1:27017/addis-test')
.then(()=> {
    app.listen(port, () => console.log(`Example app listening on port ${port}`))
})
.catch(err => console.log('Connection failed to database', err))