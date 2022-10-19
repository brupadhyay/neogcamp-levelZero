var readlinesync = require("readline-sync");

console.log("Let's begin!");
//Score Variable
var score = 0;

//leaderBoard
var highScorer = [
  {
    name: "ujjwal",
    score: 5
  },
  {
    name: "harsh",
    score: 3
  }
];

//input the name
var userName = readlinesync.question("What's your name: ");
console.log("Welcome " + userName + " to How well do you know brupadhyay!");
console.log("\nSome instructions before we get started: \n1] Here for each correct answer your score will be incremented by 1.\n2] At the end, I'll display the LeaderBoards.\n");
var ques1 = {
  question: "What is my nickname? ",
  ans: "ujjwal"
};
var ques2 = {
  question: "Where do I study currently? ",
  ans: "vjti"
};
var ques3 = {
  question: "Where do I live? ",
  ans: "thane"
};
var ques4 = {
  question: "Which is my favourite sport? ",
  ans: "cricket"
};
var ques5 = {
  question: "Am I 20 years old? ",
  ans: "yes"
};
var ques6 = {
  question: "Do I assist my colleagues? ",
  ans: "yes"
};

//array of questions
var questions = [ques1,ques2,ques3,ques4,ques5,ques6];

function check(question, ans){
  var userAnswer = readlinesync.question(question);
  if(userAnswer.toLowerCase() === ans.toLowerCase()){
    console.log("\nYou are right!");
    score++;
  }
  else {
    console.log("\nYou are wrong!");
    console.log("Correct Answer is "+ ans.toUpperCase())
  }
  console.log("Your score is:", score);
  console.log("\n======================\n");
}
//starting the quiz 
function play(){
  for(var i = 0 ; i < questions.length; i++){
    var question = questions[i].question;
    var ans = questions[i].ans;
    check(question, ans); //keep iterating questions
    for(var j = 0; j < highScorer.length; j++){
      if(score > highScorer[j].score){
        console.log("\nAwesome, " + userName + " you just broke a record.\n");
        break;
      }
    }
  }
}

function UpdateLeaderBoard(){
  for(var j = 0; j < highScorer.length; j++){
    if(score > highScorer[j].score){
      var newPlayer = {
        name: userName,
        score: score
      };
      highScorer.push(newPlayer);
      break;
    }
  }
}

//first start the quiz
play();
UpdateLeaderBoard();

//after the questions end
console.log("\nYour final Score is:", score);
console.log("\n===========Game Over===========");
function leaders(){
  console.log("\nFinal LeaderBoard is: ");
  for(var i = 0 ; i < highScorer.length; i++){
    var name = highScorer[i].name;
    var scored = highScorer[i].score;
    console.log(name + " : " + scored);
  }
}
//print
leaders();