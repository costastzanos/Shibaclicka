var clicks = 0;
var money = 0;

var xp = 1;
var lvl = 1;
var xpgathered = 0;
var xprequired = 10;


var reward = Math.floor(Math.random() * randomreward);
var randomreward = 100


function Pat(){
    clicks++;
    document.getElementById("clicks").innerHTML = clicks;
}

function LevelUp(){
    lvl = lvl + 1;
    xp = xp + 1;
    xprequired = xprequired * 2;

}

function ObjectiveComplete(){
    randomreward = randomreward * 2;
    money = money + reward;
}