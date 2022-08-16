let newScore = document.getElementById("homescore")
let count = 0

function addOne() {
    count += 1
    newScore.textContent = count
}

function addTwo() {
    count += 2
    newScore.textContent = count
}

function addThree() {
    count += 3
    newScore.textContent = count
}

let newScoreGuest = document.getElementById("guestscore")
let countGuest = 0

function addOneGuest() {
    countGuest += 1
    newScoreGuest.textContent = countGuest
}

function addTwoGuest() {
    countGuest += 2
    newScoreGuest.textContent = countGuest
}

function addThreeGuest() {
    countGuest += 3
    newScoreGuest.textContent = countGuest
}