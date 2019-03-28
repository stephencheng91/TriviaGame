

//Create array to put questions.
var questions = ["Cats are more populr than dogs in the US",
    "Cats can be right-pawed or left-pawed", "Cats talk to each other by meowing",
    "Chocolate is a special treat for cat",
    "Cats can usually squeeze their bodies through any space their head fits",
    "A cat's whiskers are about as long as her body is wide."];

//true //true false false true true
//Create array to put answer selections.
var answerOptions = ["True", "False"];
var correct = 0;
var wrong = 0;

var intervalId;
var number=10;

function showQuestions(arry) {
    $("#Questions").append(arry);
}

//Setting up buttons for selections
function showOptions(arry) {
    for (var j = 0; j < arry.length; j++) {
        $("#Options").append("<button>"+arry[j]+"</button>");
    }
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

function GameStart(num){
    showQuestions(questions[num]);
    showOptions(answerOptions);
}

$("#StartButton").click(function(){
    
    $("#StartButton").hide();
    run();
    GameStart(1);
    $("#Options").click(function(){

    });

});



