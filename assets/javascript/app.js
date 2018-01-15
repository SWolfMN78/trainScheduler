// Initialize Firebase
var config = {
    apiKey: "AIzaSyCQR9CpnVBeKM5ltwx4OLmhDWcjCmO07ik",
    authDomain: "trainschedulerfb.firebaseapp.com",
    databaseURL: "https://trainschedulerfb.firebaseio.com",
    projectId: "trainschedulerfb",
    storageBucket: "trainschedulerfb.appspot.com",
    messagingSenderId: "1048519792785"
};
firebase.initializeApp(config);

//access firebase via shorten var.
var database = firebase.database();

//get click control to submit the information
$("#iSubmitBtn").on("click", function(event) {
    event.preventDefault();

    //control to get the user's input.
    var trainName = $("#iTrainName").val().trim();
    var trainDestin = $("#iDestin").val().trim();
    //format the below variable with moment.js
    var trainTime = moment($("#iTrainTime").val().trim(), ).format("LTS");
    //this will be used to alter information in the moment.js later.
    var trainFreq = $("#iFreq").val().trim();

    //variable for firebase to hold the information.
    var newEntry = {
        name: trainName,
        destination: trainDestin,
        time: trainTime,
        frequency: trainFreq
    };

    //update firebase with the variable informaiton:
    database.ref().push(newEntry);

    /*show the information in the console to insure that 
    the information was captured correctly*/
    console.log(newEntry.name);
    console.log(newEntry.destination);
    console.log(newEntry.time);
    console.log(newEntry.frequency);

    //throw an alert to the user to insure it was added.
    alert("New train information added!");

    //clear out the information in the text boxes.
    $("#iTrainName").val("");
    $("#iDestin").val("");
    $("#iTrainTime").val("");
    $("#iFreq").val("");
});