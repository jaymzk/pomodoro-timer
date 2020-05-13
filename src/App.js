import React, {useState, useEffect, useRef} from 'react';
import SetSession from './Components/SetSession'
import SetBreak from './Components/SetBreak'
import TimeLeft from './Components/TimeLeft'

import './App.css';

function App() {
//variables
  const audioElement =useRef(null)

  let [sessionSeconds, setSessionSeconds] = useState(25 * 60)
  let [breakSeconds, setBreakSeconds] = useState(5 * 60)
  let [timerLabelValue, setTimerLabelValue] = useState("Session")
  let [timeLeft, setTimeLeft] = useState(sessionSeconds)
  let [intervalID, setIntervalID] = useState(null)
  let isRunning = intervalID !== null

  //functionality

  const handleClick = (e) => {
    let opID = e.target.id
    console.log(opID)

    switch(opID) {
      case "session-increment":
        console.log("incrementing session")
        const newSessionIncSeconds = sessionSeconds + 60
        if (newSessionIncSeconds <= 60 * 60) {
          setSessionSeconds(newSessionIncSeconds)
        }
        break
      case "session-decrement":
        console.log("decrementing session")
         const newSessionDecSeconds = sessionSeconds - 60
        if (newSessionDecSeconds > 0) {
          setSessionSeconds(newSessionDecSeconds)
        }
        break
        case "break-increment":
          console.log("incrementing break")
          const newBreakIncSeconds = breakSeconds + 60
          if (newBreakIncSeconds <= 60 * 60) {
            setBreakSeconds(newBreakIncSeconds)
          }
          break
        case "break-decrement":
          console.log("decrementing break")
           const newBreakDecSeconds = breakSeconds - 60
          if (newBreakDecSeconds > 0) {
            setBreakSeconds(newBreakDecSeconds)
          }
          break
        case "start_stop":
          console.log("Starting / stopping")
        
    
            if(isRunning) {
                clearInterval(intervalID)
                setIntervalID(null)
        
            } else {
        
            const newIntervalId = setInterval(()=>{
                setTimeLeft(prevTimeLeft => prevTimeLeft -1)
           
            }, 100)
            setIntervalID(newIntervalId)
            }
            break
        case "reset": 
          audioElement.current.load()
          clearInterval(intervalID)
          setIntervalID(null)
          setTimerLabelValue("Session")
          setSessionSeconds(60*25)
          setBreakSeconds(60*5)
          setTimeLeft(60*25)
          break
            

      default:
        return
    }
  }
  //useEffects

  useEffect(()=>{
    setTimeLeft(sessionSeconds)
  },[sessionSeconds])

  useEffect(()=>{
    if(timeLeft===0){
      audioElement.current.play()
      if(timerLabelValue==="Session"){
        setTimerLabelValue("Break")
        setTimeLeft(breakSeconds)
      } else if (timerLabelValue==="Break"){
        setTimerLabelValue("Session")
        setTimeLeft(sessionSeconds)
      }
    }

  },[timeLeft, timerLabelValue, sessionSeconds, breakSeconds ])

 
  return (

    
    <div className="app-container">

    <SetSession
    sessionSeconds={sessionSeconds}
    handleClick={handleClick}
    />

<TimeLeft 
      timerLabelValue={timerLabelValue}
      handleClick={handleClick}
      timeLeft={timeLeft}
      isRunning={isRunning}
    />

    <SetBreak
    breakSeconds={breakSeconds}
    handleClick={handleClick}
    />

   
    <audio id="beep" ref={audioElement}>
      <source src="https://onlineclock.net/audio/options/default.mp3" type="audio/mpeg" />
    </audio>

   
    </div>
    
    
  );
}

export default App;
