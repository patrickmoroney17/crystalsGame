var winlossText = "";
var wins = 0;
var losses = 0;
var runningTotal = 0;

var computerNum = Math.floor((Math.random() * 102) + 19);

$("#computer-Num").text(computerNum);

var crystal_1_val = Math.floor((Math.random() * 12) + 1);
var crystal_2_val = Math.floor((Math.random() * 12) + 1);
var crystal_3_val = Math.floor((Math.random() * 12) + 1);
var crystal_4_val = Math.floor((Math.random() * 12) + 1);

function reset() {

    runningTotal = 0;

    var computerNum = Math.floor((Math.random() * 102) + 19);

    $("#computer-Num").text(computerNum);

    crystal_1_val = Math.floor((Math.random() * 12) + 1);
    crystal_2_val = Math.floor((Math.random() * 12) + 1);
    crystal_3_val = Math.floor((Math.random() * 12) + 1);
    crystal_4_val = Math.floor((Math.random() * 12) + 1);
}

$(document).ready(function () {

    $("#crystal-1").on("click", function (event) {
        runningTotal = crystal_1_val + runningTotal;
        $("#running-Total").text(runningTotal);

        if (runningTotal < computerNum) {
        } else 

        if (runningTotal === computerNum) {

            wins++;
            $("#wins-Id").text("Wins: " + wins);
            $("#running-Total").text("0");
            reset();

        } else {
        
            losses++;
            $("#losses-Id").text("Losses: " + losses);
            $("#running-Total").text("0");
            reset();

        } 
    })

    $("#crystal-2").on("click", function (event) {
        runningTotal = crystal_2_val + runningTotal;
        $("#running-Total").text(runningTotal);

        if (runningTotal < computerNum) {
        } else 

        if (runningTotal === computerNum) {

            wins++;
            $("#wins-Id").text("Wins: " + wins);
            $("#running-Total").text("0");
            reset();

        } else {
        
            losses++;
            $("#losses-Id").text("Losses: " + losses);
            $("#running-Total").text("0");
            reset();

        } 
    })

    $("#crystal-3").on("click", function (event) {
        runningTotal = crystal_3_val + runningTotal;
        $("#running-Total").text(runningTotal);

        if (runningTotal < computerNum) {
        } else 

        if (runningTotal === computerNum) {

            wins++;
            $("#wins-Id").text("Wins: " + wins);
            $("#running-Total").text("0");
            reset();

        } else {
        
            losses++;
            $("#losses-Id").text("Losses: " + losses);
            $("#running-Total").text("0");
            reset();

        } 
    })

    $("#crystal-4").on("click", function (event) {
        runningTotal = crystal_4_val + runningTotal;
        $("#running-Total").text(runningTotal);

        if (runningTotal < computerNum) {
        } else 

        if (runningTotal === computerNum) {

            wins++;
            $("#wins-Id").text("Wins: " + wins);
            $("#running-Total").text("0");
            reset();

        } else {
        
            losses++;
            $("#losses-Id").text("Losses: " + losses);
            $("#running-Total").text("0");
            reset();

        } 
    })

});
