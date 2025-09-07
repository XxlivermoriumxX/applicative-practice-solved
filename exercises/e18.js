/**
 * SPACE DATA EXERCISE 18
 * Return the year with the greatest number of Asteroids discoveries
 * Return example: 1902
 */

export function getGreatestDiscoveryYear(data) {
  // Your code goes here...
  // feel free to import your `maxBy` or `minBy` methods from previous lessons
 
  let yearsArr = [{year: 0, discoveries: 0}];

  for(let element of data.asteroids){
    let yearObj = yearsArr.find(function(search){return search.year === element.discoveryYear;});

    if(yearObj){
      yearObj.discoveries += 1;
    }
    else{
      yearsArr.push({year: element.discoveryYear, discoveries: 1});
    }

  }

  let big = yearsArr[0];

  for (let element of yearsArr){
    if(element.discoveries > big.discoveries){
      big = element;
    }
  }

  return big.year;

}

// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-18"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function
