var database = firebase.database();

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

//get click control to submit the information
$("#iSubmitBtn").on("click", function(event) {
    event.preventDefault();
});

//control to get the user's input.
var trainName = $("#iTrainName").val().trim();
var trainDestin = $("#iDestin").val().trim();
//format the below variable with moment.js
var trainTime = moment($("#iTrainTime").val().trim());
var trainFreq = $("#iFreq".val().trim());