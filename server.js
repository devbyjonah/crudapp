const express = require('express')
const app = express()
const PORT = 8000

app.get('/', (req, res) => {
	res.sendFile(__dirname + '/index.html')
})

app.listen(process.env.PORT || PORT, () => {
	console.log(`The server is running on port ${PORT}`)
})