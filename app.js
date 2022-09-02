
let homeScore = document.querySelector("#home_score");
let awayScore = document.querySelector("#away_score");


homePoints = 0;
awayPoints = 0;

function winningColorAway() {
    document.getElementById("teamTwo").style.color = "rgb(233, 236, 22)";
    document.getElementById("teamOne").style.color = "#EEEEEE";
}
function winningColorHome() {
    document.getElementById("teamOne").style.color = "rgb(233, 236, 22)";
    document.getElementById("teamTwo").style.color = "#EEEEEE";
}

function winningTeam() {
    if (homePoints > awayPoints) {
        winningColorHome();
    } else if (awayPoints > homePoints) {
        winningColorAway();
    } else {
        document.getElementById("teamOne").style.color = "#EEEEEE";
        document.getElementById("teamTwo").style.color = "#EEEEEE";

    }
}

function newGame() {
    homeScore.textContent = 0
    awayScore.textContent = 0
    homePoints = 0;
    awayPoints = 0;
    winningTeam();
}


function homeAdd1() {
    homePoints++
    homeScore.textContent = homePoints;
    winningTeam();

}

function homeAdd2() {
    homePoints += 2
    homeScore.textContent = homePoints;
    winningTeam();

}

function homeAdd3() {
    homePoints += 3
    homeScore.textContent = homePoints;
    winningTeam();

}

function awayAdd1() {
    awayPoints++
    awayScore.textContent = awayPoints;
    winningTeam();

}

function awayAdd2() {
    awayPoints += 2
    awayScore.textContent = awayPoints;
    winningTeam();

}

function awayAdd3() {
    awayPoints += 3
    awayScore.textContent = awayPoints;
    winningTeam();

}

