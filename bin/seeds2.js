const mongoose = require('mongoose')
const Plan = require('../models/Plan')

mongoose.connect("mongodb://mefitdev:30Seconds@ds149382.mlab.com:49382/users-passport")

const plans = [
  {
    planName: "Básico",
    description: "Nuestro plan más accesible, sin embargo, " 
    + "disfrutarás de todo el equipo necesario para ponerte en forma "
    + "sin aburrirte de los mismos ejercicios"
    + "Este plan se recomienda para las personas que quieren empezar "
    + "a ejercitarse por salud y que quieren dedicarle poco tiempo "
    + "a ponerse en forma. Tenemos muchos ejercicios para ti.",
    price: 380,
    photoPlan: "https://res.cloudinary.com/ironhackmigu8/image/upload/v1544059621/memb1.png",
    products:[
      {
        productName: "Mancuernas CAP (40 lbs.)",
        photo: "https://images-na.ssl-images-amazon.com/images/I/81wDb983yaL._SL1500_.jpg",
        size:"Small"
      },
      {
        productName: "Bola medicinal (20 lbs.)",
        photo: "https://images-na.ssl-images-amazon.com/images/I/A1F63iq%2B%2BUL._SL1500_.jpg",
        size:"Medium"
      },
      {
        productName: "Easy Flex para vientre plano",
        photo: "https://images-na.ssl-images-amazon.com/images/I/410%2Brxuft1L.jpg",
        size:"Small"
      },
      {
        productName: "4 tapetes de goma",
        photo: "https://images-na.ssl-images-amazon.com/images/I/91ZJ4Ege%2BfL._SL1500_.jpg",
        size:"Medium"
      }
    ]
  },
  {
    planName: "Estándar",
    description: "Nuestro plan más solicitado, mayor abanico de productos "
    +"que te permitirán trabajar cada parte de tu cuerpo. Nuestros instructores "
    +"lo recomiendan al 100% y han creado ejercicios que te harán ejercitarte "
    +"de una manera más completa.",
    price: 520,
    photoPlan: "https://res.cloudinary.com/ironhackmigu8/image/upload/v1544059621/memb2.png",
    products:[
      {
        productName: "Banco Reebock",
        photo: "https://images-na.ssl-images-amazon.com/images/I/81F8jRwNdhL._SL1500_.jpg",
        size:"Medium"
      },
      {
        productName: "Estación para sentadillas",
        photo: "https://images-na.ssl-images-amazon.com/images/I/51hDOi0AuZL._SL1500_.jpg",
        size:"Large"
      },
      {
        productName: "Pesa rusa (20 lbs.)",
        photo: "https://images-na.ssl-images-amazon.com/images/I/81rtP7oGHZL._SL1500_.jpg",
        size:"Small"
      },
      {
        productName: "Mancuernas Barbell (30 lbs.)",
        photo: "https://images-na.ssl-images-amazon.com/images/I/71MyAF6aRIL._SL1500_.jpg",
        size:"Small"
      },
      {
        productName: "8 tapetes de goma",
        photo: "https://images-na.ssl-images-amazon.com/images/I/91ZJ4Ege%2BfL._SL1500_.jpg",
        size:"Medium"
      }
    ]
  },
  {
    planName: "Premium",
    description: "Los productos de más alta calidad los encontrarás en este plan "
    +"además disfruta de máquinas de remo y barras para hacer press de pecho "
    +"en la comodidad de tu hogar! Además, con este plan disfruta de muchos extras "
    +"que podrás agregar por un bajísimo precio.",
    price: 700,
    photoPlan: "https://res.cloudinary.com/ironhackmigu8/image/upload/v1544059621/memb3.png",
    products:[
      {
        productName: "Máquina de remo",
        photo: "https://images-na.ssl-images-amazon.com/images/I/81WFXdYzbPL._SL1500_.jpg",
        size:"Large"
      },
      {
        productName: "Mancuernas CAP (40 lbs.)",
        photo: "https://images-na.ssl-images-amazon.com/images/I/81wDb983yaL._SL1500_.jpg",
        size:"Small"
      },
      {
        productName: "Banco para press",
        photo: "https://images-na.ssl-images-amazon.com/images/I/81Ggce4tFML._SL1500_.jpg",
        size:"Large"
      },
      {
        productName: "Juego de 6 mancuernas",
        photo: "https://images-na.ssl-images-amazon.com/images/I/917y2jvjjZL._SL1500_.jpg",
        size:"Small"
      },
      {
        productName: "Banco Reebock profesional",
        photo: "https://images-na.ssl-images-amazon.com/images/I/81rrYm5eIUL._SL1500_.jpg",
        size:"Medium"
      },
      {
        productName: "12 tapetes de goma",
        photo: "https://images-na.ssl-images-amazon.com/images/I/91ZJ4Ege%2BfL._SL1500_.jpg",
        size:"Medium"
      }
    ]
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
