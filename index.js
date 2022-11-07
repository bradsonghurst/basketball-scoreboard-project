let homeScore=document.getElementById('home-score')
let homeCount=0
let guestScore=document.getElementById('guest-score')
let guestCount=0

function homeAddScore() {
    homeCount=homeCount+1
    homeScore.innerText=homeCount    
}

function homeAddTwoScore() {
    homeCount=homeCount+2
    homeScore.innerText=homeCount
}

function homeAddThreeScore() {
    homeCount=homeCount+3
    homeScore.innerText=homeCount
}


function guestAddScore() {
    guestCount=guestCount+1
    guestScore.innerText=guestCount    
}

function guestAddTwoScore() {
    guestCount=guestCount+2
    guestScore.innerText=guestCount
}

function guestAddThreeScore() {
    guestCount=guestCount+3
    guestScore.innerText=guestCount
}