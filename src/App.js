import React, { useState } from "react";
import logo from './shylock-christmas-logo.png';
import './App.scss';
import twitterIcon from './twitter.png';
import ReactPlayer from 'react-player';
// import Coming from './Audio/jasper-voice.mp3';
import Typing from './Audio/typeSound.mp3';
import Bgm from './Audio/shylock-bgm.mp3';
import JasperVoiceWave from './Audio/jasper-vocal-wave.mp4';
// import JasperVid from './Audio/jasper.webm';
// import JasperMov from './Audio/jasper.mov';
import Typewriter from 'typewriter-effect';
import 'animate.css';

function App() {

  const [hideVideo, setHideVideo] = useState(false);
  const [typingAudio, setTypingAudio] = useState(false);
  const [startType, setStartType] = useState(false);
  // const [bgmAudio, setBgmAudio] = useState(false);
  const [portionCount, setportionCount] = useState(0);

  const daysData = [
    {
      id: 1,
      day: 1,
      isOpen: true,
    },
    {
      id: 2,
      day: 2,
      isOpen: false,
    },
    {
      id: 3,
      day: 3,
      isOpen: false,
    },
    {
      id: 4,
      day: 4,
      isOpen: false,
    },
    {
      id: 5,
      day: 5,
      isOpen: false,
    },
    {
      id: 6,
      day: 6,
      isOpen: false,
    },
    {
      id: 7,
      day: 7,
      isOpen: false,
    },
    {
      id: 8,
      day: 8,
      isOpen: false,
    },
    {
      id: 9,
      day: 9,
      isOpen: false,
    },
    {
      id: 10,
      day: 10,
      isOpen: false,
    },
  ]

  const Initiation = () => {
    setportionCount(1);
  }

  // const EndOfVoice = () => {
  //   setportionCount(2);
  // }

  const TypingAudioReady = () => {
    setTypingAudio(true);
    setStartType(true);
  }

  const jasperVideoEnded = () => {
    console.log("video ended");
    setHideVideo(true);
  }

  // const BgmReady = () => {
  //   setBgmAudio(true);
  // }

  return (
    <div className="App">

      <header className="App-header">
        <div className="container">

          {portionCount === 1 ?
            <div className={`video-container ${hideVideo ? "d-none" : ""}`}>
              <ReactPlayer className={`jasper-video`} url={JasperVoiceWave} playing={true} controls={false} volume={1} muted={false} loop={false} playsinline={true} onEnded={jasperVideoEnded} />
            </div>
            : ""}

          <div className="main-content">
            {portionCount !== 0 ?
              <>
                <ReactPlayer className="d-none" url={Bgm} playing={true} controls={true} volume={1} muted={false} loop={true} />
              </>
              : ""}

            <div className="logo-container">
              <img src={logo} className="shylock-logo" alt="logo" />
              <div className="static-passage">
                Shylock’s Festive season Challenge.
              </div>
            </div>

            <button className={`initiate-btn  ${portionCount === 1 ? "animate__animated animate__fadeOut d-none" : portionCount !== 0 ? "d-none" : "animate__animated animate__fadeInUp animate__delay-1s"}`} onClick={Initiation}> BEGIN </button>

            {portionCount === 1 ?
              <>
                {/* <ReactPlayer className="d-none" url={Coming} playing={true} controls={true} volume={1} muted={false} loop={false} onEnded={EndOfVoice} /> */}
                {/* <ReactPlayer className="d-none" url={Typing} playing={typingAudio} controls={true} volume={1} muted={false} loop={true} playbackRate={1} onReady={TypingAudioReady} /> */}

                <div className="internal-content">
                  <div className="passage">
                    <Typewriter
                      onInit={(typewriter) => {
                        typewriter
                          .typeString('Welcome everyone,I will be here with you clarifying the details of Shylock’s Festive season Challenge. Shylock decides to conduct tasks and missions for you and your friends to solve together.')
                          .typeString('At the end of Shylock’s Festive Season Challenge, you and your friends will be rewarded with exciting gifts and present from Detective Shylock. Every participant is considered and rewarded deservingly.')
                          .typeString('When in doubt: Look for The Shades.')
                          .callFunction(() => {
                            setTypingAudio(false);
                          })
                          .start();
                      }}
                      options={{
                        loop: false,
                        delay: 46,
                        pauseFor: 100000,
                      }}
                    />
                  </div>
                  <div className="boxes-container">
                    <div className="rules-box-container">
                      <div>Rules</div>
                      <div className="rules">
                        <ul>
                          <li>Participants must provide their accurate Twitter username when participating in the quest.</li>
                          <li>Participants must follow and turn on notifications for both the @shylocknft and @shylockagents Twitter profiles.</li>
                          <li>Participants must tag atleast 3 potential agents (friends) in their respective tweet after completing the quest.</li>
                          <li>Answers should not contain any NSFW (not safe for work) words.</li>
                          <li>Failure to follow any of the above rules will result in disqualification from the quest.</li>
                        </ul>
                      
                        {/* 2. 
                        3. 
                        4.  5.  */}
                      </div>
                    </div>

                    <div className="days-box-container">
                      <span className="days-heading">Daily Quests</span>
                      <div className="days-container">
                        {daysData.map(({ id, day, isOpen }) => {
                          return <div key={id} className="days-box">
                            <span>{day}</span>
                          </div>
                        })}
                      </div>
                    </div>

                    <div className="time-box-container">
                      <div>
                        Starting Time: 10:30 AM EST
                        Quest Live: for 24 hours
                        Answers: Follow @shylockagents
                      </div>
                    </div>
                  </div>
                </div>
              </>
              : portionCount === 2 ?
                <>
                  <div className="type-container">
                    <ReactPlayer className="d-none" url={Typing} playing={typingAudio} controls={true} volume={1} muted={false} loop={true} playbackRate={1} onReady={TypingAudioReady} />

                    {startType ?
                      <Typewriter
                        onInit={(typewriter) => {
                          typewriter.typeString('Welcome everyone, I will be clarifying you the details of Shylock’s Festive season Challenge.Shylock decides to conduct tasks and missions for you and your friends to solve.')
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
