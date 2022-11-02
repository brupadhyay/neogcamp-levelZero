const form = document.querySelector(".quiz");
const quizbtn = document.querySelector("#quiz-triangle-btn");
const result = document.querySelector("#result");

const correctAnswers = ['90°', "right angled", "one right angle", "12, 16, 20", "Equilateral Triangle", '100°', '40°', 'a + b + c', '0', '45°'];


function calculateScore(data) {
    var index = 0;
    var score = 0;
    for(let value of data.values()){
        if(value === correctAnswers[index]) {
            score++;
        }
        index++;
    }
    result.innerText = "Your score is " + score;
}

quizbtn.addEventListener("click", () => {
    const data = new FormData(form);
    calculateScore(data);
});