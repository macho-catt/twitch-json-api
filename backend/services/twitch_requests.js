const config = require('../utils/config')
const axios = require('axios')
const logger = require('../utils/logger')


// Generate authorization token for twitch api requests
const generateToken = async () => {
    const token = await axios
        .post(`${config.TWITCH_TOKEN_URL}?client_id=${config.CLIENT_ID}&client_secret=${config.CLIENT_SECRET}&grant_type=${config.GRANT_TYPE}`)
    logger.info(`token from inside function: ${JSON.stringify(token.data)}`)
    return token.data
}

// Search for specific streamer
const searchChannel = async (twitchUser) => {

    // Search twitch for possible streamers
    const channels = await axios
        .get(`${config.TWITCH_SEARCH_CHANNELS}${twitchUser}`, {
            headers: {
                'client-id': config.CLIENT_ID,
                'Authorization': `Bearer ${config.TEMP_TOKEN}`
            }
        })

    // Filter for specific streamer
    const streamer = channels.data.data.filter(channel => channel.display_name === twitchUser)
    return streamer
}

// Search for streamers defined in the array
const searchAllChannels = async (twitchUsersArray) => {

    // Wrap searchChannel in an async function to return promises
    const asyncFunction = async (streamer) => {
        return searchChannel(streamer)
    }

    // Resolve the promises
    const getStreamer = async () => {
        return Promise.all(twitchUsersArray.map(twitchUser => asyncFunction(twitchUser)))
    }

    const streamers = await getStreamer()
    return streamers
}

module.exports = {
    generateToken,
    searchChannel,
    searchAllChannels
}