const passport = require("passport")
const User = require("../models/User")
const FacebookStrategy = require("passport-facebook");

//facebook
passport.use(
  new FacebookStrategy(
    {
      clientID: process.env.FID,
      clientSecret: process.env.FSECRET,
      callbackURL: "https://get-fit-at-home.herokuapp.com/auth/callback/facebook",
      profileFields: ['displayName', 'emails', 'picture.type(large)']
    },
    function (accessToken, refreshToken, profile, cb) {
      User.findOne({ facebookId: profile.id }).then(user => {
        if (user) return cb(null, user);
        return User.create({
          name: profile.displayName,
          email: profile.emails[0].value,
          photoURL: profile.photos[0].value,
          facebookId: profile.id
        })
          .then(user => cb(null, user))
          .catch(err => cb(err));
      });
    }
  )
)


module.exports = passport;