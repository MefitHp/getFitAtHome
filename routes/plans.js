const express = require('express')
const router = express.Router()
const Plan = require('../models/Plan')

//Lista de planes
router.get('/',(req, res, next)=>{
  Plan.find()
    .then(plans=>{
      res.render('plans/list',{plans})
    }).catch(e=>{
      next(e)
    })
})

//Detalle de planes
router.get('/detail/:id',(req, res, next)=>{
  const {id} = req.params
  Plan.findById(id).populate('products')
    .then(plan=>{
      console.log(plan)
      res.render('plans/detail',plan)
    }).catch(e=>next(e))
})

//Actualización de planes
router.get('/update/:id',(req, res, next)=>{
  const {id} = req.params
  const action = `/plans/update/${id}`  
  Plan.findById(id)
    .then(plans=>{
      res.render('plans/form',{plans, action})
    }).catch(e=>next(e))
})

router.post('/update/:id',(req, res, next)=>{
  const {id} = req.params
  Plan.findByIdAndUpdate(id,{$set:req.body},{new:false})
    .then(plan=>{
      res.redirect(`/plans/detail/${id}`)
    }).catch(error=>{
      res.render('plans/form',{plan:req.body,error})
    })
})


module.exports = router