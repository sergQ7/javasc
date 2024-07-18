function getAverage(scores) {
    let sum = 0; // Initialize sum variable
  
      // Iterate over the scores array and add each score to the sum
      for (let i = 0; i < scores.length; i++) {
          sum += scores[i];
      }
  
      // Calculate the average
      const average = sum / scores.length;
  
      return average; // Return the average score
  }
  
  console.log(getAverage([92, 88, 12, 77, 57, 100, 67, 38, 97, 89]));
  console.log(getAverage([45, 87, 98, 100, 86, 94, 67, 88, 94, 95]));