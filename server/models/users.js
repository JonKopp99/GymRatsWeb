 const mongoose = require('mongoose');


  const UserSchema = new mongoose.Schema({
      name: {
          type: String,
          required: [true, "name"],
          trim: true
      },
      workout_name: {
          type: String,
          required: [true, 'workout_name'],
          trim: true
      },
      picture_link: {
          type: String,
          required: [true, "picture_link"],
          trim: true
      },
  }, {
      timestamps: true
  })

  //UserSchema.pre('save', function (done) {

  //})

  const User = mongoose.model('User', UserSchema);
  module.exports = User
