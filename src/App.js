import React, { useState } from "react";
import logo from './shylock-final-logo.png';
import './App.css';
import twitterIcon from './twitter.png';
import ReactPlayer from 'react-player';
import Coming from './Audio/jasper-voice.mp3';
import Typing from './Audio/typeSound.mp3';
import Bgm from './Audio/shylock-bgm.mp3';
import Jaspermp4 from './Audio/jasper.mp4';
// import JasperVid from './Audio/jasper.webm';
// import JasperMov from './Audio/jasper.mov';
import Typewriter from 'typewriter-effect';
import 'animate.css';

function App() {

  // const [jasperAudio, setjasperAudio] = useState(false);
  const [typingAudio, setTypingAudio] = useState(false);
  const [startType, setStartType] = useState(false);
  // const [bgmAudio, setBgmAudio] = useState(false);
  const [portionCount, setportionCount] = useState(0);

  const Initiation = () => {
      setportionCount(1);
  }

  const EndOfVoice = () => {
    setportionCount(2);
  }

  const TypingAudioReady = () => {
    setTypingAudio(true);
    setStartType(true);
  }

  // const VoiceReady = () => {
  //   setjasperAudio(true);
  // }

  // const BgmReady = () => {
  //   setBgmAudio(true);
  // }

  return (
    <div className="App">
      <header className="App-header">

        <div className="container">
          <div className="main-content">
            {portionCount !== 0 ?
              <>
                <ReactPlayer className="d-none" url={Bgm} playing={true} controls={true} volume={1} muted={false} loop={true} />
              </>
              : ""}

            <img src={logo} className="App-logo" alt="logo" />
            
            {/* <video controls="controls" width="800" height="600" name="Video Name">
              <source src={JasperVid} />
            </video> */}

            <button className={`initiate-btn  ${portionCount === 1 ? "animate__animated animate__fadeOut d-none" : portionCount !== 0 ? "d-none" : "animate__animated animate__fadeInUp animate__delay-1s"}`} onClick={Initiation}> BEGIN </button>

            {portionCount === 1 ?
              <>
                <ReactPlayer className="d-none" url={Coming} playing={true} controls={true} volume={1} muted={false} loop={false} onEnded={EndOfVoice} />

                <ReactPlayer width="200px" height="200px" className="jasper-video" url={Jaspermp4} playing={true} controls={false} volume={1} muted={false} loop={false} playsinline={true} /> 
              </>
              : portionCount === 2 ?
                <>
                  <div className="type-container">
                    <ReactPlayer className="d-none" url={Typing} playing={typingAudio} controls={true} volume={1} muted={false} loop={true} playbackRate={1} onReady={TypingAudioReady} />

                    {startType ?
                      <Typewriter
                        onInit={(typewriter) => {
                          typewriter.typeString('Early Interactions in the waiting room will be rewarded a Entry access. Time is running out.')
                            .callFunction(() => {
                              setTypingAudio(false);
                            })
                            .start();
                        }}
                        options={{
                          // strings: ['Early Interactions in the waiting room will be rewarded a POAP. Time is running out.'],
                          loop: false,
                          // autoStart: true,
                          delay: 60,
                          pauseFor: 100000,
                        }}
                      />
                      : ''}
                  </div>

                  <a className="intent-tweet-link animate__animated animate__fadeInUp" href=" https://twitter.com/intent/tweet?text=I%27ve%20just%20entered%20the%20shylocknft.com.%20Waiting%20to%20meet%20Detective%20Shylock%20and%20get%20early%20access%20to%20The%20Shades.%0a&via=shylocknft&%0a&url=https%3A%2F%2Ftwitter.com%2Fshylocknft%2Fstatus%2F1604180496463802370%3Fs%3D20%26t%3DrfXGfH-kpQgSvDNjy4ArCg%0a&hashtags=SolvewithShylock">
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
