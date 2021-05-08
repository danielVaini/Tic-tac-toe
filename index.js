const buttons = document.querySelectorAll('.option');
//count of move
  let cont = 0;
// a tie
  let end = document.querySelector('.end');
// User winner
  let userWinner = document.querySelector('.winner')
// Button reset game
  const resetButton = document.querySelector('.reset')
let pcBot = true


let array = [
  [0, 0, 0],
  [0, 0, 0],
  [0, 0, 0]
]
let countXWin = 0
let countOWin = 0
let countParty = 0
let xWin = document.querySelector('.x-win');
let oWin = document.querySelector('.o-win');
let numberParty = document.querySelector('.number-party');


function refresScoreBoard() {
  oWin.innerHTML = countOWin;
  xWin.innerHTML = countXWin;
  numberParty.innerHTML = countParty;
}

buttons.forEach(item => {
  item.addEventListener('click', () => {
    console.log(array)
    if (cont % 2 == 0) {
      item.innerHTML = "X";
      item.disabled = true;
      switch (item.className[0]) {
        case '1':
          array[0][0] = 'x'
          break;
        case '2':
          array[0][1] = 'x'
          break;
        case '3':
          array[0][2] = 'x'
          break;
        case '4':
          array[1][0] = 'x'
          break;
        case '5':
          array[1][1] = 'x'
          break;
        case '6':
          array[1][2] = 'x'
          break;
        case '7':
          array[2][0] = 'x'
          break;
        case '8':
          array[2][1] = 'x'
          break;
        case '9':
          array[2][2] = 'x'
          break;

      }
      cont++

      winner(array);

    } else if(cont % 2 != 0){   
      item.innerHTML = "O"
      item.disabled = true;
      switch (item.className[0]) {
        case '1':
          array[0][0] = 'o'
          break;
        case '2':
          array[0][1] = 'o'
          break;
        case '3':
          array[0][2] = 'o'
          break;
        case '4':
          array[1][0] = 'o'
          break;
        case '5':
          array[1][1] = 'o'
          break;
        case '6':
          array[1][2] = 'o'
          break;
        case '7':
          array[2][0] = 'o'
          break;
        case '8':
          array[2][1] = 'o'
          break;
        case '9':
          array[2][2] = 'o'
          break;
        }
      cont++

      winner(array);

    }
  })
})


function verify(cont) {
  if (cont == 9) {
    countParty++;
    resetButton.innerHTML = "New Game";
    refresScoreBoard();
    end.innerHTML = 'Empate'

  }
}

