
function savedScores(){
    var highScores = JSON.parse(localStorage.getItem("highScores"))
    console.log(highScores);
    highScores.forEach(function(score){
        var grades =document.createElement("li")
        grades.textContent = score.score + " " + score.userInitial
        var playerScore = document.querySelector ("#scores")
        playerScore.appendChild(grades);
        
    })
}

var clear = document.querySelector(".clear");
clear.addEventListener("click", function () {
    localStorage.clear();
    location.reload();
});



savedScores();