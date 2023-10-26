const express = require('express')
const expressLayouts = require('express-ejs-layouts')
const app = express()
const PORT = process.env.PORT
const connectDB = require('./config/database')
require('dotenv').config({path: './config/.env'})

connectDB()

app.use(express.urlencoded( {extended: true } ))
app.use(express.static('public'))
app.use(expressLayouts)
app.set('layout', 'layouts/main')
app.set('view engine', 'ejs')

const routes = require('./server/routes/workoutRoutes.js')
app.use('/', routes)

app.listen(process.env.PORT, ()=> console.log(`Listening on port ${PORT}`))