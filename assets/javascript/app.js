

//Create array to put questions.
var questions = ["Cats are more populr than dogs in the US",
    "Cats can be right-pawed or left-pawed", "Cats talk to each other by meowing",
    "Chocolate is a special treat for cat",
    "Cats can usually squeeze their bodies through any space their head fits",
    "A cat's whiskers are about as long as her body is wide."];

//true //true false false true true
//Create array to put answer selections.
var answerOptions = ["True", "False"];
var answer = false;
var correct = 0;
var wrong = 0;

var intervalId;
var number = 10;

function showQuestions(arry) {
    $("#Questions").empty();
    $("#Questions").append(arry);
}

//Setting up buttons for selections
function showOptions(arry) {

    $("#True").empty();
    $("#False").empty();
    $("#True").append("<button>" + arry[0] + "</button>");
    $("#False").append("<button>" + arry[1] + "</button>");

    $("#True").click(function () {
        answer = true;
        $("#True").hide();
        $("#False").hide();
    });

    $("#False").click(function () {
        answer = false;
        $("#True").hide();
        $("#False").hide();
    });
}

function run() {
    //restart the timer for each question
    clearInterval(intervalId);
    //show time decrease in 1 second.
    intervalId = setInterval(decrement, 1000);
}
function decrement() {
    number--;
    $("#Timer").html("<h2>" + number + "</h2>");
    if (number === 0) {
        stop();
    }
}
function stop() {
    clearInterval(intervalId);
}

function GameStart(num) {
    showQuestions(questions[num]);
    showOptions(answerOptions);
}



$("#StartButton").click(function () {

    $("#StartButton").hide();

    for (var i = 0; i < questions.length; i++) {
        run();
        GameStart(i);
        //Setting time out for 10 seconds
        
        if (i === 0 && answer === true) {
            correct++;
        } else if (i === 0 && answer === false) {
            wrong++;
        }
        $("#correct").text(correct);
        $("#wrong").text(wrong);

    }

});



