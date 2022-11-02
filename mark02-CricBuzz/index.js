var readlinesync = require("readline-sync");

var score = 0; //score global variable

console.log("Namaste!, Welcome to CLI Cricket-Quiz App.");

var userName = readlinesync.question("Enter your Name? ")
console.log("Hello " + userName + "!");
console.log("In this quiz, you will be awarded 1 point for each correct answer. \nIf you beat High-Scores, your name will be displayed on the LeaderBoard.\n");
console.log("So without further delay, Let's get started! \n");
//highScore data
var highScores = [
  {
    name: "bhavesh",
    score: 8
  },
  {
    name: "john snow",
    score: 5
  }
];

var questions = [
  {
    num: "first",
    question: "Who won the inaugural ICC Men's T20 World Cup? ",
    a: "A. India",
    b: "B. Australia",
    c: "C. South Africa",
    d: "D. England",
    ans: "a"
  },
  {
    num: "second",
    question: "Who won the first ever ODI ICC Men's World cup? ",
    a: "A. India",
    b: "B. Australia",
    c: "C. South Africa",
    d: "D. West Indies",
    ans: "d"
  },
  {
    num: "third",
    question: "How much is the distance between the wickets? ",
    a: "A. 24",
    b: "B. 22",
    c: "C. 15",
    d: "D. 16",
    ans: "b"
  },
  {
    num: "fourth",
    question: "How many types of bowlers are there? ",
    a: "A. 2",
    b: "B. 6",
    c: "C. 3",
    d: "D. 4",
    ans: "a"
  },
  {
    num: "fifth",
    question: "Who is the first batsman to cross 10,000 runs in tests? ",
    a: "A. Sunil Gavaskar",
    b: "B. Sachin Tendulkar",
    c: "C. Allan Border",
    d: "D. Don Bradman",
    ans: "a"
  },
  {
    num: "sixth",
    question: "Which has won most number of ICC World Cups? ",
    a: "A. India",
    b: "B. Australia",
    c: "C. England",
    d: "D. Pakistan",
    ans: "b"
  },
  {
    num: "seventh",
    question: "What is the nickname of Sachin Tendulkar? ",
    a: "A. The Genius",
    b: "B. The Grand Master",
    c: "C. Expert of Cricket",
    d: "D. Master Blaster",
    ans: "d"
  },
  {
    num: "eighth",
    question: "Which player has scored most ducks in International Cricket? ",
    a: "A. Muttiah Muralitharan",
    b: "B. S T Jayasuriya	",
    c: "C. Shahid Afridi",
    d: "D. Aakash Chopra",
    ans: "a"
  },
  {
    num: "ninth",
    question: "Which player has All-Time Highest ICC Men's Batting T20I ratings? ",
    a: "A. Virat Kohli",
    b: "B. Aaron Finch",
    c: "C. Dawid Malan",
    d: "D. Babar Azam",
    ans: "c"
  },
  {
    num: "tenth",
    question: "Which is the only bowler from India to take 10 wickets in a single match? ",
    a: "A. Jasprit Bumrah",
    b: "B. Anil Kumble",
    c: "C. Harbhajan Singh",
    d: "D. Ravichandran Ashwin",
    ans: "b"
  },
  {
    num: "eleventh",
    question: "Which player holds the record of fastest delivery till date? ",
    a: "A. Brett Lee",
    b: "B. Mitchell Starc",
    c: "C. Umran Malik",
    d: "D. Shoaib Akhtar",
    ans: "d"
  },
  {
    num: "last",
    question: "Who has hit the longest six in cricket history? ",
    a: "A. Shahid Afridi",
    b: "B. Yuvraj Singh",
    c: "C. Liam Livingstone",
    d: "D. Brett Lee",
    ans: "a"
  }
];


function play(QnA) {
  var questionNumber = QnA.num;
  console.log("Here is your " + questionNumber + " question -> \n");
  console.log(QnA.question + "\n");
  console.log(QnA.a + "\n");
  console.log(QnA.b + "\n");
  console.log(QnA.c + "\n");
  console.log(QnA.d + "\n");


  var userAnswer = readlinesync.question("Enter your Answer Option: ");

  if (QnA.ans === userAnswer.toLowerCase()) {
    console.log("\nYou are right!");
    score = score + 1;
  } else {
    console.log("\nYou are wrong! ");
    console.log("Correct Option is " + QnA.ans.toUpperCase() + ".");
  }
  console.log("Your current score is:", score + "\n");
}

function go() {
  for (var i = 0; i < questions.length; i++) {
    play(questions[i]);
  }
  console.log("You have completed the Quiz.\n");
}

function calScore() {
  console.log("Your final score is:", score);

  console.log("\n");

  for (var i = 0; i < highScores.length; i++) {
    if (score >= highScores[i].score) {
      var newEntry = {
        name: userName,
        score: score
      };
      highScores.push(newEntry);
      break;
    }
  }
}

function printLeaderBoard() {
  console.log("-----------Game Over-----------\n");
  console.log("Here is the LeaderBoard as promised -> \n");
  for (var j = 0; j < highScores.length; j++) {
    var name = highScores[j].name;
    var score = highScores[j].score;
    console.log("Name: " + name + ", Score:", score);
    console.log("\n");
  }
}

go();
calScore();
printLeaderBoard();
console.log("Thankyou for your time and patience! \nIf you enjoyed playing the quiz, then please share it to your Friends Circle.");
