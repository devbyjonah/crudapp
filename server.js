// setup node packages
const express = require('express') // streamlines creating web apps in node js
const bodyParser = require('body-parser') // middleware for processing form input
const MongoClient = require('mongodb').MongoClient // mongodb client setup
const dotenv = require('dotenv') //dotenv used to setup private env variables for DB connection
dotenv.config()

const app = express() // intialize express app
const PORT = 8000

// process.env variables used to hide private info
const connectionString = `mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@cluster0.uxd8j5d.mongodb.net/?retryWrites=true&w=majority`

app.use(bodyParser.urlencoded({ extended: true })) // setup middleware with app.use() method

// mongodb connection containing all of our server methods
MongoClient.connect(connectionString)
	.then(client => {
		console.log('connected to DB')
		const db = client.db('crudApp')
		const notesCol = db.collection('notes')

		app.get('/', (req, res) => { // home page endpoint returns basic html file
			res.sendFile(__dirname + '/index.html') // __dirname is an env variable from node w/ current directory
		})
		
		app.post('/notes', (req, res) => { // notes endpoint inserts user notes into DB
			notesCol.insertOne(req.body)
				.then(result => {
					res.redirect('/')
				})
				.catch(error => console.error(error))
		})
		
		app.listen(process.env.PORT || PORT, () => { // checks for node port using env variable, if none use local port
			console.log(`The server is running on port ${PORT}`)
		})
		
	})
	.catch(error => console.error(error)) // catch for mongoDB connection errors