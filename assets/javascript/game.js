var $kenImage = $("#ken-image");
var $sakuraImage = $("#sakura-image");
var $chibiImage = $("#chibi-image");
var $ryuImage = $("#ryu-image");
var $attackBtn = $("#attack-btn");
var $playerHp
var $computerHp
var $playerXp
var $computerXp
var $playerHpDiv;
var $playerXpDiv;
var $computerHpDiv;
var $computerXpDiv;

var game = {
        player: "",
        computerPlayer: "",
        playerHp: 0,
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
            if (this.player === "") {
                this.player = player;
                this.playerHp = this.character[this.player].hp;
                this.playerAtk = this.character[this.player].atk;
                var attacker = $("<.attacker>");
                attacker.addClass(this.character[player]);
                attacker.attr('style="width: 200%"');
                atttacker.append(".attacker")
                for (var defender in this.characters) {
                    if (defender !== this.player) {
                        this.computerPlayer = defender;
                        console.log(defender);
                    }
                }
                var opponent = $(".defender");
                opponent.appendTo(this.computerPlayer);
                this.computerHp = this.character[this.computerPlayer].hp;
                this, counterAtk = this.character[this.computerPlayer].counterAtk;
                console.log();
            }
            this.startGame();
        },

        //set-up of game
        setUp: function () {
            this.healthSetup();
         //   this.xpSetup();

        },
        healthSetup: function (){
            $playerHpDiv = $("<div>");
            $computerHpDiv = $("<div>");
            $playerHpDiv.addClass('progress');
            $computerHpDiv.addClass('progress');
            $playerHp = $('<div role="progressbar" aria-valuemin="0" style="width: 0%;">');
            $computerHp = $('<div role="progressbar"  aria-valuemin="0" style="width: 0%;">');
            $playerHp.attr('width', this.playerHp + '%');
            $computerHp.attr('width', this.computerHp + '%');
            $playerHpDiv.addClass('progress-bar bg-danger');
            $computerHpDiv.addClass('progress-bar bg-danger');
            $('.playerHP').append($playerHpDiv.append($playerHp));
          $('.computerHP').append($computerHpDiv.append($computerHp));
            
        },
        xpSetup: function (){
            $playerXpDiv = $("<div>");
            $computerXpDiv = $("<div>");
            $playerXpDiv.addClass('progress');
            $computerXpDiv.addClass('progress');
            $playerXp = $('<div role="progressbar" aria-valuemin="0" style="width: 0%;">');
            $computerXp = $('<div role="progressbar"  aria-valuemin="0" style="width: 0%;">');
            $playerXp.attr('width', this.playerAtk + '%');
            $computerXp.attr('width', this.computerAtk + '%');
            $playerXpDiv.addClass('progress-bar bg-info');
            $computerXpDiv.addClass('progress-bar bg-info');
            $('.playerXP').append($playerXpDiv.append($playerXp));
           $('.computerXP').append($computerXpDiv.append($computerXp));
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
                        $computerHp.attr('width', this.computerHp + '%');
                        this.playerHp -= (this.computerAtk);
                        $playerHp.html(this.playerHp + '%');
                        $computerHp.html(this.computerHp + '%');
                        $playerHp.attr('width', this.playerHp + '%');
                        $playerXp.html(this.playerXP + '%');
                        $playerXp.attr('width', this.playerAtk + '%');

                        this.checkForWinner();
                    },

                    //check for winner
                    checkForWinner: function () {
                        if (this.computerHP <= 0) {
                            //you win
                            alert('You Win!');

                        } else if (this.playerHP <= 0) {
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