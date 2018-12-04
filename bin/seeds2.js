const mongoose = require('mongoose')
const Plan = require('../models/Plan')

const dbName = 'porDefinir'
mongoose.connect(`mongodb://localhost/${dbName}`)

const plans = [
  {
    planName: "Básico",
    description: "Nuestro plan más accesible, sin embargo, " 
    + "disfrutarás de todo el equipo necesario para ponerte en forma "
    + "sin aburrirte de los mismos ejercicios"
    + "Este plan se recomienda para las personas que quieren empezar "
    + "a ejercitarse por salud y que quieren dedicarle poco tiempo "
    + "a ponerse en forma. Tenemos muchos ejercicios para ti.",
    price: "380 pesos"
  },
  {
    planName: "Estándar",
    description: "Nuestro plan más solicitado, mayor abanico de productos "
    +"que te permitirán trabajar cada parte de tu cuerpo. Nuestros instructores "
    +"lo recomiendan al 100% y han creado ejercicios que te harán ejercitarte "
    +"de una manera más completa.",
    price: "520 pesos"
  },
  {
    planName: "Premium",
    description: "Los productos de más alta calidad los encontrarás en este plan "
    +"además disfruta de máquinas de remo y barras para hacer press de pecho "
    +"en la comodidad de tu hogar! Además, con este plan disfruta de muchos extras "
    +"que podrás agregar por un bajísimo precio.",
    price: "700 pesos"
  }
]

Plan.create(plans)
.then(plans=>{
  console.log(`Has agregado ${plans.length} planes`)
  mongoose.connection.close()
})
.catch(e=>{
  console.log(e)
})
