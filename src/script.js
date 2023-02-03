// // "use strict";

// // TODO - write your code here.


const randomDamage = () => Math.floor(Math.random() * 10 ) + 1;
                                                
let randNum = null;

let chooseOption = (opt1, opt2) => randNum = (Math.random() > 0.5 ? 1 : 0) == 0 ? opt1 : opt2;

function attackPlayer(health) {
    return Number(health) - randomDamage();
    }

const logHealth = (player, health) => console.log(`${player} health: ${health}`);

const logDeath = (winner, loser) => console.log(`${winner} defeated ${loser}`);

const isDead = (health) => health <= 0 ? true : false;

let attacker = null;

function fight(player1, player2, player1Health, player2Health){
    while(true) 
    {
        attacker = chooseOption(player1, player2);  

        if (attacker === player1) {
                player2Health = attackPlayer(player2Health);
               logHealth(player2, player2Health);
                if (isDead(player2Health)) {
                    logDeath(player1, player2);
                    break;
                }
            }
            else {
                player1Health = attackPlayer(player1Health);
                logHealth(player1, player1Health);
                if (isDead(player1Health)) {
                    logDeath(player2, player1);
                    break;
                }
                };
    }
}
fight("Mitch", "Adam", 100, 100)


//Extended Challenges

    //getGrade

function getGrade(input) {
    if (input >= 90) {
        grade = "A";
    } else if (input >= 80) {
        grade = "B";
    } else if (input >= 70) {
        grade = "C";
    } else if (input >= 60) {
        grade = "D";
    } else {
        grade = "F";
    } return grade;
}
console.log(getGrade(10));
console.log(getGrade(92));
console.log(getGrade(84));
console.log(getGrade(66));

//     //prioritize

function prioritize(urgent, important) {
    if (urgent === true && important === true) {
        priority = 1;
    }else if (urgent !== true && important === true) {
        priority = 2;
    }else if (urgent === true && important !== true) {
        priority = 3;
    }else {
        priority = 4;
    }
    return priority;
}

console.log(prioritize(true, false));

    //calculatePay

function calculatePay(wage, hours) {
    if (hours < 40) {
        return wage * hours
    }else {
        return ((wage * 40) + ((hours - 40)*(wage * 1.5)))
    }
}

console.log(calculatePay(10, 20));
console.log(calculatePay(10, 50));