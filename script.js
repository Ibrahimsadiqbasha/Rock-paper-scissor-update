const computer = document.querySelector(".computer img");
const player = document.querySelector(".player img");
const computerPoints = document.querySelector(".computerPoints");
const playerPoints = document.querySelector(".playerPoints");
const options = document.querySelectorAll(".options button");

options.forEach((option) => {
  option.addEventListener("click", () => {
    computer.classList.add("shakeComputer");
    player.classList.add("shakePlayer");

    setTimeout(() => {
      computer.classList.remove("shakeComputer");
      player.classList.remove("shakePlayer");

      
      player.src = "img/" + option.innerHTML.toLowerCase() + "Player.png";

      const choice = ["STONE", "PAPER", "SCISSORS"];
      let arrayNo = Math.floor(Math.random() * 3);
      let computerChoice = choice[arrayNo];
      computer.src = "img/" + computerChoice.toLowerCase() + "Computer.png";

      let cPoints = parseInt(computerPoints.innerHTML);
      let pPoints = parseInt(playerPoints.innerHTML);

      if (option.innerHTML === "STONE") {
        if (computerChoice === "PAPER") cPoints++;
        else if (computerChoice === "SCISSORS") pPoints++;
      } else if (option.innerHTML === "PAPER") {
        if (computerChoice === "SCISSORS") cPoints++;
        else if (computerChoice === "STONE") pPoints++;
      } else if (option.innerHTML === "SCISSORS") {
        if (computerChoice === "STONE") cPoints++;
        else if (computerChoice === "PAPER") pPoints++;
      }


      computerPoints.innerHTML = cPoints;
      playerPoints.innerHTML = pPoints;


      if (pPoints === 10 || cPoints === 10) {
        setTimeout(() => {
          if (pPoints === 10) {
            alert("🎉 Player Wins the Game!");
          } else {
            alert("🤖 Computer Wins the Game!");
          }

          // Reset game
          computerPoints.innerHTML = 0;
          playerPoints.innerHTML = 0;
          computer.src = "img/stoneComputer.png";
          player.src = "img/stonePlayer.png";
        }, 200); // slight delay for smoother alert
      }
    }, 900);
  });
});
