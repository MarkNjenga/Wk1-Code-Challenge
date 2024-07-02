const prompt = require("prompt-sync")();

//Speed Detector (Toy Problem)
function speedDetector(){
    const maxSpeed = 70;
    const speedInput = prompt("Enter the car speed (in km/s):");
    //convert the user input into a number
     const speed = Number(speedInput)
    if(speed <= maxSpeed){
        console.log("Ok")
    }else{
        let excessSpeed = speed - maxSpeed;
        let demeritPoints = excessSpeed / 5;
        if(demeritPoints > 12){
            console.log("License suspended.");
        }else{
            console.log(`Points: ${demeritPoints}`);
        }
    }
}
speedDetector();
