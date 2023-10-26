const express = require('express')
const app = express()
const expressLayouts = require('express-ejs-layouts')
const connectDB = require('./config/database')
const PORT = process.env.PORT
require('dotenv').config({path: './config/.env'})

connectDB()

app.set('view engine', 'ejs')
app.set('layout', 'layouts/main')
app.use(express.urlencoded( {extended: true } ))
app.use(express.static('public'))
app.use(expressLayouts)
app.use(express.json())

const routes = require('./server/routes/workoutRoutes.js')
app.use('/', routes)

app.listen(PORT, ()=>{
    console.log(`Listening on port ${PORT}`)
})