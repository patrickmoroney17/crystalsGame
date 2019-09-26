var winlossText = "";
var wins = 0;
var losses = 0;
var runningTotal = 0;

var computerNum = Math.floor((Math.random() * 102) + 19);
console.log(computerNum);

$("#computer-Num").text(computerNum);

var crystal_1_val = Math.floor((Math.random() * 12) + 1);
console.log(crystal_1_val);
var crystal_2_val = Math.floor((Math.random() * 12) + 1);
console.log(crystal_2_val);
var crystal_3_val = Math.floor((Math.random() * 12) + 1);
console.log(crystal_3_val);
var crystal_4_val = Math.floor((Math.random() * 12) + 1);
console.log(crystal_4_val);
console.log("-------------");


$(document).ready(function () {

    $("#crystal-1").on("click", function (event) {
        runningTotal = crystal_1_val + runningTotal;
        $("#running-Total").text(runningTotal);
        console.log(runningTotal);

        if (runningTotal < computerNum) {
            console.log("next turn");
        } else 

        if (runningTotal === computerNum) {

            console.log("you won");
            wins++;
            $("#wins-Id").text("Wins: " + wins);
            $("#running-Total").text("0");

            console.log("re-init'ng variables");

            runningTotal = 0;

            computerNum = Math.floor((Math.random() * 102) + 19);
            console.log(computerNum);
            $("#computer-Num").text(computerNum);

            crystal_1_val = Math.floor((Math.random() * 12) + 1);
            console.log(crystal_1_val);
            crystal_2_val = Math.floor((Math.random() * 12) + 1);
            console.log(crystal_2_val);
            crystal_3_val = Math.floor((Math.random() * 12) + 1);
            console.log(crystal_3_val);
            crystal_4_val = Math.floor((Math.random() * 12) + 1);
            console.log(crystal_4_val);
            console.log("-------------");

        } else {
        
            console.log("you lost");
            losses++;
            $("#losses-Id").text("Losses: " + losses);
            $("#running-Total").text("0");

            console.log("re-init'ng variables");

            runningTotal = 0;

            computerNum = Math.floor((Math.random() * 102) + 19);
            console.log(computerNum);
            $("#computer-Num").text(computerNum);

            crystal_1_val = Math.floor((Math.random() * 12) + 1);
            console.log(crystal_1_val);
            crystal_2_val = Math.floor((Math.random() * 12) + 1);
            console.log(crystal_2_val);
            crystal_3_val = Math.floor((Math.random() * 12) + 1);
            console.log(crystal_3_val);
            crystal_4_val = Math.floor((Math.random() * 12) + 1);
            console.log(crystal_4_val);
            console.log("-------------");

        } 
    })

    $("#crystal-2").on("click", function (event) {
        runningTotal = crystal_2_val + runningTotal;
        $("#running-Total").text(runningTotal);
        console.log(runningTotal);

        if (runningTotal < computerNum) {
            console.log("next turn");
        } else 

        if (runningTotal === computerNum) {

            console.log("you won");
            wins++;
            $("#wins-Id").text("Wins: " + wins);
            $("#running-Total").text("0");

            console.log("re-init'ng variables");

            runningTotal = 0;

            computerNum = Math.floor((Math.random() * 102) + 19);
            console.log(computerNum);
            $("#computer-Num").text(computerNum);

            crystal_1_val = Math.floor((Math.random() * 12) + 1);
            console.log(crystal_1_val);
            crystal_2_val = Math.floor((Math.random() * 12) + 1);
            console.log(crystal_2_val);
            crystal_3_val = Math.floor((Math.random() * 12) + 1);
            console.log(crystal_3_val);
            crystal_4_val = Math.floor((Math.random() * 12) + 1);
            console.log(crystal_4_val);
            console.log("-------------");

        } else {
        
            console.log("you lost");
            losses++;
            $("#losses-Id").text("Losses: " + losses);
            $("#running-Total").text("0");

            console.log("re-init'ng variables");

            runningTotal = 0;

            computerNum = Math.floor((Math.random() * 102) + 19);
            console.log(computerNum);
            $("#computer-Num").text(computerNum);

            crystal_1_val = Math.floor((Math.random() * 12) + 1);
            console.log(crystal_1_val);
            crystal_2_val = Math.floor((Math.random() * 12) + 1);
            console.log(crystal_2_val);
            crystal_3_val = Math.floor((Math.random() * 12) + 1);
            console.log(crystal_3_val);
            crystal_4_val = Math.floor((Math.random() * 12) + 1);
            console.log(crystal_4_val);
            console.log("-------------");

        } 
    })

    $("#crystal-3").on("click", function (event) {
        runningTotal = crystal_3_val + runningTotal;
        $("#running-Total").text(runningTotal);
        console.log(runningTotal);

        if (runningTotal < computerNum) {
            console.log("next turn");
        } else 

        if (runningTotal === computerNum) {

            console.log("you won");
            wins++;
            $("#wins-Id").text("Wins: " + wins);
            $("#running-Total").text("0");

            console.log("re-init'ng variables");

            runningTotal = 0;

            computerNum = Math.floor((Math.random() * 102) + 19);
            console.log(computerNum);
            $("#computer-Num").text(computerNum);

            crystal_1_val = Math.floor((Math.random() * 12) + 1);
            console.log(crystal_1_val);
            crystal_2_val = Math.floor((Math.random() * 12) + 1);
            console.log(crystal_2_val);
            crystal_3_val = Math.floor((Math.random() * 12) + 1);
            console.log(crystal_3_val);
            crystal_4_val = Math.floor((Math.random() * 12) + 1);
            console.log(crystal_4_val);
            console.log("-------------");

        } else {
        
            console.log("you lost");
            losses++;
            $("#losses-Id").text("Losses: " + losses);
            $("#running-Total").text("0");

            console.log("re-init'ng variables");

            runningTotal = 0;

            computerNum = Math.floor((Math.random() * 102) + 19);
            console.log(computerNum);
            $("#computer-Num").text(computerNum);

            crystal_1_val = Math.floor((Math.random() * 12) + 1);
            console.log(crystal_1_val);
            crystal_2_val = Math.floor((Math.random() * 12) + 1);
            console.log(crystal_2_val);
            crystal_3_val = Math.floor((Math.random() * 12) + 1);
            console.log(crystal_3_val);
            crystal_4_val = Math.floor((Math.random() * 12) + 1);
            console.log(crystal_4_val);
            console.log("-------------");

        } 
    })

    $("#crystal-4").on("click", function (event) {
        runningTotal = crystal_4_val + runningTotal;
        $("#running-Total").text(runningTotal);
        console.log(runningTotal);

        if (runningTotal < computerNum) {
            console.log("next turn");
        } else 

        if (runningTotal === computerNum) {

            console.log("you won");
            wins++;
            $("#wins-Id").text("Wins: " + wins);
            $("#running-Total").text("0");

            console.log("re-init'ng variables");

            runningTotal = 0;

            computerNum = Math.floor((Math.random() * 102) + 19);
            console.log(computerNum);
            $("#computer-Num").text(computerNum);

            crystal_1_val = Math.floor((Math.random() * 12) + 1);
            console.log(crystal_1_val);
            crystal_2_val = Math.floor((Math.random() * 12) + 1);
            console.log(crystal_2_val);
            crystal_3_val = Math.floor((Math.random() * 12) + 1);
            console.log(crystal_3_val);
            crystal_4_val = Math.floor((Math.random() * 12) + 1);
            console.log(crystal_4_val);
            console.log("-------------");

        } else {
        
            console.log("you lost");
            losses++;
            $("#losses-Id").text("Losses: " + losses);
            $("#running-Total").text("0");

            console.log("re-init'ng variables");

            runningTotal = 0;

            computerNum = Math.floor((Math.random() * 102) + 19);
            console.log(computerNum);
            $("#computer-Num").text(computerNum);

            crystal_1_val = Math.floor((Math.random() * 12) + 1);
            console.log(crystal_1_val);
            crystal_2_val = Math.floor((Math.random() * 12) + 1);
            console.log(crystal_2_val);
            crystal_3_val = Math.floor((Math.random() * 12) + 1);
            console.log(crystal_3_val);
            crystal_4_val = Math.floor((Math.random() * 12) + 1);
            console.log(crystal_4_val);
            console.log("-------------");
        } 
    })

});
