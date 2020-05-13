import React from 'react'
import moment from 'moment'

const SetSession= ({sessionSeconds, handleClick}) => {

    let sessionMinutes = moment.duration(sessionSeconds, 's').asMinutes()

    return(
        <div className="set-timer-container">
        <div className="number-controller">
         <button id="session-increment" onClick={handleClick}>+</button>
        <div className="display-container">
        <p id="session-length"> {sessionMinutes} </p>
        </div>
        <button id="session-decrement" onClick={handleClick}>-</button>
        </div>
        
        <p id="session-label">Session Length</p>
        </div>
        
    )
}
export default SetSession