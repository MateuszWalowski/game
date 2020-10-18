"use strict"
// https://all-free-download.com/free-vector/download/furniture-decoration-vector-illustration-with-various-rooms_6825690.html
document.addEventListener("DOMContentLoaded", start);
async function start() {
    let response = await fetch("Room.svg")
    let mySVGData = await response.text();
    document.querySelector("svg").innerHTML = mySVGData;
}
let counter = 10;
document.querySelector(".reset").addEventListener("click", reset)
document.querySelector("#startgame").addEventListener("click", startthegame)

function startthegame() {
    document.querySelector("#intro").style.display = "none"
    let timer = setInterval(function () {
        if (counter == 0) {
            gameover()
            clearInterval(timer);
        }
        counter -= 1
        document.querySelector("#counter span").textContent = counter;
        console.log(counter)
    }, 1000);
    let points = 0
    document.querySelector("#TV").addEventListener("click", clickedTV)
    document.querySelector("#TV").classList.add("clickable")

    document.querySelector("#lamps").addEventListener("click", clickedlamps)
    document.querySelector("#lamps").classList.add("clickable")

    document.querySelector("#sink").addEventListener("click", clickedsink)
    document.querySelector("#sink").classList.add("clickable")


    function clickedsink() {
        console.log("you turned off the sink ")
        document.getElementById('pointsound').currentTime = 0;
        document.getElementById('pointsound').play();
        document.querySelector("#listsink").style.display = "none"
        points += 1
        document.querySelector("#pointcounter span").textContent = points;
        document.querySelector("#sink").classList.remove("clickable")
        document.querySelector("#sink").removeEventListener("click", clickedsink)
        if (points == 3) {
            gamewon()
            clearInterval(timer);
        }
    }

    function clickedTV() {
        console.log("you turned off TV ")
        document.getElementById('pointsound').currentTime = 0;
        document.getElementById('pointsound').play();
        document.querySelector("#listtv").style.display = "none"
        points += 1
        document.querySelector("#pointcounter span").textContent = points;
        document.querySelector("#TV").classList.remove("clickable")
        document.querySelector("#TV").removeEventListener("click", clickedTV)
        if (points == 3) {
            gamewon()
            clearInterval(timer);
        }
    }

    function clickedlamps() {
        console.log("you turned off lamps")
        document.getElementById('pointsound').currentTime = 0;
        document.getElementById('pointsound').play();
        document.querySelector("#listlamps").style.display = "none"
        points += 1
        document.querySelector("#pointcounter span").textContent = points;
        document.querySelector("#lamps").classList.remove("clickable")
        document.querySelector("#lamps").removeEventListener("click", clickedlamps)
        if (points == 3) {
            gamewon()
            clearInterval(timer);
        }
    }
}

function gameover() {
    document.querySelector("#lose").style.display = "block"
}

function gamewon() {
    document.querySelector("#win").style.display = "block"
    document.querySelector("#counter span").textContent = 10;
}

function reset() {
    document.querySelector("#listlamps").style.display = "block"
    document.querySelector("#listtv").style.display = "block"
    document.querySelector("#listsink").style.display = "block"
    counter = 10;
    startthegame()
    document.querySelector("#lose").style.display = "none"
    document.querySelector("#win").style.display = "none"
}