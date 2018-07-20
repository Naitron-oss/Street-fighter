var $kenImage = $("#ken-image");
var $sakuraImage =("#sakura-image");
var $chibiImage = ("#chibi-image");
var $ryuImage = ("#ryu-image");
var $attackBtn = ("#attack-btn");
var $playerHP
var $computerHP
var $playerXP
var $computerXP

var game = {
    player: "",
    computerPlayer: "",
    playerHP: 0,
    computerHp: 0,
    playerAtk: 0,
    counterAtk:0,

    characters:{
        "ken": {
            name: "Ken",
            hp: 100,
            atk: 6,
            counterAtk: 20
        },
        "sakura":{
            name: "Sakura",
            hp: 100,
            atk: 6,
            counterAtk: 10
        },
        "chibi":{
            name: "Chibi",
            hp: 100,
            atk: 6,
            counterAtk: 15
        },
        "ryu":{
            name: "Ryu",
            hp: 100,
            atk: 6,
            counterAtk: 25
        }},

           //select player
selectCharacter: function(player){
   if (this.player === " "){
    this.player = player;
    this.playerHp = this.character[this.player].hp;
    this.playerAtk = this.character[this.player].atk;
    var attacker =  $("<attacker>");
    attacker.addClass(this.character[player]);
    attacker.attr();
    atttacker.appendTo(".attacker")
for(var opponent in this.characters){
    if(opponent !== this.player){
        this.computerPlayer = opponent;
    }
}
this.computerHP = this.character[this.computerPlayer].atk;
this,counterAtk = this.character[this.computerPlayer].counterAtk;
   }
///start game
this.startGame();
},

startGame: function(){

},
//attack function
fight: function(){
    var playerAttack ={
        attack : function(){

        }
       // for(loop) to increase attack strength

        //decrease opponet health

        //counter atk decrease player health
        
    }
}

}
 
    



$(document).ready(function(){

});