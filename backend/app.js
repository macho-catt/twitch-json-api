const config = require('./utils/config')
const express = require('express')
require('express-async-errors')
const app = express()
const cors = require('cors')
const axios = require('axios')
const apiRouter = require('./controllers/api')
const logger = require('./utils/logger')
const middleware = require('./utils/middleware')
const twitchRequests = require('./services/twitch_requests')
/*
const fetchToken = async () => {
    logger.info('retrieving token from twitch');
    const someToken = await twitchRequests.generateToken()
    logger.info(`token from outside function: ${JSON.stringify(someToken)}`)
}
*/
/*
let someToken = null
twitchRequests.generateToken().then(result => someToken = result)
console.log(someToken)
*/
app.use(cors())
app.use(express.static('build'))
app.use(express.json())
//app.use(middleware.requestLogger)

app.use('/api', apiRouter)


app.use(middleware.unknownEndpoint)
app.use(middleware.errorHandler)

module.exports = app