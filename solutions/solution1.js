const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function gradegenerator(marks) {
    if (marks > 79){
        return 'A';
    }
    else if (marks >= 60 && marks <= 79) {
        return 'B';
    }
    else if (marks >= 49 && marks <= 59) {
        return 'C';
    }
    else if (marks >= 40 && marks <= 49) {
        return 'D';
    }
    else if (marks < 40) {
        return 'E';
    }
    else {
        return 'Invalid marks';
    }
}

rl.question("Enter the student's marks (between 0 - 100):", function(studentMarks){
    const marks = parseInt(studentMarks);
    if (marks >= 0 && marks <= 100) {
    const grade = gradegenerator(marks);
    console.log(`The student's grade is: ${grade}`);
   }
   else {
       console.log('Please enter valid marks between 0 and 100');
   }
})



