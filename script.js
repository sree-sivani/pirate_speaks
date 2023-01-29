var btnTranslate = document.querySelector(".btn-translate")
var inputTxt = document.querySelector(".text-area")
var outputArea = document.querySelector(".output-container")

function errorHandler(error){
    console.log("Error occured ", error);
    alert("something wrong with server! Please try again after some time..")
}

var translaterAPI = "https://api.funtranslations.com/translate/pirate.json";


function clickHandler(){
    var inputText = inputTxt.value;
     fetch(getTranslationURL(inputText))
        .then(response => response.json())
        .then(json => {
        var translatedText = json.contents.translated
        outputArea.innerText = translatedText;
    })
    .catch(errorHandler)
}

function getTranslationURL(text){
    return translaterAPI + "?" + "text=" + text;
}


btnTranslate.addEventListener("click", clickHandler);

