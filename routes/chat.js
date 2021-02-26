var data = require('../data/chat.json');

exports.view = function(req, res){
    res.render('chat', data);
};