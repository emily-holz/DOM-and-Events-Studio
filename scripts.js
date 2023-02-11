// Write your JavaScript code here.
// Remember to pay attention to page loading!

window.addEventListener('load', function() {

    let takeOffBtn = getElementById("takeoff");
    takeOffBtn.addEventListener('click', function() {
        //when the take off button is clicked ...
        let isReadyToLaunch = window.confirm("Confirm that the shuttle is ready for takeoff.")
        console.log(isReadyToLaunch);
        if(isReadyToLaunch) {
            let flightStatus = document.getElementById("flightStatus");
            flightStatus.innerHTML = "Shuttle in flight.";
            let shuttleFlightScreen = document.getElementById("shuttleBackground");
            shuttleFlightScreen.setAttribute("style", "background-color: blue");
            let shuttleHeight = document.getElementById("spaceSHuttleHeight");
            shuttleHeight.innerText = "10000";
        }
    });

    let landingBtn = getElementById("landing");
    landingBtn.addEventListener('click', function() {
        window.alert("The shuttle is landing. Landing gear engaged.");
        let flightStatus = document.getElementById("flightStatus");
        flightStatus.innerHTML = "The shuttle has landed.";
        let shuttleFlightScreen = document.getElementById("shuttleBackground");
        shuttleFlightScreen.setAttribute("style", "background-color: green");
        let shuttleHeight = document.getElementById("spaceSHuttleHeight");
        shuttleHeight.innerText = "0";
    });

    let abortMissionBtn = document.getElementById("missionAbort");
    abortMissionBtn.addEventListener('click', function() {
        let shouldAbortMission = window.confirm("Confirm that you want to abort the mission.");
        if (shouldAbortMission) {
            let flightStatus = document.getElementById("flightStatus");
            flightStatus.innerHTML = "Mission aborted.";
            let shuttleFlightScreen = document.getElementById("shuttleBackground");
            shuttleFlightScreen.setAttribute("style", "background-color: blue");
            let shuttleHeight = document.getElementById("spaceSHuttleHeight");
            shuttleHeight.innerText = "10000";
        }
    });

    let upBtn = document.getElementById("up");
    upBtn.addEventListener('click', function(){
        let shuttleHeight = document.getElementById("spaceSHuttleHeight");
        let shuttleHeightAmount = Number.shuttleHeight.innerText
        shuttleHeightAmount += 10000;
        shuttleHeight.innerText = shuttleHeightAmount;
    });

    let downBtn = document.getElementById("down");
    downBtn.addEventListener('click', function(){
        let shuttleHeight = document.getElementById("spaceSHuttleHeight");
        let shuttleHeightAmount = Number.shuttleHeight.innerText
        shuttleHeightAmount -= 10000;
        shuttleHeight.innerText = shuttleHeightAmount;
    });

});
