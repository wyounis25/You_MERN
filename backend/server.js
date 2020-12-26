import express from 'express'
import mongoose from 'mongoose'
import Cors from 'cors'
import dailyroutes from './routes/dailyroutes.js'

//App Config
const app = express()
const port = process.env.PORT || 8000
const connection_url = "mongodb+srv://admin:VNM4r9DM6CPeCYqY@cluster0.pt72o.mongodb.net/youdb?retryWrites=true&w=majority"
//MiddleWare
app.use(express.json())
app.use(Cors())
app.use('/daily',dailyroutes)

//DB config
mongoose.connect(connection_url, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
});

// API endpoints
app.get('/', (req,res) => res.status(200).send("HELLO World"))


//Listner
app.listen(port, ()=> console.log(`listening to localhost: ${port}`))

