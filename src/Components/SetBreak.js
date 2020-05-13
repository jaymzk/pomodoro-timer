import React from 'react'
import moment from 'moment'

const SetBreak= ({breakSeconds, handleClick}) => {

    let breakMinutes = moment.duration(breakSeconds, 's').asMinutes()

    return(
        <div className="set-timer-container">
        <div className="number-controller">
        <button id="break-increment" onClick={handleClick}>+</button>
        <div class="display-container">
        <p id="break-length"> {breakMinutes} </p>
        </div>
        <button id="break-decrement" onClick={handleClick}>-</button>
        </div>
        <p id="break-label">Break Length</p>
        </div>
    )
}
export default SetBreak