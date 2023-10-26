const mongoose = require('mongoose')

//function that allows me to connect to my DB using Mongoose
//this function must be called
const connectDB = async () => {
  try {
    //process.env.DB_STRING is an environment variable
    const conn = await mongoose.connect(process.env.DB_STRING)

    console.log(`MongoDB Connected: ${conn.connection.host}`)
  } catch (err) {
    console.error(err)
    process.exit(1)
  }
}

//function is getting exported to be able to be used elsewhere
module.exports = connectDB