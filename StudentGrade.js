// Student Grade Generator (Toy Problem)
const prompt = require("prompt-sync")();
function getStudentGrade(){
    const marksInput = prompt("Enter student's marks (0-100):")
    const marks = marksInput
    if(marks < 0 || marks > 100 || isNaN(marks)) {
     console.log("Please input a number between 0 and 100");
    } 
    if(marks > 79){
      console.log('A');
    }else if(marks >= 60 && marks <= 79){
      console.log("B");
    }else if(marks <= 59 && marks >= 49){
      console.log("C");
    }else if(marks >= 40 && marks < 49){
       console.log("D");
    }else if(marks < 40) {
        console.log("E");
    }
}
getStudentGrade();
