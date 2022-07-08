// enemies objects

var playerAttack = 10;
var playerHealth = 100;
var playerMoney = 10;

var enemyNames = ["Dick Dickens","Lewd Carol","Whore Walt","Lemonhead John","Testicle Eddy"];
var enemyAttack = 10;
var enemyHealth = 50;


// alert to welcome
console.log("Welcome to Robot Gladiators!");
window.alert("Welcome to Robot Gladiators!");

// prompt to input name
var playerName = window.prompt("Name your robot to go to battle!");
console.log("Name your robot to go to battle! : " + playerName);

var fight = function(enemyName) {
    while (playerHealth > 0 && enemyHealth > 0) {
        // check if they want to skip
        var promptFight = window.prompt("Would you like to FIGHT or REST");

        if (promptFight === "REST" || promptFight === "rest" || promptFight === "Rest") {

            var confirmSkip = window.confirm("Are you sure you want to REST? The motel will cost 10 coins");

            if(confirmSkip) {
                window.alert(playerName + " decided to rest for this fight in the local motel it cost you 10 coins");
                playerMoney = playerMoney - 10;
                window.alert(playerMoney + "coins");
                break;
            }
        }

        enemyHealth = enemyHealth - playerAttack;
        window.alert(playerName + " attacked " + enemyName + " now has " + enemyHealth + " health left");

        if(enemyHealth <= 0) {
            window.alert(enemyName + " has died!")
            playerMoney = playerMoney + 20;
            break;
        } else {
            window.alert(enemyName + " still has " + enemyHealth + " health left");
        }

        playerHealth = playerHealth - enemyAttack;
        window.alert(enemyName + " attacked " + playerName + " now has " + playerHealth + " health left");

        if(playerHealth <= 0) {
            window.alert(playerName + " has died!")
            break;
        } else {
            window.alert(playerName + " still has " + playerHealth + " health left");
        }
    }
};

var startGame = function() {

    playerHealth = 100;
    playerAttack = 10;
    playerMoney = 10;


    for (var i = 0; i < enemyNames.length; i++) {
        if (playerHealth > 0) {
        window.alert('Welcome to Robot Gladiators! Round ' + (i + 1));
        var pickedEnemyName = enemyNames[i];
        enemyHealth = 50;
        fight(pickedEnemyName);
        }
        
        else {
        window.alert('You have lost your robot in battle! Game Over!');
        break;
        }
    }
    endGame();
};

var endGame = function() {
    if(playerHealth > 0) {
        window.alert("The game has now ended. Let's see how you did!");
    }
    else {
        window.alert("you have lost");
    }

    var playAgainConfirm = window.confirm("Would you like to play again?");

    if (playAgainConfirm) {
        startGame();
    }
    else {
        window.alert("Thank you for playing now go away")
    }
};








