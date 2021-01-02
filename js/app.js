const startGameBtn = document.querySelector("#begin-game");
const game = new Game();

/**
 * Listens for click on `#begin-game` and calls startGame() on game object
 */

startGameBtn.addEventListener("click", () => {
  game.startGame();
  startGameBtn.style.display = "none";
  document.getElementById("play-area").style.opacity = "1";
});
