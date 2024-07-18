function GPTstudentMsg(totalScores, studentScore) {
    const average = getAverage(totalScores);
    const grade = getGrade(studentScore);
    const status = hasPassingGrade(studentScore) ? "passed" : "failed";

   return "Class average: " + average.toFixed(1) + ". Your grade: " + grade + ". You " + status + " the course.";
 }
 console.log(studentMsg([92, 88, 12, 77, 57, 100, 67, 38, 97, 89], 37));

 function ForumstudentMsg(totalScores, studentScore) {
    if (hasPassingGrade(studentScore) == true) {
     return "Class average: " + getAverage(totalScores) + ". Your grade: " + getGrade(studentScore) + ". You passed the course.";
    } else {
      return "Class average: " + getAverage(totalScores) + ". Your grade: " + getGrade(studentScore) + ". You failed the course.";
    }
  }

  console.log(studentMsg([92, 88, 12, 77, 57, 100, 67, 38, 97, 89], 37));