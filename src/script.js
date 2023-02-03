"use strict";

// TODO - write your code here.


const randomDamage = () => Math.floor(Math.random() * 10 ) + 1;
                                                
let randNum = null;

const chooseOption = (opt1, opt2) => randNum = (Math.random() > 0.5 ? 1 : 0) == 0 ? opt1 : opt2;

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
            if (attacker = player1) {
                player2Health = attackPlayer(player2Health);
                console.log(logHealth(player2, player2Health));
                if (isDead(player2Health)) {
                    console.log(logDeath(player1, player2));
                    break;
                }
            }
            else {
                player1Health = attackPlayer(player1Health);
                console.log(logHealth(player1, player1Health));
                if (isDead(player1Health)) {
                    console.log(logDeath(player2, player1));
                    break;
                }
                };
    }
}
console.log(fight(`Mitch`, `Adam`, 100, 100))