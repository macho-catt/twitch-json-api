require('dotenv').config()

const PORT = process.env.PORT

const CLIENT_ID = process.env.CLIENT_ID
const CLIENT_SECRET = process.env.CLIENT_SECRET
const REDIRECT_URI = process.env.REDIRECT_URI
const TEMP_TOKEN = process.env.TEMP_TOKEN
const TWITCH_OAUTH2_URL = 'https://id.twitch.tv/oauth2'
const TWITCH_AUTH_URL = `${TWITCH_OAUTH2_URL}/authorize`
const TWITCH_TOKEN_URL = `${TWITCH_OAUTH2_URL}/token`
const GRANT_TYPE = 'client_credentials'
const RESPONSE_TYPE = 'token'
const SCOPE = 'viewing_activity_read'

const TWITCH_HELIX_URL = 'https://api.twitch.tv/helix'
const TWITCH_SEARCH_CHANNELS = `${TWITCH_HELIX_URL}/search/channels?query=`


module.exports = {
    PORT,
    CLIENT_ID,
    CLIENT_SECRET,
    TEMP_TOKEN,
    REDIRECT_URI,
    TWITCH_OAUTH2_URL,
    TWITCH_AUTH_URL,
    TWITCH_TOKEN_URL,
    GRANT_TYPE,
    RESPONSE_TYPE,
    SCOPE,
    TWITCH_HELIX_URL,
    TWITCH_SEARCH_CHANNELS
}