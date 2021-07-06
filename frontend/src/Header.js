
const Header = ({ onClick }) => {

    return(
        <div className="header-container">
            <div className="header-title">
                Twitch Streamers
            </div>
            <div className="header-status" onClick={onClick}>
                <div id="header-status-all" className={`status-select`}>All</div>
                <div id="header-status-online" className={`status-select`}>Online</div>
                <div id="header-status-offline" className={`status-select`}>Offline</div>
            </div>
        </div>
    )
}

export default Header