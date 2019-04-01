const express = require('express')
const bodyParser = require('body-parser')
const {events, actions} = require('./endpoints')

const app = express()
const port = 5000
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.post('/events', events)
app.post('/actions', actions)
app.listen(port, () => console.log(`Dog Name Game App is listening on port ${port}!`))