var appointments = require("./appointments.js");
console.log("form.js connected");

function Appontment(name, time, phone, service, vehicle) {
    name: name;
    time: time;
    phone: phone;
    service: service;
    vehicle: vehicle;
};

function makeAppt() {
    var name = $("#nameInput").val().trim();
    var time = $("#timeInput").val();
    var phone = $("#phoneInput").val();
    var service = $("#serviceInput").val().trim();
    var vehicle = $("#vehicleInput").val().trim();

    var newAppointment = new appointments(name, time, service, vehicle);
    appointments.push(newAppointment);
    console.log(newAppointment);
    $("#nameInput").val("");
    $("#serviceInput").val("");
    $("#phoneInput").val("");
    $("#vehicleInput").val("");
}

$("#makeAppt").click(function(event){
    event.preventDefault();
    makeAppt();
})