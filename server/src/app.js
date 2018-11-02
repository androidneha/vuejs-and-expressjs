const bodyParser = require('body-parser')
const config = require('./config/config')
const cors = require('cors')
const express = require('express')
const morgan = require('morgan')
const { sequelize } = require('./models')

const app = express()
app.use(morgan('çombined'))
app.use(bodyParser.json())
app.use(cors())

require('./routes')(app)

sequelize.sync()
  .then(() => {
    app.listen(config.port || 8081)
    console.log(`server running on port ${config.port}`)
  })
