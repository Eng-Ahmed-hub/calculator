const screen = document.querySelector("#display")
const digits = document.querySelectorAll(".digits")
const clearButton = document.querySelector("#clearButton")
const mathButtons = document.querySelector(".mathButtons")
 // add value to scrren 
function addToScreen(e){
    screen.value += e.target.value
}
 // loop the button and opretore 
digits.forEach(element=>{
    element.addEventListener("click", addToScreen)
})
 // delete value in the scrren 
function clearScreen(){
    screen.value = ""
}
clearButton.addEventListener("click", clearScreen)
 // calculet the digits 
function reslutToScreen(){
    try {
        screen.value = eval(screen.value)
    } catch (error) {
        console.error("Error")
    }
}

mathButtons.addEventListener("click", reslutToScreen)