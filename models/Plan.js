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
  products:[{
    type: Schema.Types.ObjectId,
    ref: 'Product'
  }]
},{
  timestamps:true
})

const Plan = mongoose.model('Plan', planSchema)

module.exports = Plan