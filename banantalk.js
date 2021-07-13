// console.log("To check script working or not!")

// alert ("dont disturb man, it works") 

// var username = prompt("Gotta Name!")
// alert ("dont disturb " + username +  " it works")

// var welcomeMsg = "welcome dear " + username; 
// alert(welcomeMsg);


var btnTranslate = document.querySelector("#btnTranslate")
btnTranslate.addEventListener("click", function() {
    console.log("Clicked")
    console.log("Input", box1.value);
    box2.innerText = "Sorry, we are closed!" + box1.value;
})

var box1 = document.querySelector("#box1")
console.log(box1)

var box2 = document.querySelector("#box2")
   
    //  box2.innerText = "Sorry, we are closed!"



