import mongoose from 'mongoose'

const dailySchema = mongoose.Schema({
    log: {
         type: String,
         required: true,
     },
     time : { type : Date, default: Date.now }

})

const DailyLog = mongoose.model('daily',dailySchema)
export default DailyLog