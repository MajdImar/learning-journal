# summary lab 6:
# we follow these steps:
# using the command
# **  cp -r amman-102d3/class-06/starter-code/* practice-js **
1- Create new repo on GitHub and name it practice-js
2- Clone this repo on your computer locally inside projects folder
3- Go to https://github.com/LTUC/amman-102d3/ and clone this repo on your computer locally
inside projects folder
4- Now, we want to copy a starter code from class-06 folder that is inside the amman-102d6 repo
to our repo practice-js using this command:
cp -r amman-102d3/class-06/starter-code/* practice-js0
5- Open your practice-js project on Vscode
6- Create new HTML file and name it add-content.html and copy the following code inside it
7- Create new folder and name it (js) then create a file inside this folder and name add-content.js
and copy the following code inside it.
# using these codes:
- code html
<!DOCTYPE html>
<html>
 <head>
 <title>Constructive &amp; Co.</title>
 <link rel="stylesheet" href="css/c01.css" />
 </head>
 <body>
 <h1>Constructive &amp; Co.</h1>
 <p>For all orders and inquiries please call <em>555-
3344</em></p>
 <script src="js/add-content.js"></script>
 </body>
</html>
- code js :
var today = new Date();
var hourNow = today.getHours();
var greeting;
if (hourNow > 18) {
 greeting = 'Good evening, Class!';
 } else if (hourNow > 12) {
 greeting = 'Good afternoon, Class!';
 } else if (hourNow >= 0) {
 greeting = 'Good morning!';
 } else {
 greeting = 'Something went wrong!';
 }
document.write('<h3>'+greeting+'</h3>');
