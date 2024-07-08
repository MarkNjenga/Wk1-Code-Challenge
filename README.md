1. # Student Grade Generator(Toy problem)
This is a simple JavaScript application that  prompts a user to enter a student's marks and displays the corresponding grade based on the following grade:
. A > 79
. B- 60to 79
. C- 49 to 59
. D- 40 to 49
. E- less than 40
## Instructions 
Firstly, run npm install prompt-sync to enable the prompt function to work seamlessly .
Fork and clone this project to your local enviroment.
## Features
. Prompts the user to enter the student's marks (between 0 and 100).
. Calculates the grade based on the provided criteria.
. Displays the calculated grade to the user.
## JavaScript
The main function, getStudentGrade():
- prompts the user to enter the student's marks(0-100) utilising the prompt() function. 
-converts the input string to a floating-point number using parseFloat().
-If the input is not a valid number, an error message is logged to the console.
-Once a valid input is received, it checks the marks and returns the corresponding grade.


2. ##  Speed Detector (Toy Problem)
. This is a simple program that calculates the demerit points for a driver based on the car's speed.
. Calculates the excess speed over the maximum speed(70km/s).
. Calculates the demerits points based on the excess speed (1 demerit point for every 5km/s over the maximum speed).
. Displays the appropriate message based on the demerit points :
    -"Ok" if the car's speed is within the speed limit.
    -The number of number points if the driver is within the maximum limit (12 demerit points).
    -"Licence suspended."if the maximum demerits points.
## Instructions 
Firstly, run npm install prompt-sync to enable the prompt function to work seamlessly .
Fork and clone this project to your local enviroment.
## JavaScript code explanation
The main function, speedDetector() is responsible:
1. Sets the speed limit and maximum demerit points.
2. Prompts the user to enter the car's speed.
3. Checks if the car's speed is within the speed limit.
4. If the speed is within the limit displays "Ok".
5. If the speed is over the limit, calculates the excess speed and demerit points.
6. Checks if the demerit points exceed the maximum.
7. If the demerit points are within the limit, displays the number of demerit points.
8. If the demerit points exceed the maximu, displays "Licence suspended".


3. # Net Salary Calculator (Toy Problem)
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

## Credits
This code was developed By Mark Njenga. 
Gthub - https://github.com/MarkNjenga
lInkedIn - https://www.linkedin.com/404/

## Resources
. Google.com
. https://www.aren.co.ke/payroll/taxrates.htm
. https://www.aren.co.ke/payroll/taxrates.htm
. https://www.kra.go.ke/en/individual/calculate-tax/calculating-tax/paye
. The data used for this program was sourced from : https://moringa.instructure.com/courses/777/assignments/56014?module_item_id=122033