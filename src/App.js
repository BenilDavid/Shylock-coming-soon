import React, { useState, useEffect } from "react";
import logo from './shylock-logo.png';
import './App.css';
import twitterIcon from './twitter.png';
import ReactPlayer from 'react-player';
import aiAudio from './Audio/coming-soon.mp3';

function App() {
  const [jasperAudio, setjasperAudio] = useState(false);

  useEffect(() => {
    setjasperAudio(true);
  }, [])
  
  return (
    <div className="App">
      <header className="App-header">
      <ReactPlayer className="d-none" url={aiAudio} playing={jasperAudio} controls={false} volume={1} muted={false} loop={false} />
        <div className="container">
          <div className="main-content">
            <img src={logo} className="App-logo" alt="logo" />
            <p>
            Thank you for visiting Detective Shylock's Office. Detective Shylock is on his way. Please have a seat in the waiting room. We will get to you shortly.
            </p>
            <button className="intent-tweet">
              <a href="https://twitter.com/intent/tweet?%0a&url=https%3A%2F%2Ftwitter.com%2Fshylocknft%2Fstatus%2F1600556103976488962%3Fs%3D46%26t%3DsVT79eisuh7ca-VdLLCnLA&%0a&via=shylocknft&%0a&text=I%20am%20here%20in%20Tokyo%2C%20waiting%20to%20meet%20the%20world%27s%20most%20famous%20Detective%20Shylock%20and%20take%20up%20the%20challenge.%0a&hashtags=SolvewithShylock">
              WAITING ROOM
              </a>
            </button>
          </div>

          <div className='header'>
          <button className="twitter-btn">
            <a href="https://twitter.com/shylocknft">
              <img src={twitterIcon} className="twitter-logo" alt="twitter" />
            </a>
          </button>
          </div>

        </div>
      </header>
    </div>
  );
}

export default App;
