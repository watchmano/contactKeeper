const mongoose = require('mongoose')
const config = require('config')
const chalk = require('chalk')
const db = config.get('mongoURI')


const connectDB = async () => {

    try {
        await mongoose
        .connect(db, {
            useNewUrlParser: true,
            useCreateIndex: true,
            useFindAndModify: true
    })
        const dbRunMsg = chalk.green.bold('MongoDB Connected')
        console.log(dbRunMsg)
    } catch (err) {
        console.error(err.message)
        process.exit(1)
    }
    
      
}

module.exports = connectDB