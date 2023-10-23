const express = require('express')
const router = express.Router()
const workoutController = require('../controllers/workoutController')

/**
 * App Routes
 */
router.get('/', workoutController.homepage)


module.exports = router