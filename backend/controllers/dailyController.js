import Dailylog from '../models/Daily.js'
import aysncHandler from 'express-async-handler'


const getDailyLogs = aysncHandler(async (req,res) => {
    const dailyLogs = await Dailylog.find({})
    res.json(dailyLogs)
})

const postDailyLogs = aysncHandler(async (req,res) => {
    const {log} = req.body;
    const newDailyLog = await Dailylog.create({
        log
    })
    if (newDailyLog){
        res.status(200).json(newDailyLog)
    }else {
        res.status(400);
        throw new Error("Space left Empy")
    }
})
export {getDailyLogs,postDailyLogs}