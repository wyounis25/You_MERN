import React from 'react'
import './Note.css'
function Note() {
    return (
        <div className="note">
            <form>
            <input placeholder="title" type="text"/>
            <label>Todays Date [timestamp]</label>
            <input type="textarea"/>
            </form>
        </div>
    )
}

export default Note
