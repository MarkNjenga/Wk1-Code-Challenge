##  Speed Detector (Toy Problem)
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

## Author
This code was developed By Mark Njenga. 
Gthub - https://github.com/MarkNjenga
lInkedIn - https://www.linkedin.com/404/

## Resources
The data used for this program was sourced from : https://moringa.instructure.com/courses/777/assignments/56014?module_item_id=122033

