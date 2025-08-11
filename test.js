var scores, roundscore, activePlayer, dice, gamePlaying;

newButton()


document.querySelector(".btn-roll").addEventListener("click", function () {
        if(gamePlaying){
  // 1. Random Number
  dice = Math.floor(Math.random() * 6) + 1;
  // 2. Display the result
  var diceDom = document.querySelector(".dice");
  diceDom.style.display = "block";
  diceDom.src = "dice-" + dice + ".png";
  // uUpdate a round score if the rolled number was not a one
  if (dice !== 1) {
    roundscore += dice;
    document.querySelector("#current-" + activePlayer).textContent = roundscore;
  } else {
    // Move to player 2
   nextPlayer()
  }   
        }

  
});

document.querySelector(".btn-hold").addEventListener("click", function(){
        if(gamePlaying){
// To add the current score to the player's global score
scores[activePlayer] += roundscore 

// Update the UI
document.querySelector("#score-" + activePlayer).textContent = scores[activePlayer];

// Check if player won the game 
if(scores[activePlayer] >= 100){
         document.querySelector('#player-' + activePlayer ).textContent = 'Winner!!!';
         document.querySelector(".dice").style.display = "none";
         document.querySelector(".player-" + activePlayer + "-BG").classList.add("winner")
         document.querySelector(".player-" + activePlayer + "-BG").classList.remove("active")
gamePlaying = false;
} else{
        nextPlayer()
}

        }





})

document.querySelector(".btn-new").addEventListener("click", newButton);

function newButton(){
scores = [0,0];
roundscore = 0;
activePlayer = 0;
gamePlaying = true;

document.querySelector('.dice').style.display = "none"

document.getElementById("score-0").textContent = 0;
document.getElementById("score-1").textContent = 0;
document.getElementById("current-0").textContent = 0;
document.getElementById("current-1").textContent = 0;
document.querySelector('#player-0').textContent = 'Player 1'
document.querySelector("#player-1").textContent = "Player 2"

}


function nextPlayer(){
         activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
      roundscore = 0;

    document.getElementById("current-0").textContent = "0";
      document.getElementById("current-1").textContent = "0";

      document.querySelector(".player-1-BG").classList.toggle("active");
      document.querySelector(".player-0-BG").classList.toggle("active");
      
 document.querySelector(".player-" + activePlayer + "-BG").classList.remove("winner")
      document.querySelector(".dice").style.display = "none";


      
}
