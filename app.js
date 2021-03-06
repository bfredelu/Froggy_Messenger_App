
/**
 * Module dependencies.
 */

var express = require('express');
var http = require('http');
var path = require('path');
var handlebars = require('express3-handlebars')

var index = require('./routes/index');
var signUp = require('./routes/signUp');
var todo = require('./routes/todo');
var chat = require('./routes/chat');
var profile = require('./routes/profile');
var changeMyName = require('./routes/changeMyName');
var createtask = require('./routes/createtask');
var whatstodo = require('./routes/whatstodo');
var finished = require('./routes/finished');
var motivate = require('./routes/motivate');
var notifications = require('./routes/notifications');

var changeUsername = require('./routes/changeUsername');
var changePassword = require('./routes/changePassword');
// Example route
// var user = require('./routes/user');

var app = express();

// all environments
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.engine('handlebars', handlebars());
app.set('view engine', 'handlebars');
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.json());
app.use(express.urlencoded());
app.use(express.methodOverride());
app.use(express.cookieParser('IxD secret key'));
app.use(express.session());
app.use(app.router);
app.use(express.static(path.join(__dirname, 'public')));

// development only
if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}

app.get('/', index.view);
app.get('/signUp', signUp.view);
app.get('/todo', todo.view);
app.get('/chat', chat.view);
app.get('/profile', profile.view);

app.get('/createtask', createtask.createTask);
app.get('/whatstodo', whatstodo.answer);
app.get('/motivate', motivate.answer);
app.get('/finished', finished.answer);
app.get('/notifications', notifications.view);

app.get('/changeMyName', changeMyName.view)
app.get('/changeUsername', changeUsername.view)
app.get('/changePassword', changePassword.view)
// Example route
// app.get('/users', user.list);

http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});
