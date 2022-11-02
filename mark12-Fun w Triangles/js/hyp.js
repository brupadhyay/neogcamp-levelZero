const base = document.querySelector("#angle1");
const height = document.querySelector("#angle2");
const calc = document.querySelector(".calc-hypotenuse");
const res = document.querySelector("#result");

function findHypotenuse(b,h) {
    var hyp = (Math.sqrt(b*b + h*h)).toFixed(2);
    res.innerText = "Length of the Hypotenuse is " + hyp;
}

calc.addEventListener("click", () => {
    var oneSide = Number(base.value);
    var otherSide = Number(height.value);

    if(oneSide && otherSide){
        findHypotenuse(oneSide, otherSide);
    } else {
        res.innerText = "please input both the fields"
    }   

    
});
