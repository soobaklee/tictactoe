/*----- constants -----*/ 
const numOfPlays = 9;
const player1 = 'X'
const player2 = 'O'
const b1 = document.getElementById('b1');
const b2 = document.getElementById('b2');
const b3 = document.getElementById('b3');
const b4 = document.getElementById('b4');
const b5 = document.getElementById('b5');
const b6 = document.getElementById('b6');
const b7 = document.getElementById('b7');
const b8 = document.getElementById('b8');
const b9 = document.getElementById('b9');

/*----- app's state (variables) -----*/ 
var gameHistory = [];
var player;
var played;


/*----- cached element refereces ----*/ 






/*----- event listeners -----*/ 
// document.querySelectorAll('.button').addEventListener('click', handleClick);
document.getElementById('b1').addEventListener('click', turn);
document.getElementById('b2').addEventListener('click', turn);
document.getElementById('b3').addEventListener('click', turn);
document.getElementById('b4').addEventListener('click', turn);
document.getElementById('b5').addEventListener('click', turn);
document.getElementById('b6').addEventListener('click', turn);
document.getElementById('b7').addEventListener('click', turn);
document.getElementById('b8').addEventListener('click', turn);
document.getElementById('b9').addEventListener('click', turn);






/*----- functions -----*/

// init;


//Possible winning combinations

function getWinner() {
    if (b1 !== 'T' && this.b1.innerHTML === this.b2.innerHTML && this.b1.innerHTML === this.b3.innerHTML) {alert(`${this.b1.innerHTML} is WINNER!!!`);
    } else if (b4 !== 'T' && this.b4.innerHTML === this.b5.innerHTML && this.b4.innerHTML === this.b6.innerHTML) {alert(`${this.b4.innerHTML} is WINNER!!!`);
    } else if (b7 !== 'T' && this.b7.innerHTML === this.b8.innerHTML && this.b7.innerHTML === this.b9.innerHTML) {alert(`${this.b7.innerHTML} is WINNER!!!`);
    } else if (b1 !== 'T' && this.b1.innerHTML === this.b4.innerHTML && this.b1.innerHTML === this.b7.innerHTML) {alert(`${this.b1.innerHTML} is WINNER!!!`);
    } else if (b2 !== 'T' && this.b2.innerHTML === this.b5.innerHTML && this.b2.innerHTML === this.b8.innerHTML) {alert(`${this.b2.innerHTML} is WINNER!!!`);
    } else if (b3 !== 'T' && this.b3.innerHTML === this.b6.innerHTML && this.b3.innerHTML === this.b9.innerHTML) {alert(`${this.b3.innerHTML} is WINNER!!!`);
    } else if (b1 !== 'T' && this.b1.innerHTML === this.b5.innerHTML && this.b1.innerHTML === this.b9.innerHTML) {alert(`${this.b1.innerHTML} is WINNER!!!`);
    } else if (b3 !== 'T' && this.b3.innerHTML === this.b5.innerHTML && this.b3.innerHTML === this.b7.innerHTML) {alert(`${this.b3.innerHTML} is WINNER!!!`);
    } else if (played >= 9) {
        alert(`Cat's Scratch
        Play Again!`);
    }
}




function turn(){
    console.log(this.getAttribute('id'))

    var played = this.getAttribute('id');

    gameHistory.push(played);

    console.log(gameHistory);


    var player = 'X'
    if(gameHistory.length%2!==0){
        player = 'O';
    }

   document.getElementById(played).innerHTML = player;
   document.getElementById(played).style.backgroundColor = "yellow";
   document.getElementById(played).style.color = "black";
   setTimeout(getWinner,200);
}