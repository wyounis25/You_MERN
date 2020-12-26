import React, { useState } from 'react'
import './DailyInput.css'
function DailyInput() {
const [dailyLog, setDailyLog] = useState("")

const resetfeild = () => {
    setDailyLog("")
}
   const  handleSubmit = (e) => {
    e.preventDefault()
    console.log(dailyLog)
    resetfeild()
    }


console.log(dailyLog)
    return (
        <div className="daily">
            <form onSubmit={handleSubmit}>
            <input id="mind" placeholder="Whats on your Mind?" value={dailyLog} onChange={(e)=>setDailyLog(e.target.value)}/>
            </form>
            <h1>{dailyLog}</h1>
        </div>
    )
}


export default DailyInput
