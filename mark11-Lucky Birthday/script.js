const dateOfBirth = document.querySelector("#date-of-birth");
const luckyNumber = document.querySelector("#luckyNumber");
const check = document.querySelector("#check-luck");
const result = document.querySelector("#result");
const removeNote = document.querySelector(".alert");


function isLucky(sum,lucky){
  if(sum && lucky) {
    removeNote.style.display = 'none'; 
    if(sum % lucky === 0) {
        result.innerText = "Your birthday is lucky 🥳";
    } else {
        result.innerText = "Oops, Your birthday is not so lucky 🙁";
    }
  } else {
    result.innerText = "Birth Date or Lucky Number field can't be empty"
  }
    
}

function calculateSum(dob,lucky) {
  var sum = 0;
  for(let i=0; i < dob.length; i++){
    sum += Number(dob.charAt(i));
  }
  isLucky(sum,lucky);
}


function checkEventHandler(){   
    var dob = dateOfBirth.value;
    var lucky = Number(luckyNumber.value);
    dob = dob.replaceAll("-","");
    calculateSum(dob, lucky);
}

check.addEventListener("click", checkEventHandler);
