dataobj = {
  playerHealth: 100,
  monsterHealth: 100,
  gameIsRunning: false,
  turns: [],
};
var app = new Vue({
  el: "#game",
  data: dataobj,
  methods: {
    startGame: function () {
      this.gameIsRunning = true;
      this.playerHealth = 100;
      this.monsterHealth = 100;
      this.show = false;
      this.turns = [];
    },
    attack: function () {
      var damage = this.calculateDamage(10, 3);
      this.monsterHealth -= damage;
      this.turns.unshift({
        isplayer: true,
        text: "Player hits Monster for " + damage,
      });
      var damage = this.calculateDamage(10, 3);
      this.playerHealth -= damage;
      this.turns.unshift({
        isplayer: false,
        text: "Monster hits player for " + damage,
      });
      this.checkResult();
    },
    calculateDamage: function (max, min) {
      return Math.max(Math.floor(Math.random() * max) + 1, min);
    },
    checkResult: function () {
      if (this.playerHealth <= 0) {
        if (confirm("You Lost! Start game Again?")) {
          this.startGame();
        } else {
          this.gameIsRunning = false;
          return;
        }
      } else if (this.monsterHealth <= 0) {
        if (confirm("You Won! Start game Again?")) {
          this.startGame();
        } else {
          this.gameIsRunning = false;
          return;
        }
      }
    },
    specialAttack: function () {
      var damage = this.calculateDamage(20, 10);
      this.monsterHealth -= damage;
      this.turns.unshift({
        isplayer: true,
        text: "Player hits Monster hard for " + damage,
      });
      var damage = this.calculateDamage(10, 3);
      this.playerHealth -= damage;
      this.turns.unshift({
        isplayer: false,
        text: "Monster hits player for " + damage,
      });
      this.checkResult();
    },
    heal: function () {
      if (this.playerHealth <= 90) {
        this.playerHealth += 10;
        this.turns.unshift({
          isplayer: true,
          text: "Player heal up " + 10,
        });
      } else {
        this.playerHealth = 100;
      }
      var damage = this.calculateDamage(10, 3);
      this.playerHealth -= damage;
      this.turns.unshift({
        isplayer: false,
        text: "Monster hits player for " + damage,
      });
    },
    giveUp: function () {
      if (confirm("You Lost! Start game Again?")) {
        this.startGame();
      } else {
        this.gameIsRunning = false;
        return;
      }
    },
  },
});
