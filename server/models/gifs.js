const mongoose = require('mongoose');

 const GifSchema = new mongoose.Schema({
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
     gif_link: {
         type: String,
         required: [true, "gif_link"],
         trim: true
     },
 }, {
     timestamps: true
 })

 //UserSchema.pre('save', function (done) {

 //})

 const Gif = mongoose.model('Gif', GifSchema);
 module.exports = Gif
