#!/usr/bin/env node

const yargs = require('yargs')

const incChoice = yargs
 .usage("Usage: -c <choice>")
 .option("c", { alias: "choice", describe: "rock paper scissors", type: "string", demandOption: true })
 .argv;

class Game {
  constructor (playerChoice, computerChoice) {
    this.playerChoice = playerChoice
    this.computerChoice = computerChoice
    this.players = []
  }

  determineWinner (){
    //console.log('player and computer choice', this.playerChoice)
    if (this.playerChoice === 'rock' && this.computerChoice === 'paper') this.loseCondition();
    if (this.playerChoice === 'rock' && this.computerChoice === 'scissors') this.wincondition(); 
    if (this.playerChoice === 'rock' && this.computerChoice === 'rock') this.tieCondition(); 
    if (this.playerChoice === 'paper' && this.computerChoice === 'rock') this.wincondition(); 
    if (this.playerChoice === 'paper' && this.computerChoice === 'scissors') this.loseCondition(); 
    if (this.playerChoice === 'paper' && this.computerChoice === 'paper') this.tieCondition(); 
    if (this.playerChoice === 'scissors' && this.computerChoice === 'rock') this.loseCondition(); 
    if (this.playerChoice === 'scissors' && this.computerChoice === 'paper') this.wincondition(); 
    if (this.playerChoice === 'scissors' && this.computerChoice === 'scissors') this.tieCondition(); 
  }
  wincondition () {
    console.log(`Player wins!  ${this.playerChoice} beats ${this.computerChoice}!`)
    return
  }

  tieCondition () {
      console.log(`There has been a tie..  ${this.playerChoice} ties ${this.computerChoice}.`)
      return
  }

  loseCondition () {
    console.log(`Player lost.  ${this.playerChoice} does not beat ${this.computerChoice}!`)
    return

}
}

class Character {
    constructor(name){
        this.name = name
    }

    selectChoice( choice ){
        if(choice !== undefined){
            this.choice = choice
        }
        else {
            let choices = ['rock','paper','scissors']
            let selection = Math.floor(Math.random() * 3)
            this.choice = choices[selection]
        }
        return this.choice
    }
}

let player = new Character('player')
player.selectChoice(incChoice.choice)

let computer = new Character('computer')
computer.selectChoice()

let newGame = new Game(player.choice, computer.choice)

newGame.determineWinner()