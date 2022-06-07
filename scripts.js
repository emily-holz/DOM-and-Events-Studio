// Write your JavaScript code here.
// Remember to pay attention to page loading!
function init() {
    const takeoff = document.getElementById("takeoff");
    const landing = document.getElementById("landing");
    const flightStatus = document.getElementById("flightStatus");
    const shuttleBackground = document.getElementById("shuttleBackground");
    const spaceShuttleHeight = document.getElementById("spaceShuttleHeight");
    
    function takeoffClick () {
        if (confirm("Confirm that the shuttle is ready for takeoff.")){
            flightStatus.innerHTML = "Shuttle in flight.";
            shuttleBackground.style.backgroundColor = "blue";
            spaceShuttleHeight.innerHTML = "10,000";
        } 
    };

    function landingClick(){
        alert("The shuttle is landing. Landing gear engaged.");
        flightStatus.innerHTML = "The shuttle had landed.";
        shuttleBackground.style.backgroundColor = "green";
        spaceShuttleHeight.innerHTML = "0";
    };

    takeoff.addEventListener("click", takeoffClick);
    landing.addEventListener("click", landingClick);

};

window.addEventListener("load", init);