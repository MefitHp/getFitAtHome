const express = require('express')
const router = express.Router()
const Product = require('../models/Product')
const Plan = require('../models/Plan')


//create Products
router.get('/new/:planId',(req, res, next)=>{
  const {planId} = req.params
  const action = `/products/new/${planId}`
  res.render('products/form',{action})
})

router.post('/new/:planId',(req, res, next)=>{
  const {planId} = req.params
  req.body['planID'] = planId
  Product.create(req.body)
    .then(product=>{
      Plan.findByIdAndUpdate(planId,{$push:{products:product._id}})
        .then(plan=>{
          res.redirect(`/products/detail/${product._id}`)
        }).catch(e=>next(e))     
    }).catch(error=>{
      res.render('products/form',{error,product:req.body})
    })
})

//product detail
router.get('/detail/:id',(req, res, next)=>{
  const {id} = req.params
  Product.findById(id).populate('membership')
    .then(product=>{
      console.log(product)
      res.render('products/detail',product)
    }).catch(e=>next(e))
})


module.exports = router