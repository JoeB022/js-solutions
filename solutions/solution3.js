function calculateTax(grossSalary) {
  
    if (grossSalary <= 24000) {
        return grossSalary * 0.10; 
    } 
    else if (grossSalary <= 32333) {
        return 2400 + (grossSalary - 24000) * 0.15; 
    }
     else if (grossSalary <= 40000) {
        return 4800 + (grossSalary - 32333) * 0.20; 
    } 
    else if (grossSalary <= 50000) {
        return 6800 + (grossSalary - 40000) * 0.25;
    } 
    else {
        return 9300 + (grossSalary - 50000) * 0.30;
    }
}

function calculateNHIF(grossSalary) {
    if (grossSalary <= 5999) {
        return 150;
    } else if (grossSalary <= 7999) {
        return 300;
    } else if (grossSalary <= 11999) {
        return 400;
    } else if (grossSalary <= 14999) {
        return 500;
    } else if (grossSalary <= 19999) {
        return 600;
    } else if (grossSalary <= 24999) {
        return 750;
    } else if (grossSalary <= 29999) {
        return 850;
    } else if (grossSalary <= 34999) {
        return 900;
    } else if (grossSalary <= 39999) {
        return 950;
    } else if (grossSalary <= 49999) {
        return 1000;
    } else {
        return 1200;
    }
}


