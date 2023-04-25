// Write your JavaScript code here!



 

 window.addEventListener("load", function() {
    let listedPlanets;
    // Set listedPlanetsResponse equal to the value returned by calling myFetch()
    let listedPlanetsResponse = myFetch();
    listedPlanetsResponse.then(function (result) {
        listedPlanets = result;
        console.log(listedPlanets);
    }).then(function () {
        console.log(listedPlanets);
        // Below this comment call the appropriate helper functions to pick a planet fom the list of planets and add that information to your destination.
        let planet = pickPlanet(listedPlanets);
        let name = planet.name;
        let diameter = planet.diameter;
        let star = planet.star;
        let distance = planet.distance;
        let imageUrl = planet.image;
        let moons = planet.moons;
        addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl);
     })
    /*let listedPlanets;
    // Set listedPlanetsResponse equal to the value returned by calling myFetch()
    let listedPlanetsResponse = myFetch();
   // let listedPlanetsResponse;
    listedPlanetsResponse.then(function (result) {
        listedPlanets = result;
        console.log(listedPlanets);
    }).then(function () {
        console.log(listedPlanets);
        let selectedPlanet = pickPlanet(listedPlanets);
        addDestinationInfo(document, selectedPlanet.name, selectedPlanet.diameter, selectedPlanet.star, selectedPlanet.distance, 
         selectedPlanet.moons, selectedPlanet.image);  
     })*/
        // Below this comment call the appropriate helper functions to pick a planet fom the list of planets and add that information to your destination.
    
   /* let list = document.getElementById("faultyItems");
     list.style.visibility = "hidden";
     let form = document.querySelector("form");
  
     form.addEventListener("submit", function(event) {
         event.preventDefault();
         let pilotInput = document.querySelector("input[name=pilotName]");
         let pilot = pilotInput.value;
  
         let copilotInput = document.querySelector("input[name=copilotName]");
         let copilot = copilotInput.value;
  
         let fuelInput = document.querySelector("input[name=fuelLevel]");
         let fuelLevel = Number(fuelInput.value);
  
         let cargoInput = document.querySelector("input[name=cargoMass]");
         let cargoLevel = Number(cargoInput.value);
  
         formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel);
     });
    
 });*/

 const form = document.querySelector("form");
 form.addEventListener("submit", function(event){
     event.preventDefault();
     //List DOM
     let pilot = document.querySelector("input[name=pilotName]").value;
     let copilot = document.querySelector("input[name=copilotName]").value;
     let fuelLevel = document.querySelector("input[name=fuelLevel]").value;
     let cargoLevel = document.querySelector("input[name=cargoMass]").value;
     let list = document.getElementById('faultyItems');

     //use formsubmission to validate and update list
     formSubmission(document,list,pilot,copilot,fuelLevel,cargoLevel);
 })

 });
