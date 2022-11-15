const express = require('express')
const bodyParser = require('body-parser')
const MongoClient = require('mongodb').MongoClient
const dotenv = require('dotenv')
dotenv.config()

const app = express()
const PORT = 8000

const connectionString = `mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@cluster0.uxd8j5d.mongodb.net/?retryWrites=true&w=majority`

app.use(bodyParser.urlencoded({ extended: true }))

MongoClient.connect(connectionString)
	.then(client => {
		console.log('connected to DB')
	})
	.catch(error => console.error(error))

app.get('/', (req, res) => {
	res.sendFile(__dirname + '/index.html')
})

app.post('/notes', (req, res) => {
	console.log(req.body)
})

app.listen(process.env.PORT || PORT, () => {
	console.log(`The server is running on port ${PORT}`)
})