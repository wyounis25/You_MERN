import express from 'express'
const router = express.Router()
import {getDailyLogs,postDailyLogs} from '../controllers/dailyController.js'

router.route('/').get(getDailyLogs)
router.route('/').post(postDailyLogs)
export default router