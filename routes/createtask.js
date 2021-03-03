var data = require("../data/todo.json");


exports.createTask = function(request, response) {
	var name = request.query.task;
    console.log(name);
    var newTask = {
        "name": name
    }
    data.tasks.push(newTask);

    response.render("todo", data);

};