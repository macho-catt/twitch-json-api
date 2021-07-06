import React, { useState, useEffect } from 'react'
import apiService from './services/api'
import Header from './Header'
import Channel from './Channel'

const App = () => {
  const filterStatus = {
    ALL: 'all',
    ONLINE: 'online',
    OFFLINE: 'offline'
  }
  const [ streamers, setStreamers ] = useState([])

  // Sorting function
  const sortByStatus = (a, b) => {
    const statusA = a[0].is_live
    const statusB = b[0].is_live
    const nameA = a[0].display_name
    const nameB = b[0].display_name
    
    // Sort by online status, then alphabetically by name
    return statusB - statusA || 
      nameA.localeCompare(nameB)
  }

  // Get all streamers and display them based on a keyword
  const fetchData = async (keyword) => {
    const allStreamers = await apiService.getAll()
    
    switch (keyword){
      case filterStatus.ALL:
        setStreamers(allStreamers.sort(sortByStatus))
        break;
      case filterStatus.ONLINE:
        const onlineStreamers = allStreamers.filter(streamer => streamer[0].is_live === true).sort(sortByStatus)
        setStreamers(onlineStreamers)
        break;
      case filterStatus.OFFLINE:
        const offlineStreamers = allStreamers.filter(streamer => streamer[0].is_live === false).sort(sortByStatus)
        setStreamers(offlineStreamers)
        break;
      default:
        console.error('no keyword')
        break;
    }
  }

  // Display streamers based on the option clicked
  const headerStatusClick = (event) => {
    console.log(`clicked: ${event.target.id}`)
    switch (event.target.id){
      case "header-status-all":
        fetchData(filterStatus.ALL)
        break;
      case "header-status-online":
        fetchData(filterStatus.ONLINE)
        break;
      case "header-status-offline":
        fetchData(filterStatus.OFFLINE)
        break;
      default:
        break;
    }
  }

  useEffect(() => {
    fetchData(filterStatus.ALL)
  }, [])

  console.log(streamers)
  return (
    <div className="container">
      <div className="main-container">
        <Header onClick={headerStatusClick} />
        <div className="body-container">
          {streamers.map(streamer => <Channel streamer={streamer} key={streamer[0].id} />)}
        </div>
      </div>
    </div>
  );
}

export default App;
