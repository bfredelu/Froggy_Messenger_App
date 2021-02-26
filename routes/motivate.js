var data = require("../data/chat.json");


exports.answer = function(request, response) {
	// var name = request.query.task;
    // console.log(name);
    var yourReply = {
        "content": "Please motivate me!"
    }
    // data.tasks.push(newTask)

    var froggyAnswer = {
    
        "froggy": [
            {
                "content": "I believe in you!"
            },
            {
                "content": "Is there anything else you need?"
            }
        ],
        "reply": [
            {
                "content": "What's a to-do list?",
                "link": "/whatstodo"
            },
            {
                "content": "I finished a task. Now what?",
                "link": "/finished"
            }
        ],
        "you": [
        ]
    }

    index = data.messagegroups.length - 1;

    data.messagegroups[index].you.push(yourReply);

    delete data.messagegroups[index].reply;

    data.messagegroups.push(froggyAnswer);

    response.render("chat", data);

    // $(".container").stop().animate({ scrollTop: $(".container")[0].scrollHeight}, 1000);

};