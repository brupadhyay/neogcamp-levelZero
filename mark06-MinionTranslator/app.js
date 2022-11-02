var btnInput = document.querySelector(".btn-translate");
var txtInput = document.querySelector("#txt-input");
var txtOutput = document.querySelector(".output");

var apiUrl = "https://api.funtranslations.com/translate/minion.json";

function generateUrl(input){
    return apiUrl + "?text=" + input;
}

function errorHandler(error){
    console.log("Error: ", error);
    alert("Something went wrong! Minions are now bored talking gibberish give them some rest! Server is not responding, please try again later");
}

function clickHandler() {
    var input = txtInput.value;
    var encoded = encodeURI(generateUrl(input));
    fetch(encoded)
    .then(response => response.json())
    .then((json) =>{
        let translation = json.contents.translated;
        txtOutput.innerText = translation;
    })
    .catch(errorHandler);
}

btnInput.addEventListener("click", clickHandler);


