// dependencies
const mongoose = require('mongoose')
const { Schema } = mongoose

// schema
const bakerSchema = new Schema({
    name: {type:string, require: true},
    startdate: {type: Date, required; true},
    bio: {type: string}

})

// model and export
const Baker = mongoose.model('Baker', bakerSchema)
module.exports = Baker
