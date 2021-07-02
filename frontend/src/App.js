import React, { useState, useEffect } from 'react'
import axios from 'axios'

const App = () => {
 
  const client_id = 'v6sidb1xto1muvnxg1yea3cy2ohgb2'
  const redirect_uri = 'http://localhost'
  const response_type = 'token'
  const url = 'https://id.twitch.tv/oauth2/authorize'
 /*
  useEffect(() => {
    axios
      .get(`${url}?response_type=${response_type}&client_id=${client_id}&redirect_uri=${redirect_uri}`)
      .then(response => {
        console.log(response)
      })
  }, [])
*/

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios
        .get(`${url}?response_type=${response_type}&client_id=${client_id}&redirect_uri=${redirect_uri}&scope=viewing_activity_read`)
      console.log(result.data);
    };
    fetchData();
  });
  return (
    <div className="container">
      <div className="main-container">
        <div className="title-container">
          <div className="title">
            Twitch Streamers
          </div>
          <div className="status-container">
            <div className="all">All</div>
            <div className="online">Online</div>
            <div className="offline">Offline</div>
          </div>
        </div>

        <div className="body-container">
          <div className="streamer">Streamer 1</div>
          <div className="streamer">Streamer 2</div>
        </div>
      </div>
    </div>
  );
}

export default App;
