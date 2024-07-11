let headPoint = 0;
let tailPoint = 0;

function exitGame() {
  exitBtn.addEventListener("click", function () {
    window.close();
  });
}
exitGame();

function startGame() {
  startBtn.addEventListener("click", function () {
    entranceSec.style.display = "none";
    gameSec.style.display = "flex";
  });
}
startGame();

function resetGame() {
  resetBtn.addEventListener("click", function () {
    headPoint = 0;
    tailPoint = 0;
    headScore.textContent = headPoint;
    tailScore.textContent = tailPoint;
    coinImg.src = "./img/coins.png";
  });
}
resetGame();

function flipCoin() {
  coin.addEventListener("click", function () {
    const randomCoin = Math.random() < 0.5 ? "head" : "tail";
    coinImg.style.animation = "none";
    setTimeout(() => {
      coinImg.style.animation = "flipCoin 1s forwards";
      setTimeout(() => {
        if (randomCoin === "head") {
          coinImg.src = "./img/head.webp";
          headPoint++;
          headScore.textContent = headPoint;
        } else {
          coinImg.src = "./img/cointail.png";
          tailPoint++;
          tailScore.textContent = tailPoint;
        }
      }, 500);
    }, 100);
  });
}
flipCoin();
