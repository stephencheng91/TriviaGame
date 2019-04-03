

//Create array to put questions.
var questions = ["Cats are more populr than dogs in the US",
    "Cats can be right-pawed or left-pawed",
    "Cats talk to each other by meowing",
    "Chocolate is a special treat for cat",
    "Cats can usually squeeze their bodies through any space their head fits",
    "A cat's whiskers are about as long as her body is wide."];

//true //true false false true true
var answerOptions = ["True", "False"];
var correct = 0;
var wrong = 0;
var noAnswered = 0;

//Create array to put set answer, 0 is unanswer, 1 is true, 2 is false
var answer = [1, 1, 2, 2, 1, 1];

//Create array to put answer selections.
var answerSelected = [];
var answerValue;

var intervalId;
var number = 10;
var num = 0;


// start the game (clean the html), restart the varibles, send the first question and set the timer
// in the decrement funtion:decrese counter, look if the counter is 0, if is 0: tell timeout, increase the index for next question,  and show next question

function showQuestions(str) {
    $("#Questions").empty();
    $("#Questions").append(str);
    num++;
}

//Setting up buttons for selections
function showOptions() {
    $("#True").empty();
    $("#False").empty();
    $("#True").show();
    $("#False").show();
    $("#True").append("<button id='T'>" + answerOptions[0] + "</button>");
    $("#False").append("<button id='F'>" + answerOptions[1] + "</button>");

    $("#T").click(function () {
        $("#True").empty();
        $("#False").empty();
        answerValue = 1;
        answerSelected.push(answerValue);
        console.log(answerSelected);
        if (num > questions.length - 1) {
            stop();
            $("#message").text("Game Over");
            result();
        }
        timeout();
    });

    $("#F").click(function () {
        $("#True").empty();
        $("#False").empty();
        answerValue = 2;
        answerSelected.push(answerValue);
        console.log(answerSelected);
        if (num > questions.length - 1) {
            stop();
            $("#message").text("Game Over");
            result();
        }
        timeout();

    });

}

function timeout() {
    setTimeout(function () {
        $("#message").empty();
        GameStart();
    }, 2 * 1000)
}

function run() {
    //restart the timer for each question
    clearInterval(intervalId);
    //show time decrease in 1 second.
    intervalId = setInterval(decrement, 1000);
    if (num > questions.length - 1) {
        stop();
        $("#message").text("Game Over");
        result();
    }
}
function decrement() {
    number--;
    $("#Timer").html("<h2>" + number + "</h2>");
    if (number === 0) {
        stop();
        answerValue = 0;
        answerSelected.push(answerValue);
        console.log(answerSelected);
        noAnswered++
        $("#message").text("Time's up");
        // send a message telling timeout (wait 2 seconds and send the next question)      
        setTimeout(function () {
            $("#message").empty();
            GameStart();
        }, 2 * 1000)
    }

}

function stop() {
    clearInterval(intervalId);
}

function GameStart() {
    stop();
    number = 10;
    run();
    showQuestions(questions[num]);
    showOptions();


}

function result() {
    for (var i = 0; i < questions.length; i++) {
        if (answerSelected[i] != answer[i]) {
            wrong++;
        } else {
            correct++;
        }
    }
    $("#correct").text("Correct: " + correct);
    $("#wrong").text("Wrong: " + wrong);
}



$("#StartButton").click(function () {

    $("#StartButton").hide();
    GameStart();
    run();

});



