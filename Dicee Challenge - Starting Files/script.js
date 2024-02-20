// Generate a random number between 1 and 6 for player 1
var ran_num = Math.floor(Math.random() * 6) + 1;

// Construct the file name for the dice image based on the random number for player 1
var img = "dice" + ran_num + ".png";

// Construct the path for the image file for player 1
var path = "images\\" + img;

// Select the img element for player 1 in the HTML document
var img1 = document.querySelectorAll("img")[0];

// Set the src attribute of the selected img element for player 1 to the constructed path
img1.setAttribute("src", path);

// Generate a random number between 1 and 6 for player 2
var ran_num2 = Math.floor(Math.random() * 6) + 1;

// Construct the file name for the dice image based on the random number for player 2
path = "images\\" + "dice" + ran_num2 + ".png";

// Select the img element for player 2 in the HTML document
var img2 = document.querySelectorAll("img")[1];

// Set the src attribute of the selected img element for player 2 to the constructed path
img2.setAttribute("src", path);

// Compare the random numbers to determine the winner or declare a tie
if (ran_num > ran_num2) {
    document.querySelector("h1").innerHTML = "Player 1 WON";
} else if (ran_num < ran_num2) {
    document.querySelector("h1").innerHTML = "Player 2 WON";
} else {
    document.querySelector("h1").innerHTML = "TIE!!";
}
