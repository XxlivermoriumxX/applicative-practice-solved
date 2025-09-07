import { data } from "../data/data";

// SPACE DATA EXERCISE 12
// Return the sum of all moons for all planets
// Return example: 42

export function allPlanetsMoonsCount(data) {
  // Your code goes here...
  let total = 0;
  let planetsMoons = data.planets
  .filter(function(planet){
    return planet.hasOwnProperty("moons");
  })
  .map(function(planet){
    total += planet.moonsCount;
    return planet;
  });

  return total;
}



// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-12"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function
