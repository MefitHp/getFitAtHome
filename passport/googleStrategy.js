// const passport = require("passport")
// const User = require("../models/User")
// const GoogleStrategy = require("passport-google-oauth").OAuth2Strategy;

// passport.use(new GoogleStrategy({
//   clientID: process.env.clientID,
//   clientSecret: process.env.clientSecret,
//   callbackURL: "https://localhost:3000/auth/google/callback"
// },
// function(accessToken, refreshToken, profile, done) {
//   User.findOne({ googleId:profile.id })
//     .then(user=>{
//       if(!user){
//         User.register({ googleId:profile.id })
//       }else return done(err, user);
//     })
// }
// ));




// function(accessToken, refreshToken, profile, done) {
//      User.findOrCreate({ googleId: profile.id }, function (err, user) {
//        return done(err, user);
//      });
//   }