var kenImage = $("#ken-image");
var sakuraImage = $("#sakura-image");
var chibiImage = $("#chibi-image");
var ryuImage = $("#ryu-image");
var attackBtn = $("#attack-btn");
var $playerHP
var $computerHP
var $playerXP
var $computerXP
var $player1Div;
var $player2Div;

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
        selectCharacter: function (player) {
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
                var opponent = $(".opponent");
                opponent.appendTo(this.computerPlayer);
                this.computerHP = this.character[this.computerPlayer].hp;
                this, counterAtk = this.character[this.computerPlayer].counterAtk;
            }
            this.startGame();
        },

        //set-up of game
        setUp: function () {

            $player1Div = $("<div>");
            $player2Div = $("<div>");
            $playerHP = $('<div role="progressbar" aria-valuemin="0" style="width: 0%;">');
            $computerHP = $('<div role="progressbar"  aria-valuemin="0" style="width: 0%;">');
            $playerXP = $('<div role="progressbar" aria-valuemin="0" style="width: 0%;">');
            $computerXP = $('<div role="progressbar"  aria-valuemin="0" style="width: 0%;">');
            $player1Div.addClass('progress');
            $player2Div.addClass('progress');
            $playerBar.addClass('progress-bar');
            $opponentBar.addClass('progress-bar progress-bar-danger');
            $playerHealth.css('width', this.playerHP + '%');
            $opponentHealth.css('width', this.computerHP + '%');
            $playerXP.css('width', this.playerXP + '%');
            $opponentXP.css('width', this.computerXP + '%');
            $('.player').append($player1Div.append($playerBar));
            $('.opponent').append($player2Div.append($opponentBar));

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
                        $playerStats.hide().html(this.player + " did an attack of " + this.playerAttack * randomAtkMultiplier);
                        $computerStats.hide().html(this.computerPlayer + " did a counter attack of " + this.computerAttack);
                    },

                    //update players
                    update: function () {
                        $opponentBar.css('width', this.computerHP + '%');
                        this.playerHp -= (this.computerAttack);
                        $playerBar.html(this.playerHP + '%');
                        $opponentBar.html(this.computerHp + '%');
                        $playerBar.css('width', this.playerHP + '%');
                        $playerBar.html(this.playerXP + '%');
                        $playerBar.css('width', this.playerXP + '%');

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

                    kenImage.on('click', function () {
                        var data = $(this).data("name");
                        game.selectPlayer(data);
                    });

                    ryuImage.on('click', function () {
                        var data = $(this).data("name");
                        game.selectPlayer(data);
                    });

                    sakuraImage.on('click', function () {
                        var data = $(this).data("name");
                        game.selectPlayer(data)
                    });
                    chibiImage.on('click', function () {
                        var data = $(this).data("name");
                        game.selectPlayer(data)
                    });

                    attackBtn.on('click', function () {
                        game.fight();
                        game.update();
                    });
                });