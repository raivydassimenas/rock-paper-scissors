const choices = ['Rock', 'Paper', 'Scissors'];

function getComputerChoice () {
    let compChoice = Math.floor(Math.random() * 3);
    return choices[compChoice];
}