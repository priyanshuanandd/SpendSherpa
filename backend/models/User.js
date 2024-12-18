// backend/models/User.js
const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  expenses : [
    {
      text:{
        type :String,
        required : true
      },
      amount: {
        type : Number,
        required: true
      },
      createdAt:{
        type:Date,
        default: Date.now
      }
    }
  ]
});

const User = mongoose.model('User', userSchema);
module.exports = User;
