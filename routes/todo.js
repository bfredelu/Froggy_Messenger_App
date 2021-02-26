var data = require('../data/todo.json');

exports.view = function(req, res){
    res.render('todo', data);

};