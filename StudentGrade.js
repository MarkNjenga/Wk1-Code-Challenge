// Student Grade Generator (Toy Problem)

function getStudentGrade(){
    const marksInput = prompt("Enter student's marks (0-100):")
    const marks = parseFloat(marksInput);
    if(marks < 0 || marks > 100 || isNaN(marks)) {
     console.log("Please input a number between 0 and 100");
    } 
    if(marks > 79){
        return "A";
    }else if(marks >60 && marks <= 79){
        return "B";
    }else if(marks <= 59 && marks >= 49){
        return "C";
    }else if(marks >= 40 && marks < 49){
        return "D";
    }else {
        return "E";
    }
}
