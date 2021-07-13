// console.log("To check script working or not!")

// alert ("dont disturb man, it works") 

// var username = prompt("Gotta Name!")
// alert ("dont disturb " + username +  " it works")

// var welcomeMsg = "welcome dear " + username; 
// alert(welcomeMsg);

var url = "https://api.funtranslations.com/translate/minion.json"
var box1 = document.querySelector("#box1")
var box2 = document.querySelector("#box2")


var btnTranslate = document.querySelector("#btnTranslate")
btnTranslate.addEventListener("click", function() {
    var userInput = box1.value;
    fetch(url + "?text=" + userInput).then(function (response){
        return response.json()
    }).then(function (data){
        console.log(data);
        box2.textContent = data.contents.translated;
    })
    
})






