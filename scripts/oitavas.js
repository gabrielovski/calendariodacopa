function createGame(player1, hour, player2) {
  let player1alt = player1.slice(-1) === "a" ? "da" : "do"
  let player2alt = player2.slice(-1) === "a" ? "da" : "do"
  return `
    <li>
      <div class="jogo">
        <img src="./assets/${player1}.svg" alt="Bandeira ${player1alt} ${player1}" />
        <strong>${hour}</strong>
        <img src="./assets/${player2}.svg" alt="Bandeira ${player2alt} ${player2}" />
      </div>
    </li>
    <div class="nome-times">
      <h1>${player1}</h1>
      <h1>${player2}</h1>
    </div>
  `
}

let delay = -0.15
function createCard(date, day, games, finished) {
  delay = delay + 0.15
  return `
    <div class="card" style="animation-delay: ${delay}s">
      <h2>${date} <span>${day}</span></h2>
      <div class="finalizado">
        <h3>${finished}</h3>
      </div>
      <ul>
        ${games}
      </ul>
    </div>
  `
}

document.querySelector("#cards").innerHTML =
  createCard(
    "03/12",
    "sábado",
    createGame("a confirmar", "12:00", "a confirmar") +
      createGame("a confirmar", "16:00", "a confirmar"),
    "a confirmar"
  ) +
  createCard(
    "04/12",
    "domingo",
    createGame("a confirmar", "12:00", "a confirmar") +
      createGame("a confirmar", "16:00", "a confirmar"),
    "a confirmar"
  ) +
  createCard(
    "05/12",
    "segunda",
    createGame("a confirmar", "12:00", "a confirmar") +
      createGame("a confirmar", "16:00", "a confirmar"),
    "a confirmar"
  ) +
  createCard(
    "06/12",
    "terça",
    createGame("a confirmar", "12:00", "a confirmar") +
      createGame("a confirmar", "16:00", "a confirmar"),
    "a confirmar"
  )
