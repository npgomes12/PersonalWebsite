function playGame() {
  // Obains human's choice
  const humanChoice = document.querySelector(
    'input[name="choice"]:checked'
  ).value;

  // Computer chooses between four options, Rock, Paper, Scissors, or Spock
  const choices = ['Rock', 'Paper', 'Scissors', 'Spock'];
  const computerChoice = choices[Math.floor(Math.random() * choices.length)];

  // Display choices
  document.getElementById('humanChoice').textContent = humanChoice;
  document.getElementById('computerChoice').textContent = computerChoice;

  // Final winner
  let result;

  // Computer 100% wins if chooses Spock
  if (computerChoice === 'Spock') {
    result = 'lose';
  }
  // Check for tie
  else if (humanChoice === computerChoice) {
    result = 'tie';
  }
  // Check for human's win conditions
  else if (
    (humanChoice === 'Rock' && computerChoice === 'Scissors') ||
    (humanChoice === 'Paper' && computerChoice === 'Rock') ||
    (humanChoice === 'Scissors' && computerChoice === 'Paper')
  ) {
    result = 'win';
  } else {
    result = 'lose';
  }

  // Background color updates based on if win, tie, or lose
  if (result === 'win') {
    document.body.style.backgroundColor = 'green';
    alert('YOU WON!!!!!');
  } else if (result === 'lose') {
    document.body.style.backgroundColor = 'red';
    alert('YOU LOSE!!!!!');
  } else {
    document.body.style.backgroundColor = 'yellow';
    alert('TIE!!!!');
  }
}
