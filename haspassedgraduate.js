function hasPassingGrade(score) {
    // Determine the letter grade using the getGrade function
   const grade = getGrade(score);
   
   // Return true if the grade is not "F", false otherwise
   return grade !== "F";
}


console.log(hasPassingGrade(100));
console.log(hasPassingGrade(53));
console.log(hasPassingGrade(87));