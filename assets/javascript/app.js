

//Create array to put questions.
var questions = ["Cats are more populr than dogs in the US",
    "Cats can be right-pawed or left-pawed", 
    "Cats talk to each other by meowing",
    "Chocolate is a special treat for cat",
    "Cats can usually squeeze their bodies through any space their head fits",
    "A cat's whiskers are about as long as her body is wide."];

//true //true false false true true
//Create array to put answer selections.
var answerOptions = ["True", "False"];
var answer;
var correct = 0;
var wrong = 0;
var noAnswered = 0;

var intervalId;
var number = 10;
var num = 0;


// start the game (clean the html), restart the varibles, send the first question and set the timer
// in the decrement funtion:decrese counter, look if the counter is 0, if is 0: tell timeout, increase the index for next question,  and show next question

function showQuestions(str) {
    $("#Questions").empty();
    $("#Questions").append(str);
}

//Setting up buttons for selections
function showOptions() {

    $("#True").empty();
    $("#False").empty();
    $("#True").show();
    $("#False").show();
    $("#True").append("<button>" + answerOptions[0] + "</button>");
    $("#False").append("<button>" + answerOptions[1] + "</button>");
    selectedAnswser();

}

function selectedAnswser() {
    $("#True").click(function () {
        answer = true;
        $("#True").hide();
        $("#False").hide();
        if (num > questions.length-1) {
            stop();
            $("#message").text("Game Over");
        }
        setTimeout(function () {
            num++;
            $("#message").empty();
            GameStart();
        }, 2 * 1000)
    });

    $("#False").click(function () {
        answer = false;
        $("#True").hide();
        $("#False").hide();
        if (num > questions.length-1) {
            stop();
            $("#message").text("Game Over");
        }
        setTimeout(function () {
            num++;
            $("#message").empty();
            GameStart();
        }, 2 * 1000)
    });
}

function run() {
    //restart the timer for each question
    clearInterval(intervalId);
    //show time decrease in 1 second.
    intervalId = setInterval(decrement, 1000);
    if (num > questions.length-1) {
        stop();
        $("#message").text("Game Over");
    }
}
function decrement() {
    number--;
    $("#Timer").html("<h2>" + number + "</h2>");
    if (number === 0) {
        stop();
        noAnswered++
        $("#message").text("Time's up");
        // send a message telling timeout (wait 2 seconds and send the next question)      
        setTimeout(function () {
            num++;
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



$("#StartButton").click(function () {

    $("#StartButton").hide();
    GameStart();
    run();

});



