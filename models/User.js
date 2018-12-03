const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
  name: String,
  email: String,
  password: String,
  facebookId: String,
  photoURL: String,
  membership: {
    type: mongoose.Types.ObjectId,
    default: null
  }
}, {
    timestamps: {
      createdAt: 'created_at',
      updatedAt: 'updated_at'
    }
  });

const User = mongoose.model('User', userSchema);
module.exports = User;
