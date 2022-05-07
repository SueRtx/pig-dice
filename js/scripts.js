function Player(id) {
  this.tempScore = 0;
  this.Score = 0;
  this.id = id;
}

Player.prototype.roll = function() {
  let diceRoll = Math.floor((Math.random()*6) + 1);
  if (diceRoll === 1) {
    this.tempScore = 0;
  } else {
    this.tempScore += diceRoll;
  }
  return [diceRoll, this.tempScore];
}

Player.prototype.hold = function() {
  this.Score += this.tempScore;
  this.tempScore = 0;
  return this.Score;
}

Player.prototype.reset = function() {
  this.Score = 0;
  this.tempScore = 0;
  return this.Score;
}

let player1 = new Player(1);
let player2 = new Player(2);
$(document).ready(function () {
  $("#startGame").click(function(event){
    event.preventDefault();
    $(".game").show();
    $("#startGame").hide();
  });

  $("#player1DiceRoll").click(function (event) {
    event.preventDefault();
    let diceRoll1 = player1.roll();
    $("#diceRoll1").text(diceRoll1[0]);
    $("#tempScore1").text(diceRoll1[1]);
    if (diceRoll1[0] === 1) {
      $("#player1DiceRoll").hide();
      $("#player1Hold").hide();
      $("#player2Hold").show();
      $("#player2DiceRoll").show();
    }
  });

  $("#player2DiceRoll").click(function (event) {
    event.preventDefault();
    let diceRoll2 = player2.roll();
    $("#diceRoll2").text(diceRoll2[0]);
    $("#tempScore2").text(diceRoll2[1]);
    if (diceRoll2[0] === 1) {
      $("#player2DiceRoll").hide();
      $("#player2Hold").hide();
      $("#player1Hold").show();
      $("#player1DiceRoll").show();
    }
  });

  $("#player1Hold").click(function (event) {
    event.preventDefault();
    $("#score1").text(player1.hold());
    $("#diceRoll1").text("");
    $("#tempScore1").text("");
    $("#player1DiceRoll").hide();
    $("#player1Hold").hide();
    $("#player2Hold").show();
    $("#player2DiceRoll").show();
    if (player1.Score >= 30) {
      $("#result1").show();
      $("#result1").text("WINNER");
      $("#turn2").hide();
      $("#playAgain").show();
    }
  });

  $("#player2Hold").click(function (event) {
    event.preventDefault();
    $("#score2").text(player2.hold());
    $("#diceRoll2").text("");
    $("#tempScore2").text("");
    $("#player2DiceRoll").hide();
    $("#player2Hold").hide();
    $("#player1Hold").show();
    $("#player1DiceRoll").show();
    if (player2.Score >= 100) {
      $("#result2").show();
      $("#result2").text("WINNER");
      $("#turn1").hide();
      $("#playAgain").show();
    }
  });

  $("#playAgain").click(function (event){
    event.preventDefault();
    $("#score1").text(player1.reset());
    $("#score2").text(player2.reset());
    $("#result1").hide();
    $("#result2").hide();
    $("#playAgain").hide();
    $("#turn1").show();
    $("#turn2").show();
  });
});



