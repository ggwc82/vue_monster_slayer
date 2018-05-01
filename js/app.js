new Vue({
    el: "#app",
    data: {
        myHealth: 100,
        monsterHealth: 100,
        actionList: [],
        gameIsStarted: false
    },
    
    computed: {
        checkHealth: function() {
            if (this.myHealth <= 0) {
                alert("You have died. The monster has won");
                this.gameIsStarted = false;
            } else if (this.monsterHealth <= 0) {
                alert("You have killed the monster...you win!");
                this.gameIsStarted = false;
            } else {
                return;
            }
        }
    },
    methods: {
        beginAttack: function() {
            // my attack
            var myAttack = Math.floor(Math.random() * 10) + 1;
            this.monsterHealth -= myAttack;
            this.actionList.unshift({'playerTurn': true, 'text': "PLAYER HITS MONSTER FOR " + myAttack});

            // monster attack
            var monsterAttack = Math.floor(Math.random() * 10) + 1;
            this.myHealth -= monsterAttack;
            this.actionList.unshift({'playerTurn': false, 'text': "MONSTER HITS PLAYER FOR " + monsterAttack});
            this.checkHealth;
        },
        beginSpecialAttack: function() {
            // my special attack
            var myAttack = Math.floor(Math.random() * 10) + 10;
            this.monsterHealth -= myAttack;
            this.actionList.unshift({'playerTurn': true, 'text': "PLAYER HITS MONSTER FOR " + myAttack});
            
            // monster attack
            var monsterAttack = Math.floor(Math.random() * 10) + 1;
            this.myHealth -= monsterAttack;
            this.actionList.unshift({'playerTurn': false, 'text': "MONSTER HITS PLAYER FOR " + monsterAttack});
            this.checkHealth;
      
        },
        startNewGame: function() {
            this.gameIsStarted = true;
            this.myHealth = 100;
            this.monsterHealth = 100;
            this.actionList = [];
        },
        beginHeal: function() {
            // my heal
            var myHeal = 10;
            this.myHealth += myHeal;
            if (this.myHealth > 100) {
                this.myHealth = 100;
            }
            this.actionList.unshift({'playerTurn': true, 'text': "PLAYER HEALS FOR " + myHeal});

            // monster attack
            var monsterAttack = Math.floor(Math.random() * 10) + 1;
            this.myHealth -= monsterAttack;
            this.actionList.unshift({'playerTurn': false, 'text': "MONSTER HITS PLAYER FOR " + monsterAttack});
            this.checkHealth;      
        },
        giveUp: function() {
            alert("You have given up! Game over!");
            this.gameIsStarted = false;
        }
    },
    watch: {

    }
})