// require mongoose 
const mongoose = require('mongoose')
// creating shorthand for the Schema constructor 
const { Schema } = mongoose 


const breadSchema = new Schema({
  name: { type: String, required: true },
  hasGluten: { type: Boolean },
  image: { type: String, default: 'http://placehold.it/500x500.png' }
})

// helper methods 
// instance methods
breadSchema.methods.getBakedBy = function(){
  return `${this.name} was baked with love by ${this.baker}`
}
/// static methods 
breadSchema.methods.getBakedBy = function(bakermname){
  return this.find({baker:name})
}

const Bread = mongoose.model('Bread', breadSchema)

module.exports = Bread
