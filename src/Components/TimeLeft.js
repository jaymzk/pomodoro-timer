import React from 'react'
import moment from 'moment'
import momentDurationFormatSetup from 'moment-duration-format'

momentDurationFormatSetup(moment)

const TimeLeft = ({timerLabelValue, handleClick, timeLeft, isRunning}) => {

    let formattedTimeLeft = moment.duration(timeLeft, 's').format('mm:ss', {trim:false})

    return (
        <div className="timer-container">
        
        <p id="timer-label">{timerLabelValue}</p>
        <p id="time-left">{formattedTimeLeft}</p>
        
        <div id="button-container">
        <button id="start_stop" onClick={handleClick}>{isRunning ? "Stop" : "Start"}</button>
        <button id="reset" onClick={handleClick}>Reset</button>
        </div>
       
        </div>

    )
}

export default TimeLeft