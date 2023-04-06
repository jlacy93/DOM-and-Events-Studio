// Write your JavaScript code here.
// Remember to pay attention to page loading!

function init(){
//confirm window
//get element ID for take off button, flight status text, background, and height
const takeOffButton = document.getElementById("takeoff")
const flightStatusText = document.getElementById("flightStatus")
const backgroundColor = document.getElementById("shuttleBackground")
const height = document.getElementById("spaceShuttleHeight")
const rocket = document.getElementById("rocket")
rocket.style.position = 'absolute'

let shuttleHeight = 0

//add listener on click of take off button
takeOffButton.addEventListener("click", function (event) {
    let takeOff = confirm("Confirm that the shuttle is ready for takeoff.");
    if (takeOff) {
        flightStatusText.innerHTML = "Shuttle in flight.";
        backgroundColor.style.backgroundColor = '#2196f3'
        shuttleHeight = 10000
        spaceShuttleHeight.innerHTML = shuttleHeight }
    })

//land button
const landButton = document.getElementById("landing")
landButton.addEventListener("click", function (event) {
    window.alert("The shuttle is landing. Landing gear engaged.")
    flightStatusText.innerHTML = "The shuttle has landed.";
    shuttleHeight = 0
    spaceShuttleHeight.innerHTML = shuttleHeight
})

//abort button
const abortButton = document.getElementById("missionAbort")
abortButton.addEventListener("click", function (event){
    let confirmAbort = confirm("Confirm you want to abort the mission.");
    if (confirmAbort) {
        flightStatusText.innerHTML = "Mission Aborted.";
        //background
        shuttleHeight = 0
        spaceShuttleHeight.innerHTML = shuttleHeight
    }
})

//up button
const upButton = document.getElementById("up")
upButton.addEventListener("click", function (event){
    shuttleHeight += 10
    spaceShuttleHeight.innerHTML = shuttleHeight
    //move image
})

//down button
const downButton = document.getElementById("down")
downButton.addEventListener("click", function (event){
    shuttleHeight -= 10
    spaceShuttleHeight.innerHTML = shuttleHeight
    //move image
})


//left button
const leftButton = document.getElementById("left")
downButton.addEventListener("click", function (event){
    //move image
})

//right button
const rightButton = document.getElementById("right")
downButton.addEventListener("click", function (event){
    //move image
})

}

window.addEventListener("load", init);