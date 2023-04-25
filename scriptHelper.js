// Write your helper functions here!
require('isomorphic-fetch');

function addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl) {
   /// Here is the HTML formatting for our mission target div.
   let div = document.getElementById("missionTarget");
    div.innerHTML = 
              ` <h2>Mission Destination</h2>
                <ol>
                    <li>Name: ${name}</li>
                    <li>Diameter: ${diameter}</li>
                    <li>Star: ${star}</li>
                    <li>Distance from Earth: ${distance} </li>
                    <li>Number of Moons:${moons} </li>
                </ol>
                <img src="${imageUrl}">`;
   
}

function validateInput(testInput) {

    let input = Number(testInput)
    if ( input === ""){
        return "Empty";
    } else if (input = NaN){
        return "Not a Number";
    }else if(input === true) {
        return "Is a Number";
    }

   
}

function formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel) {

    let pilotStatus = document.getElementById("pilotStatus");
    let copilotStatus = document.getElementById("copilotStatus");
    let fuelStatus = document.getElementById("fuelStatus")
    let cargoStatus = document.getElementById("cargoStatus");

    if(validateInput(pilot) === "Empty" || validateInput(copilot) === "Empty" || validateInput(fuelLevel) === "Empty" || validateInput(cargoLevel) === "Empty"){
        alert("All fields are required!");
    }else if (validateInput(pilot) === "Is a Number" || validateInput(copilot) === "Is a Number" || validateInput(fuelLevel) === " Is not a Number" || validateInput(cargoLevel) === "Is not a Number"){
        alert("Make sure to enter valid information for each field!")
    }else{
        pilotStatus.innerHTML = `Pilot${pilot}is ready for launch!`;
        copilotStatus.innerHTML = `Copilot${copilot}is ready for launch!`;
        if(fuelLevel < 10000 && cargoLevel <= 1000){
            fuelLevel.innerHTML = "Fuel level too low for launch";
            cargoLevel.innerHTML = "Cargo mass low enough for launch"
            launchStatus.innerHTML = "Shuttle not ready for launch";

        }else if(fuelLevel >= 10000 && cargoLevel > 10000){
            fuelLevel.innerHTML= "Fuel level high enough for launch";
            cargoLevel.innerHTML = " Cargo mass too high!";
            launchStatus.innerHTML = "Shuttle not ready for launch!";

        }else if(fuelLevel < 10000 && cargoLevel > 10000){
            fuelLevel.innerHTML = "Fuel level too low for launch";
            cargoLevel.innerHTML = "Cargo mass too high";
            launchStatus.innerHTML = "Shuttle not ready for launch";
        }else{
            fuelLevel.innerHTML= "Fuel level high enough for launch";
            cargoLevel.innerHTML = "Cargo mass low enough for launch"
            launchStatus = "Shuttle ready for launch!";
        }
    }
}

async function myFetch() {
    let planetsReturned;

    planetsReturned = await fetch("https://handlers.education.launchcode.org/static/planets.json").then( function(response) {
        if (response.status >= 400) {
            throw new Error ("Bad response");
        }
        else {
            return response.json();
        }
        });

    return planetsReturned;
}

function pickPlanet(planets) {
    let index = Math.floor(Math.random()*planets.length);
    return planets[index];
}

module.exports.addDestinationInfo = addDestinationInfo;
module.exports.validateInput = validateInput;
module.exports.formSubmission = formSubmission;
module.exports.pickPlanet = pickPlanet; 
module.exports.myFetch = myFetch;
