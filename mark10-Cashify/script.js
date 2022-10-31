const billAmount = document.querySelector("#bill-amount");
const billTitle = document.querySelector("#bill-heading");
const cashGiven = document.querySelector("#cash-given");
const cashTitle = document.querySelector("#cash-heading");
const nextBtn = document.querySelector("#next");
const calculate = document.querySelector("#check-button");
const message = document.querySelector("#error-message");
const noOfNotes = document.querySelectorAll(".finalChange");

//no of notes array
const table = document.querySelector("#return");

//in order to get minimum number of notes we start with maximum value
const notesValue = [2000,500,100,20,10,5,1];


function returnChange(remAmt) {    
    if(remAmt !== 0) message.style.display = 'none';
    for(let i = 0; i < notesValue.length; i++){
        noOfNotes[i].innerText = Math.floor(remAmt / notesValue[i]);
        remAmt = remAmt % notesValue[i];
    }
    table.style.display = 'block';
}

function calcHandler() {
    
    var bill = Number(billAmount.value);
    var cash = Number(cashGiven.value);

    if( cash >= bill ){
        var remAmt = cash - bill;
        if(remAmt == 0){
            message.style.display = 'block';
            message.innerText = "No need to return change";
        }
        returnChange(remAmt);
    } else {
        message.style.display = "block";
        message.innerHTML = "Are you comedy me? 😜";
        table.style.display = 'none';
    }    
}

nextBtn.addEventListener("click", () => {
    message.style.display = 'none';
    table.style.display = 'none';

    var bill = Number(billAmount.value);
    if(bill > 0){
        showCashGiven();
    } else {
        message.style.display = "block";
        message.innerText = "Bill Amount should be greater than zero 🙃";
    }
});

function showCashGiven() {
    cashGiven.style.display = 'block';
    calculate.style.display = 'block';
    cashTitle.style.display = 'block';
}

calculate.addEventListener("click", calcHandler);





