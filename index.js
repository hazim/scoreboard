let homeScore = 0;
let guestScore = 0;

let homeDisplay = document.getElementById('home-el');
let guestDisplay = document.getElementById('guest-el');

function hPlusOne() {
    homeScore ++;
    homeDisplay.textContent = homeScore;   
}

function hPlusTwo() {
    homeScore += 2;
    homeDisplay.textContent = homeScore; 
}

function hPlusThree() {
    homeScore += 3;
    homeDisplay.textContent = homeScore;   
}

function gPlusOne() {
    guestScore ++;
    guestDisplay.textContent = guestScore;  
}

function gPlusTwo() {
    guestScore += 2;
    guestDisplay.textContent = guestScore;
}

function gPlusThree() {
    guestScore += 3;
    guestDisplay.textContent = guestScore; 
}