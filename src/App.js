import React, { useState } from "react";
import logo from './shylock-logo.png';
import './App.css';
import twitterIcon from './twitter.png';
import ReactPlayer from 'react-player';
import Coming from './Audio/coming-soon.mp3';
import Typewriter from 'typewriter-effect';
import 'animate.css';

function App() {

  const [jasperAudio, setjasperAudio] = useState(false);
  const [portionCount, setportionCount] = useState(0);

  const Initiation = () => {
    setportionCount(1);
  }

  const EndOfVoice = () => {
    setportionCount(2);
  }
  const VoiceReady = () => {
    setjasperAudio(true);
  }

  return (
    <div className="App">

      <header className="App-header">

        <div className="container">
          <div className="main-content">

            <img src={logo} className="App-logo" alt="logo" />
            <button className={`initiate-btn animate__animated animate__fadeInUp ${portionCount === 1 ? "animate__animated animate__fadeOut" : portionCount !== 0 ? "d-none" : ""}`} onClick={Initiation}> BEGIN </button>

            {portionCount === 1 ?
              <>
                <ReactPlayer className="d-none" url={Coming} playing={jasperAudio} controls={true} volume={1} muted={false} loop={false} onEnded={EndOfVoice} onReady={VoiceReady} />
              </>
              : portionCount === 2 ?
                <>
                  <div className="type-container">
                    <Typewriter
                      options={{
                        strings: ['Early Interactions in the waiting room will be rewarded a POAP. Time is running out.'],
                        autoStart: true,
                        loop: true,
                        delay: 40,
                        pauseFor: 100000,
                      }}
                    />
                  </div>

                  <a className="intent-tweet-link animate__animated animate__fadeInUp" href="https://twitter.com/intent/tweet?%0a&url=https%3A%2F%2Ftwitter.com%2Fshylocknft%2Fstatus%2F1600556103976488962%3Fs%3D46%26t%3DsVT79eisuh7ca-VdLLCnLA&%0a&via=shylocknft&%0a&text=I%27m%20here%20in%20Tokyo%20(%E6%9D%B1%E4%BA%AC)%2C%20psyched%20to%20meet%20the%20most%20famous%20Detective%20Shylock%2C%20and%20eager%20to%20solve%20cases%20with%20him.%20Not%20only%20that%20early%20entrants%20will%20receive%20a%20%28POAP%29%20Proof%20of%20Attendance%20Protocol%20%F0%9F%8E%AB%20soon.%0a&hashtags=SolvewithShylock">
                    <button className="intent-tweet">
                      WAITING ROOM
                    </button>
                  </a>
                </>
                : ""}

            <div className='footer'>
              <button className="twitter-btn">
                <a href="https://twitter.com/shylocknft">
                  <img src={twitterIcon} className="twitter-logo" alt="twitter" />
                </a>
              </button>
            </div>

          </div>

        </div>
      </header>
    </div>
  );
}

export default App;
