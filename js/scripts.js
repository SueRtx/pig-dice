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
