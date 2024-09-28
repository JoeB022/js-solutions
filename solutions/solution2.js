function speedDetector(speed) {
    const speedLimit = 70;
    if (speed < speedLimit){
        console.log("OK");
    }
    else {
        const demeritPoints = Math.floor((speed - speedLimit) / 5);
        console.log(`points: ${demeritPoints}`);
 
        if (demeritPoints > 12) {
            console.log("License suspended");
        }
    }
}
const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Enter the speed of the car (in km/hr): ", function(inputspeed){
    const speed = parseInt(inputspeed);
    if(!isNaN(speed) && speed >= 0) {
        speedDetector(speed);
    }
    else {
        console.log('Please enter a valid speed');
    }
    rl.close();
});