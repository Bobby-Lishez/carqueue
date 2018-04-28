var appointments = require("./appointments");

$(document).on("ready", function(){
    var times = [];
    appointments.map(i => times.push(i.time));
})