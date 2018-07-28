var $kenImage = $("#ken-image");
var $sakuraImage = $("#sakura-image");
var $chibiImage = $("#chibi-image");
var $ryuImage = $("#ryu-image");
var $attackBtn = $("#attack-btn");
var $playerHP
var $computerHP
var $playerXP
var $computerXP
var $playerHpDiv;
var $playerXpDiv;
var $computerHpDiv;
var $computerXpDiv;

var game = {
        player: "",
        computerPlayer: "",
        playerHP: 0,
        computerHp: 0,
        playerAtk: 0,
        counterAtk: 0,

        characters: {
            "ken": {
                name: "Ken",
                hp: 125,
                atk: 8,
                counterAtk: 20
            },
            "sakura": {
                name: "Sakura",
                hp: 100,
                atk: 4,
                counterAtk: 10
            },
            "chibi": {
                name: "Chibi",
                hp: 115,
                atk: 6,
                counterAtk: 15
            },
            "ryu": {
                name: "Ryu",
                hp: 150,
                atk: 10,
                counterAtk: 25
            }
        },

        //select player
        selectPlayer: function (player) {
            if (this.player === " ") {
                this.player = player;
                this.playerHp = this.character[this.player].hp;
                this.playerAtk = this.character[this.player].atk;
                var attacker = $("<.attacker>");
                attacker.addClass(this.character[player]);
                attacker.attr();
                atttacker.appendTo(".attacker")
                for (var opponent in this.characters) {
                    if (opponent !== this.player) {
                        this.computerPlayer = opponent;
                    }
                }
                var opponent = $(".defender");
                opponent.appendTo(this.computerPlayer);
                this.computerHP = this.character[this.computerPlayer].hp;
                this, counterAtk = this.character[this.computerPlayer].counterAtk;
            }
            this.startGame();
        },

        //set-up of game
        setUp: function () {
            this.healthSetup();
            this.xpSetup();
    
            $('.playerHP').append($playerHpDiv.append($playerHP));
            $('.playerXP').append($playerXpDiv.append($playerXP));
            $('.computerHP').append($computerHpDiv.append($computerHP));
            $('.computerXP').append($computerXpDiv.append($computerXP));

        },
        healthSetup: function (){
            $playerHpDiv = $("<div>");
            $computerHpDiv = $("<div>");
            $playerHpDiv.addClass('progress');
            $computerHpDiv.addClass('progress');
            $playerHP = $('<div role="progressbar" aria-valuemin="0" style="width: 0%;">');
            $computerHP = $('<div role="progressbar"  aria-valuemin="0" style="width: 0%;">');
            $playerHP.css('width', this.playerHP + '%');
            $computerHP.css('width', this.computerHP + '%');
            $playerHpDiv = $("<div>");
            $computerHpDiv = $("<div>");
            $playerHpDiv.addClass('progress-bar bg-danger');
            $computerHpDiv.addClass('progress-bar bg-danger');
            
        },
        xpSetup: function (){
            $playerXpDiv = $("<div>");
            $computerXpDiv = $("<div>");
            $playerXpDiv.addClass('progress');
            $computerXpDiv.addClass('progress');
            $playerXP = $('<div role="progressbar" aria-valuemin="0" style="width: 0%;">');
            $computerXP = $('<div role="progressbar"  aria-valuemin="0" style="width: 0%;">');
            $playerXP.css('width', this.playerXP + '%');
            $computerXP.css('width', this.computerXP + '%');
            $playerXpDiv.addClass('progress-bar bg-info');
            $computerXpDiv.addClass('progress-bar bg-info');
        },

        startGame: function () {
            this.setUp();
            $attackBtn.addClass('btn btn-danger btn-lg');
            $attackBtn.html("Attack!");
            $("#attack-btn").append($attackBtn);
        },
        //attack function
        fight: function () {
                        var randomAtkMultiplier = Math.floor(Math.random() * 4) + 1;
                        $(".player").hide().html(this.player + " did an attack of " + this.playerAttack * randomAtkMultiplier);
                        $(".opponent").hide().html(this.computerPlayer + " did a counter attack of " + this.computerAttack);
                    },

                    //update players
                    update: function () {
                        $computerHP.css('width', this.computerHP + '%');
                        this.playerHP -= (this.computerAttack);
                        $playerHP.html(this.playerHP + '%');
                        $computerHP.html(this.computerHp + '%');
                        $playerHP.css('width', this.playerHP + '%');
                        $playerXP.html(this.playerXP + '%');
                        $playerXP.css('width', this.playerXP + '%');

                        this.checkForWinner();
                    },

                    //check for winner
                    checkForWinner: function () {
                        if (this.computerrHp <= 0) {
                            //you win
                            alert('You Win!');

                        } else if (this.playerHp <= 0) {
                            //you lose
                            alert('You Lose!');
                        }
                    }

                }



                // playing the actual game

                $(document).ready(function () {

                    $("#ken-image").on('click', function () {
                        var data = $(this).data("name");
                        game.selectPlayer(data);
                        console.log(data);
                    });

                    $ryuImage.on('click', function () {
                        var data = $(this).data("name");
                        game.selectPlayer(data);
                        console.log(data);
                    });

                    $sakuraImage.on('click', function () {
                        var data = $(this).data("name");
                        game.selectPlayer(data)
                        console.log(data);
                    });
                    $chibiImage.on('click', function () {
                        var data = $(this).data("name");
                        game.selectPlayer(data)
                        console.log(data);
                    });

                    $attackBtn.on('click', function () {
                        game.fight();
                        game.update();
                        console.log("Hi");
                    });
                });