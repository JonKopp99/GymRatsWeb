
const users = require('../controllers/users.js')
module.exports = function Route(app, server) {


    var session = require('express-session');
    var sessionUser;


    //Displays all users.
    app.get('/', users.index);

    app.get('/gif', users.gif);

    app.get('/user/new', users.new);

    app.get('/user/gifnew', users.gifnew);

    app.post('/user', users.post);

    app.post('/gifpost', users.gifpost);

    app.get('/user/destroy/:id', users.delete);

    app.get('/gif/destroy/:id', users.gifdelete);
}
