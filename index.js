const buttons = document.querySelectorAll('button');
let cont = 0;
let end = document.querySelector('.end');

let array = [
  [0,0,0],
  [0,0,0],
  [0,0,0]
]

buttons.forEach(item => {
  item.addEventListener('click', () => {
    if(cont % 2 == 0){
      item.innerHTML = "X";
      item.disabled = true;
      switch (item.className) {
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
      verify(cont);
    }else {
     
      item.innerHTML = "O"
      item.disabled = true;
      switch (item.className) {
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
      verify(cont);
    }
  })
})


function verify(cont) {
  if(cont == 9) {
    end.innerHTML = 'Empate'
  }
}

let userWinner = document.querySelector('.winner')

function winner(array) {
  // X winner  line 1 -> <- 
  if(array[0][0] == 'x' && array[0][1] == 'x' && array[0][2] == 'x'){
    userWinner.innerHTML = "X venceu"
    buttons.forEach(item => {
      item.disabled = true;
    })
  }
  // X winner  line 2 -> <- 
  if(array[1][0] == 'x' && array[1][1] == 'x' && array[1][2] == 'x'){
    userWinner.innerHTML = "X venceu"
    buttons.forEach(item => {
      item.disabled = true;
    })
  }
  // X winner  line 3 -> <- 
  if(array[2][0] == 'x' && array[2][1] == 'x' && array[2][2] == 'x'){
    userWinner.innerHTML = "X venceu"
    buttons.forEach(item => {
      item.disabled = true;
    })
  }
  // X winner column 1
  if(array[0][0] == 'x' && array[1][0] == 'x' && array[2][0] == 'x'){
    userWinner.innerHTML = "X venceu"
    buttons.forEach(item => {
      item.disabled = true;
    })
  }
  // X winner column 2
  if(array[0][1] == 'x' && array[1][1] == 'x' && array[2][1] == 'x'){
    userWinner.innerHTML = "X venceu"
    buttons.forEach(item => {
      item.disabled = true;
    })
  }
  // X winner column 3
  if(array[0][2] == 'x' && array[1][2] == 'x' && array[2][2] == 'x'){
    userWinner.innerHTML = "X venceu"
    buttons.forEach(item => {
      item.disabled = true;
    })
  }
  // X winner \
  if(array[0][0] == 'x' && array[1][1] == 'x' && array[2][2] == 'x'){
    userWinner.innerHTML = "X venceu"
    buttons.forEach(item => {
      item.disabled = true;
    })
  }
  // X winner /
  if(array[0][2] == 'x' && array[1][1] == 'x' && array[2][0] == 'x'){
    userWinner.innerHTML = "X venceu"
    buttons.forEach(item => {
      item.disabled = true;
    })
  }

   // O winner  line 1 -> <- 
   if(array[0][0] == 'o' && array[0][1] == 'o' && array[0][2] == 'o'){
    userWinner.innerHTML = "O venceu"
    buttons.forEach(item => {
      item.disabled = true;
    })
  }
  // O winner  line 2 -> <- 
  if(array[1][0] == 'o' && array[1][1] == 'o' && array[1][2] == 'o'){
    userWinner.innerHTML = "O venceu"
    buttons.forEach(item => {
      item.disabled = true;
    })
  }
  // o winner  line 3 -> <- 
  if(array[2][0] == 'o' && array[2][1] == 'o' && array[2][2] == 'o'){
    userWinner.innerHTML = "O venceu"
    buttons.forEach(item => {
      item.disabled = true;
    })
  }
  // o winner column 1
  if(array[0][0] == 'o' && array[1][0] == 'o' && array[2][0] == 'o'){
    userWinner.innerHTML = "O venceu"
    buttons.forEach(item => {
      item.disabled = true;
    })
  }
  // o winner column 2
  if(array[0][1] == 'o' && array[1][1] == 'o' && array[2][1] == 'o'){
    userWinner.innerHTML = "O venceu"
    buttons.forEach(item => {
      item.disabled = true;
    })
  }
  // o winner column 3
  if(array[0][2] == 'o' && array[1][2] == 'o' && array[2][2] == 'o'){
    userWinner.innerHTML = "O venceu"
    buttons.forEach(item => {
      item.disabled = true;
    })
  }
  // o winner \
  if(array[0][0] == 'o' && array[1][1] == 'o' && array[1][2] == 'o'){
    userWinner.innerHTML = "O venceu"
    buttons.forEach(item => {
      item.disabled = true;
    })
  }
  // o winner /
  if(array[0][2] == 'o' && array[1][1] == 'o' && array[2][0] == 'o'){
    userWinner.innerHTML = "O venceu"
    buttons.forEach(item => {
      item.disabled = true;
    })
  }

}