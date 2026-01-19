const mongoose = require('mongoose')

const connection = mongoose.connect("mongodb://0.0.0.0/employee").then(()=>{
    console.log("database connected")
})

module.exports = connection
