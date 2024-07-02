# Net Salary Calculator (Toy Problem)
This program that calculates an individual's net salary based on their basic salary, benefits and tax rates , NHIF deductions and NSSF deductions provided in the URL: https://www.aren.co.ke/payroll/taxrates.htm.
## Instructions 
Firstly, run npm install prompt-sync to enable the prompt function to work seamlessly .
Fork and clone this project to your local enviroment.
## Features
. Prompts the user to enter their basic salary and benefits.
. Calculates the gross salary.
. Calculates the paye deductions based on the tax rates provided on the tax rates provided in the URL.
. Calculates the NHIF deductions based on the NHIF rates provided in the URL.
. Calculates the NSSF deductions based on the NSSF contribution limits provided in the URL.
. Calculates the net salary.
. Displays the results.

## JavaScript 
The first const with the variable name basicSalaryInput prompts a user to enter their basic salary.
The second const with the variable name benefitsInput prompts a user to iput their benefits.
The third const contains an equation to calculate the gross salaryby adding the basic salary to the benefits.
The first if statement contains a block of code that uses statements to determine the paye rate based on the gross salary.
The nhifDeductions; uses the variable nhifDeductions to store the calculated deduction amount.
The block of code in the if else statement determines the appropriate NHIF Deduction using the gross salary based on the table.
The nssfDeduction variable stores the calculated NSSF deduction amount.
The last if- else statement contains a block of code that  calculates the NSSF deductions based on the gross salary. If the gross salary is less than or equal to KES 7,000 the deduction is 12% of the gross salary. Otherwise the deduction is KES 840 plus 12% of the amount exceeding the KES 7000.
The last const is used to calculate the net salaryby subtracting the paye, NHIF Deductions and NSSF deductions from the gross salary.

## Author
This code was developed By Mark Njenga. 
Gthub - https://github.com/MarkNjenga
lInkedIn - https://www.linkedin.com/404/

## Resources
. Google.com
. https://www.aren.co.ke/payroll/taxrates.htm
. https://www.aren.co.ke/payroll/taxrates.htm
. https://www.kra.go.ke/en/individual/calculate-tax/calculating-tax/paye