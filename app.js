// var a=10;
// console.log(a);
let score = [0,1,2,3,4,5,6];
console.log(score);
var turn;
var team1 = {
    // team 1 detailes
    name: "RM",
    runs:[],
    score:0
}
console.log(team1);
var team2 = {
    // team 2 detailes
    name: "Huseca",
    runs:[],
    score:0
}
console.log(team2);
window.onload=()=>{
    selectTurn();
    updateButtonText();
    updateScore();
    updateName();
    
}
selectTurn=()=>{
    console.log("select turn");
    turn = Math.round(Math.random())+1;
    console.log(turn);
}
updateButtonText=()=>{
    var button=document.getElementById('strike-button-1');
    console.log(button);
    button.textContent = `${turn==1?team1.name:team2.name}Strike`
}
updateScore =()=>{
    document.getElementById('team-1-score').textContent = team1.score;
    document.getElementById('team-2-score').textContent = team2.score;
}
updateName=()=>{
    document.getElementById('team-1-name').textContent=team1.name;
    document.getElementById('team-2-name').textContent=team2.name;
}
//var handleStrikeButtonClick=()=>{
    //console.log()

