
const Channel = ({streamer}) => {
    const status = streamer[0].is_live ? 'streamer-online' : 'streamer-offline'
    return(
        <div className={`streamer ${status}`}>
            <div className="stream-logo-name">
                <div className="stream-logo-section">
                    <img src={streamer[0].thumbnail_url} className="logo" alt="logo of streamer" />
                </div>
                <div className="stream-name-section">
                    <a href={`https://www.twitch.tv/${streamer[0].display_name}`}>{streamer[0].display_name}</a>
                </div>
            </div>
            <div className="stream-status-section">
                {streamer[0].is_live ? `${streamer[0].game_name}: ${streamer[0].title}` : 'Offline'}
            </div>
        </div>
    )
}

export default Channel