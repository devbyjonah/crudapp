const express = require('express')
const bodyParser = require('body-parser')
const MongoClient = require('mongodb').MongoClient

const app = express()
const PORT = 8000

app.use(bodyParser.urlencoded({ extended: true }))

MongoClient.connect('', (err, client) => {
	
})

app.get('/', (req, res) => {
	res.sendFile(__dirname + '/index.html')
})

app.post('/notes', (req, res) => {
	console.log(req.body)
})

app.listen(process.env.PORT || PORT, () => {
	console.log(`The server is running on port ${PORT}`)
})