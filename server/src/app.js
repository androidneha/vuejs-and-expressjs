console.log('starting server')
const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const morgan = require('morgan')

const app = express()
app.use(morgan('çombined'))
app.use(bodyParser.json())
app.use(cors())

app.post('/register', (req, res) => {
  res.send({
    message: `User with email ${req.body.email} is registered`
  })
})

app.get('/status', (req, res) => {
  res.send({
    message: `test completed`
  })
})

app.listen(process.env.PORT || 8081)
