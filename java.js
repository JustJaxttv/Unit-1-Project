document.getElementById("chiefs").addEventListener("click", chiefsWin);
document.getElementById("49rs").addEventListener("click", ninersWin);

function chiefsWin() {
    document.getElementById("chiefsDiv").style.backgroundColor = "yellow";
    document.getElementById("ninersDiv").style.backgroundColor = "#B3995D";
}

function ninersWin() {
    document.getElementById("ninersDiv").style.backgroundColor = "yellow";
    document.getElementById("chiefsDiv").style.backgroundColor = "#B3995D";
}

function favTeam() {
    let x = document.getElementById("team").value;
    document.getElementById("fav").innerHTML = x;
}

function revealWinner() {

    i = 0;
    while (i <= 4) {
        var newParagraph = document.createElement("p");
        var text = document.createTextNode("The Chiefs won the Super Bowl!");
        newParagraph.appendChild(text);
        var element = document.getElementById("winner")
        element.appendChild(newParagraph);
        i = i + 1;
    }
}