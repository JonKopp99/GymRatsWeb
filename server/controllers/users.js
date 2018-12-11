
let isLogin = false;
let currentUserUID;
var sessionUser;
var session = require('express-session');
const mongoose = require('mongoose');
var sessionPost;
///var alert = require('alert-node');
//var prompt = require('prompt');
//var share = require('social-share');
const UserSchema = mongoose.model('users', {
    name: String,
    workout_name: String,
    picture_link: String,
})

const GifSchema = mongoose.model('gif', {
    name: String,
    workout_name: String,
    gif_link: String,
})




module.exports = {

    index: (request, response) => {
        UserSchema.find()
        .then(users => {
            //console.log(users)
            response.render('index', {'users': users})
        }).catch(err => {
            console.log(err);
        })


    },

    gif: (request, response) => {
        GifSchema.find()
        .then(users => {
            //console.log(users)
            response.render('gif', {'users': users})
        }).catch(err => {
            console.log(err);
        })


    },

    new: (request, response) => {

        response.render('new', {'name': 'Jon'})

    },

    gifnew: (request, response) => {

        response.render('gifnew', {'name': 'Jon'})

    },

    post: (request, response) => {
        UserSchema.create(request.body).then((user) => {
        //console.log("User: ",request.body);

        response.redirect('/');
        }).catch((err) => {
            console.log(err.message);
        })

    },

    gifpost: (request, response) => {
        GifSchema.create(request.body).then((user) => {
        //console.log("User: ",request.body);

        response.redirect('/gif');
        }).catch((err) => {
            console.log(err.message);
        })

    },
     delete: (request, response) => {
         console.log(request.params.id)
         UserSchema.findByIdAndRemove(request.params.id).then((review) => {
        response.redirect('/');
        }).catch((err) => {
            console.log(err.message);
    })
},
    gifdelete: (request, response) => {
        console.log(request.params.id)
        GifSchema.findByIdAndRemove(request.params.id).then((review) => {
       response.redirect('/gif');
       }).catch((err) => {
           console.log(err.message);
    })
    }
}
