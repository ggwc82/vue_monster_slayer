new Vue({
    el: "#app",
    data: {
        myHealth: 100,
        monsterHealth: 100,
        actionList: [],
    },
    
    computed: {
        checkHealth: function() {
            if (this.myHealth <= 0) {
                alert("You have died. The monster has won");
                this.startNewGame();
            } else if (this.monsterHealth <= 0) {
                alert("You have killed the monster...you win!");
                this.startNewGame();
            } else {
                return
            }
        }
    },
    methods: {
        beginAttack: function() {
            // my attack
            var myAttack = Math.floor(Math.random() * 10) + 1;
            this.monsterHealth -= myAttack;
            this.actionList.push("PLAYER HITS MONSTER FOR " + myAttack);

            // monster attack
            var monsterAttack = Math.floor(Math.random() * 10) + 1;
            this.myHealth -= monsterAttack;
            this.actionList.push("MONSTER HITS PLAYER FOR " + monsterAttack);
            this.checkHealth;
        },
        beginSpecialAttack: function() {
            // my special attack
            var myAttack = Math.floor(Math.random() * 10) + 10;
            this.monsterHealth -= myAttack;
            this.actionList.push("PLAYER HITS MONSTER FOR " + myAttack);
            
            // monster attack
            var monsterAttack = Math.floor(Math.random() * 10) + 1;
            this.myHealth -= monsterAttack;
            this.actionList.push("MONSTER HITS PLAYER FOR " + monsterAttack);
            this.checkHealth;
      
        },
        startNewGame: function() {
            this.myHealth = 100;
            this.monsterHealth = 100;
            this.actionList = [];
        },
        beginHeal: function() {
            // my heal
            var myHeal = Math.floor(Math.random() * 10) + 1;
            this.myHealth += myHeal;
            this.actionList.push("PLAYER HEALS FOR " + myHeal);

            // monster attack
            var monsterAttack = Math.floor(Math.random() * 10) + 1;
            this.myHealth -= monsterAttack;
            this.actionList.push("MONSTER HITS PLAYER FOR " + monsterAttack);
            this.checkHealth;      
        },
        giveUp: function() {
            alert("You have given up! Game will reset now...");
            this.startNewGame();
        }
    },
    watch: {

    }
})