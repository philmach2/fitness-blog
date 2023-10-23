const express = require('express')
const expressLayouts = require('express-ejs-layouts')

const app = express()
const PORT = process.env.PORT || 4444

require('dotenv').config()

app.use(express.urlencoded( {extended: true } ))
app.use(express.static('public'))
app.use(expressLayouts)

app.set('layout', 'layouts/main')
app.set('view engine', 'ejs')

const routes = require('./server/routes/workoutRoutes.js')
app.use('/', routes)

app.listen(PORT, ()=> console.log(`Listening on port ${PORT}`))