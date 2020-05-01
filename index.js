const express = require('express')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')

const PORT = 3000
const HOST = '0.0.0.0'

const app = express()

mongoose
  .connect('mongodb://db:27017/crud-node-mongo-docker', {
    useNewUrlParser: true
  })
  .then(result => {
    console.log('MongoDB Conectado');
  })
  .catch(error => {
    console.log(error);
  });


app.use(bodyParser.json())

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.listen(PORT, HOST)