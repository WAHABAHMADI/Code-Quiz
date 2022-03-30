function savedScores(){
    var highScores = JSON.parse(localStorage.getItem("highScores"))
    console.log(highScores);
    highScores.forEach(function(score){
        var grades =document.createElement("li")
        grades.textContent = score.score + " " + score.userInitial
        playerScore.appendChild(grades);
        
    })
}

savedScores();

