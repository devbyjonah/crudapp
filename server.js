const express = require('express')
const app = express()
const PORT = 8000

app.listen(process.env.PORT || PORT, () => {
	console.log(`The server is running on port ${PORT}`)
})