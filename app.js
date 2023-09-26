'use strict'

const express = require('express')

const PORT = 8080
const HOST = '0.0.0.0'
const NAME = 'Aneke Karina I' 

const app = express()
app.get('/', (req, res) => {
    res.send(NAME)
})

app.listen(PORT, HOST)
console.log(`Running on http://${HOST}:${PORT}`)
