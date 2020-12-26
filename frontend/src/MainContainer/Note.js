import React, { useState } from 'react'
import './Note.css'
import { Button } from '@material-ui/core';
import FormatAlignJustifyIcon from '@material-ui/icons/FormatAlignJustify';
import FormatAlignCenterIcon from '@material-ui/icons/FormatAlignCenter';
import FormatAlignLeftIcon from '@material-ui/icons/FormatAlignLeft';
import FormatAlignRightIcon from '@material-ui/icons/FormatAlignRight';
import FormatBoldIcon from '@material-ui/icons/FormatBold';
import FormatItalicIcon from '@material-ui/icons/FormatItalic';
import FormatUnderlinedIcon from '@material-ui/icons/FormatUnderlined';
import FormatListBulletedIcon from '@material-ui/icons/FormatListBulleted';
import FormatListNumberedIcon from '@material-ui/icons/FormatListNumbered';
function Note() {
const [bold, setBold] = useState(false)
const [italic, setItalic] = useState(false)
const [underline, setUnderline] = useState(false)

    const currentDay = new Date()
    console.log(currentDay.getUTCMonth())
    console.log(currentDay.toDateString())

    const handleItalic = (e)=> {
        setItalic(!italic)
        e.preventDefault()
        const text = document.getElementsByTagName('textarea')
        if (!italic){
            text[0].style.fontStyle = "italic"  
        }  else {
            text[0].style.fontStyle = "initial"  
    }
    }
    const handleUnderline = (e)=> {
        setUnderline(!underline)
        e.preventDefault()
        const text = document.getElementsByTagName('textarea')
        if (!underline){
            text[0].style.textDecoration = "underline" 
        }  else {
            text[0].style.textDecoration = "initial"  
    }
    }


    const handleBold = (e)=>{
        setBold(!bold)
        e.preventDefault()
        const text = document.getElementsByTagName('textarea')
        if (!bold){
            text[0].style.fontWeight = "bolder"  
        }  else {
            text[0].style.fontWeight = "normal"  
    }
    }
    // else {
        // text[0].style.fontWeight = "bolder"
        // }
        
    

    return (
        <div className="note">
          
            <label>{currentDay.toString()}</label>
            <form>
                <div className="note__title">
            <input  placeholder="title" type="text"/>
                </div>
                <div className="note__icons">
                    <FormatBoldIcon className="icon" onClick={handleBold}/>
                    <FormatUnderlinedIcon className="icon" onClick={handleUnderline}/>
                    <FormatItalicIcon className="icon" onClick={handleItalic}/>
                    <FormatAlignRightIcon className="icon"/>
                    <FormatAlignCenterIcon className="icon"/>
                    <FormatAlignJustifyIcon className="icon"/>
                    <FormatAlignLeftIcon className="icon"/>
                    <FormatListBulletedIcon className="icon"/>
                    <FormatListNumberedIcon className="icon"/>
                </div>
                <div className="note__pad">
            <textarea type="textarea"/>  
                </div>
            </form>
        </div>
    )
}

export default Note
