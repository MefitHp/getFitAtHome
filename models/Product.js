const mongoose = require('mongoose')
const Schema = mongoose.Schema

const productSchema = new Schema({
  productName: String,
  price: Number,
  description: String,
  weight: Number,
  photo: String,
  size:{
    type: String,
    enum: ["Small", "Medium", "Large"]
  },
  membership:{
    type: Schema.Types.ObjectId,
    ref: 'Plan'
  }
},{
  timestamps:true
})

const Product = mongoose.model('Product', productSchema)

module.exports = Product