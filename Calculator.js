// Net Salary Calculator (Toy Problem)
// User information
const basicSalaryInput = prompt("Input basic salary:");
const benefitsInput = prompt("Input benefits:");
 // total salary(gross Salary)
const grossSalary = basicSalaryInput + benefitsInput;
console.log('Your Gross Salary is:', grossSalary);
// Calculate payee
let paye;
if(grossSalary <= 288000){
    paye = grossSalary * 10 / 100;
}else if(grossSalary > 288000 && grossSalary <= 388000){
    paye = 28800 + (grossSalary - 288000) * 25 / 100;
}else if(grossSalary >388000 && grossSalary <= 6000000){
    paye = 68575 + (grossSalary - 388000) * 30 / 100;
}else if(grossSalary > 6000000 && grossSalary <= 9600000){
    paye = 1782575 + (grossSalary - 6000000) * 32.5 / 100;
}else{
    paye = 2985575 + (grossSalary - 9600000) * 35 / 100;
}
consolele.log('Your paye is: ', paye);
// NHIF Deductions
let nhifDeductions;
if(grossSalary <= 5999){
    nhifDeductions = 150;
}else if(grossSalary <= 7999){
    nhifDeductions = 300;
}else if(grossSalary <= 11999){
    nhifDeductions = 400;
}else if(grossSalary <= 14999){
    nhifDeductions = 500;
}else if(grossSalary <= 19999){
    nhifDeductions = 600;
}else if(grossSalary <= 24999){
    nhifDeductions = 750;
}else if(grossSalary <= 29999){
    nhifDeductions = 850;
}else if(grossSalary <= 34999){
     nhifDeductions = 900;
}else if(grossSalary <= 39999){
    nhifDeductions = 950;
}else if(grossSalary <=44999){
    nhifDeductions = 1000;
}else if(grossSalary <= 49999){
    nhifDeductions = 1100;
}else if(grossSalary <= 59999){
    nhifDeductions = 1200;
}else if(grossSalary <= 69999){
    nhifDeductions = 1300;
}else if(grossSalary <=79999){
    nhifDeductions = 1400;
}else if(grossSalary <= 89999){
    nhifDeductions = 1500;
}else if(grossSalary <= 99999){
    nhifDeductions = 1600; 
}else{
    nhifDeductions = 1700;
}
console.log('Your NHIF Deductions is:', nhifDeductions)
// NSSF Deductions
let nssfDeductions;
if(grossSalary <= 7000){
    nssfDeductions = grossSalary * 12 / 100;
}else {
    nssfDeductions = 840 + (grossSalary -7000) * 12 / 100
}
console.log('Your NSSF Deductions is:',nssfDeductions )
// Net Salary
let netSalary = grossSalary - payee - nhifDeductions - nssfDeductions;
console.log('Your Net Salary is:', netSalary);