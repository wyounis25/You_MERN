import React from 'react'
import './Container.css'
import DailyInput from './DailyInput'
import Note from './Note'
function Container() {
    return (
        <div className="main">
            <DailyInput/>
            {/* <Note/> */}
        </div>
    )
}

export default Container
