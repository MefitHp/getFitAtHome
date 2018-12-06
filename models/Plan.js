const mongoose = require('mongoose')
const Schema = mongoose.Schema

const planSchema = new Schema({
  planName: {
    type: String,
    enum:["Básico", "Estándar", "Premium"],
    default: "Básico"
  },
  description: String,
  price: Number,
  photoPlan:String,
  products:Array
},{
  timestamps:true
})

const Plan = mongoose.model('Plan', planSchema)

module.exports = Plan