// dependencies
const mongoose = require('mongoose')
const { Schema } = mongoose

// schema
const breadSchema = new Schema({
    name: { type: String, required: true },
    hasGluten: Boolean,
    image: { type: String, default: 'http://placehold.it/500x500.png' },
    baker: {
      type: Schema.Types.ObjectID,
      ref: 'Baker'
    }
})
// At the top with your dependencies: 
const Bread = require('./bread')

[ ... ]

// Virtuals:
bakerSchema.virtual('breads', {
    ref: 'Bread',
    localField: '_id',
    foreignField: 'baker'
})


// model and export
const Baker = mongoose.model('Baker', bakerSchema)
module.exports = Baker
