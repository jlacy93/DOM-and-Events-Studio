// Write your JavaScript code here.
// Remember to pay attention to page loading!

function init(){
//confirm window
//get element ID for take off button, flight status text, background, and height
const takeOffButton = document.getElementById("takeoff");
const flightStatusText = document.getElementById("flightStatus");
const backgroundColor = document.getElementById("shuttleBackground");
const height = document.getElementById("spaceShuttleHeight");
const rocket = document.getElementById("rocket");
rocket.style.position = 'absolute';
rocket.style.bottom = '0px';
rocket.style.left = '0px';
// rocket.style.transform = 'translate(-50%, -50%)';
let shuttleLeft = 0;
let shuttleHeight = 0;
let shuttleHeightPixels = 0;


//add listener on click of take off button
takeOffButton.addEventListener("click", function (event) {
    let takeOff = confirm("Confirm that the shuttle is ready for takeoff.");
    if (takeOff) {
        shuttleHeight = 10000;
        if(shuttleHeight == 0){backgroundColor.style.backgroundColor = 'Green'} else {
            backgroundColor.style.backgroundColor = '#2196f3'};
            flightStatusText.innerHTML = "We have lift-off!";
        shuttleHeightPixels = shuttleHeight * .0175;
        rocket.style.bottom = shuttleHeightPixels+'px';
        spaceShuttleHeight.innerHTML = shuttleHeight }
    })

//land button
const landButton = document.getElementById("landing")
landButton.addEventListener("click", function (event) {
    window.alert("The shuttle is landing. Landing gear engaged.")
    flightStatusText.innerHTML = "The shuttle has landed.";
    shuttleHeight = 0;
    if(shuttleHeight == 0){backgroundColor.style.backgroundColor = 'Green'} else {
        backgroundColor.style.backgroundColor = '#2196f3'};
        shuttleHeightPixels = shuttleHeight * .0175;
        rocket.style.bottom = shuttleHeightPixels+'px';
    spaceShuttleHeight.innerHTML = shuttleHeight
})

//abort button
const abortButton = document.getElementById("missionAbort")
abortButton.addEventListener("click", function (event){
    let confirmAbort = confirm("Confirm you want to abort the mission.");
    if (confirmAbort) {
        flightStatusText.innerHTML = "Mission Aborted.";
        shuttleHeight = 0;
        if(shuttleHeight == 0){backgroundColor.style.backgroundColor = 'Green'} else {
            backgroundColor.style.backgroundColor = '#2196f3'};
            shuttleHeightPixels = shuttleHeight * .0175;
            rocket.style.bottom = shuttleHeightPixels+'px';
        spaceShuttleHeight.innerHTML = shuttleHeight
    }
})

//up button
const upButton = document.getElementById("up")
upButton.addEventListener("click", function (event){
    shuttleHeight += 10;
    if(shuttleHeight == 0){backgroundColor.style.backgroundColor = 'Green'} else {
        backgroundColor.style.backgroundColor = '#2196f3'};
        shuttleHeightPixels = shuttleHeight * .0175;
        rocket.style.bottom = shuttleHeightPixels+'px';
    spaceShuttleHeight.innerHTML = shuttleHeight
})

//down button
const downButton = document.getElementById("down")
downButton.addEventListener("click", function (event){
    shuttleHeight -= 10;
    if(shuttleHeight == 0){backgroundColor.style.backgroundColor = 'Green'} else {
        backgroundColor.style.backgroundColor = '#2196f3'};
        shuttleHeightPixels = shuttleHeight * .0175;
        rocket.style.bottom = shuttleHeightPixels+'px';
    spaceShuttleHeight.innerHTML = shuttleHeight
})


//left button
const leftButton = document.getElementById("left")
leftButton.addEventListener("click", function (event){
    shuttleLeft -= 1;
    rocket.style.left = shuttleLeft+'px'
})

//right button
const rightButton = document.getElementById("right")
rightButton.addEventListener("click", function (event){
    shuttleLeft += 1;
    rocket.style.left = shuttleLeft+'px'
})


}

window.addEventListener("load", init);