function winner(array) {
  // X winner  line 1 -> <- 
  if (array[0][0] == 'x' && array[0][1] == 'x' && array[0][2] == 'x') {
    userWinner.innerHTML = "X venceu"
    buttons.forEach(item => {
      item.disabled = true;
    })
    countXWin++;
    countParty++;
    resetButton.innerHTML = "New Game";
    refresScoreBoard()
    return true;

  }
  // X winner  line 2 -> <- 
  else if (array[1][0] == 'x' && array[1][1] == 'x' && array[1][2] == 'x') {
    userWinner.innerHTML = "X venceu"
    buttons.forEach(item => {
      item.disabled = true;
    })
    countXWin++;
    countParty++;
    resetButton.innerHTML = "New Game";
    refresScoreBoard()
    return true;
  }
  // X winner  line 3 -> <- 
  else if (array[2][0] == 'x' && array[2][1] == 'x' && array[2][2] == 'x') {
    userWinner.innerHTML = "X venceu"
    buttons.forEach(item => {
      item.disabled = true;
    })
    countXWin++;
    countParty++;
    resetButton.innerHTML = "New Game";
    refresScoreBoard()
    return true;
  }
  // X winner column 1
  else if (array[0][0] == 'x' && array[1][0] == 'x' && array[2][0] == 'x') {
    userWinner.innerHTML = "X venceu"
    buttons.forEach(item => {
      item.disabled = true;
    })
    countXWin++;
    countParty++;
    resetButton.innerHTML = "New Game";
    refresScoreBoard()
    return true;
  }
  // X winner column 2
  else if (array[0][1] == 'x' && array[1][1] == 'x' && array[2][1] == 'x') {
    userWinner.innerHTML = "X venceu"
    buttons.forEach(item => {
      item.disabled = true;
    })
    countXWin++;
    countParty++;
    resetButton.innerHTML = "New Game";
    refresScoreBoard()
    return true;
  }
  // X winner column 3
  else if (array[0][2] == 'x' && array[1][2] == 'x' && array[2][2] == 'x') {
    userWinner.innerHTML = "X venceu"
    buttons.forEach(item => {
      item.disabled = true;
    })
    countXWin++;
    countParty++;
    resetButton.innerHTML = "New Game";
    refresScoreBoard()
    return true;
  }
  // X winner \
  else if (array[0][0] == 'x' && array[1][1] == 'x' && array[2][2] == 'x') {
    userWinner.innerHTML = "X venceu"
    buttons.forEach(item => {
      item.disabled = true;
    })
    countXWin++;
    countParty++;
    resetButton.innerHTML = "New Game";
    refresScoreBoard()
    return true;
  }
  // X winner /
  else if (array[0][2] == 'x' && array[1][1] == 'x' && array[2][0] == 'x') {
    userWinner.innerHTML = "X venceu"
    buttons.forEach(item => {
      item.disabled = true;
    })
    countXWin++;
    countParty++;
    resetButton.innerHTML = "New Game";
    refresScoreBoard()
    return true;
  }

  // O winner  line 1 -> <- 
  else if (array[0][0] == 'o' && array[0][1] == 'o' && array[0][2] == 'o') {
    userWinner.innerHTML = "O venceu"
    buttons.forEach(item => {
      item.disabled = true;
    })
    countOWin++;
    countParty++;
    resetButton.innerHTML = "New Game";
    refresScoreBoard()
    return true;
  }
  // O winner  line 2 -> <- 
  else if (array[1][0] == 'o' && array[1][1] == 'o' && array[1][2] == 'o') {
    userWinner.innerHTML = "O venceu"
    buttons.forEach(item => {
      item.disabled = true;
    })
    countOWin++;
    countParty++;
    resetButton.innerHTML = "New Game";
    refresScoreBoard()
    return true;
  }
  // o winner  line 3 -> <- 
  else if (array[2][0] == 'o' && array[2][1] == 'o' && array[2][2] == 'o') {
    userWinner.innerHTML = "O venceu"
    buttons.forEach(item => {
      item.disabled = true;
    })
    countOWin++;
    countParty++;
    resetButton.innerHTML = "New Game";
    refresScoreBoard()
    return true;
  }
  // o winner column 1
  else if (array[0][0] == 'o' && array[1][0] == 'o' && array[2][0] == 'o') {
    userWinner.innerHTML = "O venceu"
    buttons.forEach(item => {
      item.disabled = true;
    })
    countOWin++;
    countParty++;
    resetButton.innerHTML = "New Game";
    refresScoreBoard()
    return true;
  }
  // o winner column 2
  else if (array[0][1] == 'o' && array[1][1] == 'o' && array[2][1] == 'o') {
    userWinner.innerHTML = "O venceu"
    buttons.forEach(item => {
      item.disabled = true;
    })
    countOWin++;
    countParty++;
    resetButton.innerHTML = "New Game";
    refresScoreBoard()
    return true;
  }
  // o winner column 3
  else if (array[0][2] == 'o' && array[1][2] == 'o' && array[2][2] == 'o') {
    userWinner.innerHTML = "O venceu"
    buttons.forEach(item => {
      item.disabled = true;
    })
    countOWin++;
    countParty++;
    resetButton.innerHTML = "New Game";
    refresScoreBoard()
    return true;
  }
  // o winner \
  else if (array[0][0] == 'o' && array[1][1] == 'o' && array[2][2] == 'o') {
    userWinner.innerHTML = "O venceu"
    buttons.forEach(item => {
      item.disabled = true;
    })
    countOWin++;
    countParty++;
    resetButton.innerHTML = "New Game";
    refresScoreBoard()
    return true;
  }
  // o winner /
  else if (array[0][2] == 'o' && array[1][1] == 'o' && array[2][0] == 'o') {
    userWinner.innerHTML = "O venceu"
    buttons.forEach(item => {
      item.disabled = true;
    })
    countOWin++;
    countParty++;
    resetButton.innerHTML = "New Game";
    refresScoreBoard()
    return true;
  } else {
    return verify(cont);
  }

}

resetButton.addEventListener('click', () => {
  reset()
  console.log(cont)
})

function reset() {
  array = [
    [0, 0, 0],
    [0, 0, 0],
    [0, 0, 0]
  ]

  buttons.forEach(item => {
    item.innerHTML = ""
    item.disabled = false
  })

  userWinner.innerHTML = "-"
  cont = 0;
  end.innerHTML = "";
  resetButton.innerHTML = "Reset Game"
}

function pcTurn(array, level) {
  if (level == "easy") {
    let selected = true;
    while (selected) {
      let randomLine = Math.round(Math.random() * 2);
      let randomColun = Math.round(Math.random() * 2);
      if (array[randomLine][randomColun] != "x" && array[randomLine][randomColun] != "o") {
        selected = false;
        console.log(array[randomLine][randomColun])
        switch (randomLine, randomColun) {
          case (0, 0):
            buttons[0].innerHTML = "O"
            buttons[0].disabled = true
            break;
          case (0, 1):
            buttons[1].innerHTML = "O"
            buttons[1].disabled = true
            break;
          case (0, 2):
            buttons[2].innerHTML = "O"
            buttons[2].disabled = true
            break;
          case (1, 0):
            buttons[3].innerHTML = "O"
            buttons[3].disabled = true
            break;
          case (1, 1):
            buttons[4].innerHTML = "O"
            buttons[4].disabled = true
            break;
          case (1, 2):
            buttons[5].innerHTML = "O"
            buttons[5].disabled = true
            break;
          case (2, 0):
            buttons[6].innerHTML = "O"
            buttons[6].disabled = true
            break;
          case (2, 1):
            buttons[7].innerHTML = "O"
            buttons[7].disabled = true
            break;
          case (2, 2):
            buttons[8].innerHTML = "O"
            buttons[8].disabled = true
            break;
        }
        return array[randomLine][randomColun] = "o"
      } else {
        selected = true
      }
    }

  }
}