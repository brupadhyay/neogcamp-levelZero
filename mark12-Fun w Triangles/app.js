const angle1 = document.querySelector("#angle1");
const angle2 = document.querySelector("#angle2");
const angle3 = document.querySelector("#angle3");
const checkBtn = document.querySelector("#check-btn");
const result = document.querySelector("#result");


function isTriangle(first, second , third){
    if(first + second + third === 180) {
        result.innerHTML = "Yeah, the angles form a triangle🚀";
    } else {
        result.innerHTML = "Oops, the angles didn't make a triangle🙂";
    }
}

checkBtn.addEventListener("click", () => {
    var first = Number(angle1.value);
    var second = Number(angle2.value);
    var third = Number(angle3.value);
    if(first && second && third) {
        isTriangle(first,second,third); 
    } else {
        result.innerHTML = "Any of the fields can't be empty";
    }
});