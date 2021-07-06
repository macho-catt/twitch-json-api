const config = require('../utils/config')
const appRouter = require('express').Router()
const axios = require('axios')
const logger = require('../utils/logger')
const twitchRequests = require('../services/twitch_requests')

const twitchUsers = [
    'Sykkuno',
    'LunaOni',
    'ludwig',
    'lilypichu',
    'xQcOW'
]

appRouter.get('/', async (request, response) => {

    const streamers = await twitchRequests.searchAllChannels(twitchUsers)
    response.json(streamers)
})

appRouter.get('/test', async (request, response) => {

    //comment out for now to use temp token generated from before

    const twitchUser = 'LunaOni'
    const streamer = await twitchRequests.searchChannel(twitchUser)
    response.json(streamer)
})

module.exports = appRouter