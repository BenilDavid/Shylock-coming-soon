/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from "react";
import logo from './Assets/new-christmas-logo.png';
import './App.scss';
import twitterIcon from './twitter.png';
import whiteLock from './Assets/white-lock.png';
import ReactPlayer from 'react-player';
// import Coming from './Audio/jasper-voice.mp3';
import Typing from './Audio/typeSound.mp3';
import Bgm from './Audio/shylock-bgm.mp3';
import JasperVoiceWave from './Audio/jasper-wave.webm';
import question1 from './Audio/questions/question_1.webm';
// import JasperVid from './Audio/jasper.webm';
// import JasperMov from './Audio/jasper.mov';
import Typewriter from 'typewriter-effect';
import 'animate.css';
import AnalogClock from 'analog-clock-react';

// must follow @shylocknft

function App() {

  const [hideVideo, setHideVideo] = useState(false);
  const [typingAudio, setTypingAudio] = useState(false);
  const [startType, setStartType] = useState(false);
  // const [bgmAudio, setBgmAudio] = useState(false);
  const [portionCount, setportionCount] = useState(-1);
  const [formData, setFormData] = useState({
    twitterName: "",
    answer: ""
  });
  const [analogClockTime, setAnalogClockTime] = useState(
    {
      useCustomTime: true,
      width: "130px",
      border: true,
      borderColor: "#2e2e2e",
      baseColor: "#000",
      centerColor: "#2e2e2e",
      centerBorderColor: "#ff8012",
      handColors: {
        second: "#fff",
        minute: "#ff8012",
        hour: "#ff8012"
      },
      seconds: 1,
      minutes: 10,
      hours: 22
    }
  )

  useEffect(() => {
    setInterval(() => {
      updateClock();
    }, 1000);
  }, [])

  useEffect(() => {
    console.log(portionCount);
  }, [portionCount])


  const updateClock = () => {
    let ausTime = new Date().toLocaleString('en-US', { timeZone: 'America/New_York' });
    let date = new Date(ausTime);

    setAnalogClockTime(
      {
        ...analogClockTime,
        seconds: date.getSeconds(),
        minutes: date.getMinutes(),
        hours: date.getHours()
      }
    )
  }

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
    setportionCount(0);
  }

  const onDayClicked = (id) => {
    setportionCount(id);
  }

  const handleFormData = ({ target: { name, value } }) => {
    setFormData({ ...formData, [name]: value })
  }

  const submitButton = () => {
    console.log(formData);
    setFormData({...formData, twitterName: "", answer: ""})
    console.log("clicking");
  }

  // const EndOfVoice = () => {
  //   setportionCount(2);
  // }

  const TypingAudioReady = () => {
    setTypingAudio(true);
    setStartType(true);
  }

  const jasperVideoEnded = () => {
    setHideVideo(true);
  }

  // const BgmReady = () => {
  //   setBgmAudio(true);
  // }

  return (
    <div className="App">
      <header className="App-header">
        <div className="container">

          <div className="main-content">

            <div className="logo-container">
              <img src={logo} className="shylock-logo" alt="logo" />
              {/* <div className="static-passage">
                Shylock’s Festive season Challenge.
              </div> */}
            </div>

            <button className={`initiate-btn  ${portionCount === 0 ? "animate__animated animate__fadeOut d-none" : portionCount !== -1 ? "d-none" : "animate__animated animate__fadeInUp animate__delay-1s"}`} onClick={Initiation}> ENTER THE SHADES </button>

            {portionCount !== -1 ?
              <>
                <ReactPlayer className="d-none" url={Bgm} playing={true} controls={true} volume={1} muted={false} loop={true} />
                {/* <ReactPlayer className="d-none" url={Coming} playing={true} controls={true} volume={1} muted={false} loop={false} onEnded={EndOfVoice} /> */}
                {/* <ReactPlayer className="d-none" url={Typing} playing={typingAudio} controls={true} volume={1} muted={false} loop={true} playbackRate={1} onReady={TypingAudioReady} /> */}

                <div className="internal-content">
                  {portionCount === 0 ?
                    <>
                      <div className="upper-portion-1">
                        <div className={`video-container ${hideVideo ? "d-none" : ""}`}>
                          <ReactPlayer className={`jasper-video`} url={JasperVoiceWave} playing={true} controls={false} volume={1} muted={false} loop={false} playsinline={true} onEnded={jasperVideoEnded} />
                        </div>

                        <Typewriter
                          onInit={(typewriter) => {
                            typewriter
                              .typeString('Welcome everyone,I will be here with you clarifying the details of Shylock’s Festive season Challenge. Shylock decides to conduct tasks and missions for you and your friends to solve together.')
                              .pauseFor(400)
                              .typeString(' At the end of Shylock’s Festive Season Challenge, you and your friends will be rewarded with exciting gifts and present from Detective Shylock.')
                              .pauseFor(400)
                              .typeString(' Every participant is considered and rewarded deservingly.')
                              .pauseFor(800)
                              .typeString(' When in doubt look out for the shades.')
                              .callFunction(() => {
                                setTypingAudio(false);
                              })
                              .start();
                          }}
                          options={{
                            loop: false,
                            delay: 40,
                            pauseFor: 100000,
                          }}
                        />
                      </div>

                    </>
                    : portionCount === 1 ?
                      <>
                        <div className="upper-portion-2">
                          <div className="riddle-container">
                            <div className="riddle-heading">RIDDLE: 1</div>
                            <Typewriter
                              onInit={(typewriter) => {
                                typewriter
                                  .typeString("I'm a vital part of Shylock's work, a tool that helps piece together the facts. I'm a shade that's always there, a cool and calm presence in the heat of the case. I guide him down the right path, leading to the truth. What am I?")
                                  .callFunction(() => {
                                    setTypingAudio(false);
                                  })
                                  .start();
                              }}
                              options={{
                                loop: false,
                                delay: 40,
                                pauseFor: 100000,
                              }}
                            />
                            <ReactPlayer className={`jasper-video`} url={question1} playing={true} controls={false} volume={1} muted={false} loop={false} playsinline={true} onEnded={jasperVideoEnded} />
                          </div>
                        </div>
                        {/* <input className="input" type="text" /> */}

                      </>
                      : ""}
                  {portionCount === 0 ?
                    <>
                      <div className="boxes-container">
                        <div className="rules-box-container">
                          <AnalogClock {...analogClockTime} />
                        </div>

                        <div className="days-box-container">
                          <span className="days-heading">Daily Quests</span>
                          <div className="days-container">
                            {daysData.map(({ id, day, isOpen }) => {
                              return <div key={id} className={`days-box ${isOpen ? "unlocked-day" : "locked-day"}`} onClick={isOpen ? () => onDayClicked(id) : ""}>
                                {!isOpen ?
                                  <img className="locked-image" src={whiteLock} alt="" />
                                  : ""}
                                <span>{day}</span>
                              </div>
                            })}
                          </div>
                        </div>

                        <div className="time-box-container">
                          <div>
                            <p>Starting Time: 10:30 AM (EST)</p>
                            <p> Quest Live for 24 hours</p>
                          </div>
                        </div>
                      </div>
                    </>
                    : portionCount === 1 ?
                      <>
                        <div className="form-rules-container">
                          <div className="form-box">
                            <label><span>twitter:</span><input className="input-field" type="text" placeholder="@twitter" name="twitterName" value={formData.twitterName} onChange={handleFormData} />
                            </label>
                            <label><span>Answers:</span><input className="input-field" type="text" placeholder="Answer" name="answer" value={formData.answer} onChange={handleFormData}/></label>
                            <button className="submit-btn" onClick={() => submitButton()}>Submit</button>

                          </div>
                          <div className="rules-box">
                            <div className="rules-heading">RULES :</div>
                            <div className="rules">
                              <ul>
                                <li>Participants must provide their accurate Twitter username when participating in the quest.</li>
                                <li>Participants must follow and turn on notifications for both the @shylocknft and @shylockagents Twitter profiles.</li>
                                <li>Participants must tag atleast 3 potential agents (friends) in their respective tweet after completing the quest.</li>
                                <li>Answers should not contain any NSFW (not safe for work) words.</li>
                                <li>Failure to follow any of the above rules will result in disqualification from the quest.</li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </>
                      : ""}

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
