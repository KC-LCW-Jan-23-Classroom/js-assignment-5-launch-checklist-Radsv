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

    if (testInput === "" || testInput === null || testInput === 0) {
        return "Empty"
    } else if ((!isNaN(Number(testInput)))) {
        return "Is a Number"
    } else {
        return "Not a Number"
    }
}
   


function formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel) {

    let pilotStatus = document.getElementById("pilotStatus");
    let copilotStatus = document.getElementById("copilotStatus");
    let fuelStatus = document.getElementById("fuelStatus")
    let cargoStatus = document.getElementById("cargoStatus");
    let launchStatus = document.getElementById('launchStatus');

    if(validateInput(pilot) === "Empty" || validateInput(copilot) === "Empty" || validateInput(fuelLevel) === "Empty" || validateInput(cargoLevel) === "Empty"){
        alert("All fields are required!");
    }else if (validateInput(pilot) === "Is a Number" || validateInput(copilot) === "Is a Number" || validateInput(fuelLevel) === " Is not a Number" || validateInput(cargoLevel) === "Is not a Number"){
        alert("Make sure to enter valid information for each field!")
    }else{
        list.style.visibility = 'visible';
        pilotStatus.innerHTML = `Pilot ${pilot} is ready for launch`;
        copilotStatus.innerHTML = `Co-pilot ${copilot} is ready for launch`;
    }
        if(Number(fuelLevel) < 10000 ){
            fuelStatus.innerHTML = `Fuel level too low for launch`;
            //cargoLevel.innerHTML = "Cargo mass low enough for launch"
            launchStatus.innerHTML = `Shuttle Not Ready for Launch`;
            list.style.visibility = 'visible';
            launchStatus.style.color = `red`;

        }else if (Number(cargoLevel) > 10000) {
           // fuelLevel.innerHTML= "Fuel level high enough for launch";
            cargoStatus.innerHTML = `Cargo mass too heavy for launch`;
            launchStatus.innerHTML = `Shuttle Not Ready for Launch`;
            list.style.visibility = 'visible';
            launchStatus.style.color = `red`;

        }else if(Number(cargoLevel) > 10000 && Number(fuelLevel) < 10000){
            fuelStatus.innerHtml = `Fuel level too low for launch`;
            cargoStatus.innerHTML = `Cargo mass too heavy for launch`;
            launchStatus.innerHTML = `Shuttle Not Ready for Launch`;
            list.style.visibility = 'visible';
            launchStatus.style.color = `red`;

        }else if(Number(cargoLevel) > 10000 && Number(fuelLevel) > 10000){
            fuelStatus.innerHTML = `Fuel level high enough for launch`;
            cargoStatus.innerHTML = `Cargo mass low enough for launch`;
            launchStatus.innerHTML = `Shuttle is ready for launch`;
            list.style.visibility = 'visible';
            launchStatus.style.color = `red`;
        }
    }


async function myFetch() {
    let planetsReturned;

    planetsReturned = await fetch("https://handlers.education.launchcode.org/static/planets.json").then( function(response) {
        return response.json()

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
