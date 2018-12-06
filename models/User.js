const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
  name: String,
  email: String,
  password: String,
  facebookId: String,
  googleId: String,
  photoURL: String,
  membership: {
    type: Schema.Types.ObjectId,
    ref: 'Plan',
    default: null
  },
  address: {
    type: {
      type: String,
      default: "Point"
    },
    coordinates: [Number]
  },
  pickupDate: String,
}, {
    timestamps: {
      createdAt: 'created_at',
      updatedAt: 'updated_at'
    }
  });

const User = mongoose.model('User', userSchema);
module.exports = User;
