# Net Salary Calculator (Toy Problem)
This program prompts a user to enter their basic salary and benefits, then calculates the gross salary, paye(Tax), NHIF Deductions,NSSF Deductions and the net salary based on the provided 

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