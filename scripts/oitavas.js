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
    createGame("holanda", "3 x 1", "estados unidos") +
      createGame("argentina", "2 x 1", "austrália"),
    "encerrados"
  ) +
  createCard(
    "04/12",
    "domingo",
    createGame("frança", "3 x 1", "polônia") +
      createGame("inglaterra", "3 x 0", "senegal"),
    "encerrados"
  ) +
  createCard(
    "05/12",
    "segunda",
    createGame("japão", "12:00", "croácia") +
      createGame("brasil", "16:00", "coreia do sul"),
    "próximos jogos"
  ) +
  createCard(
    "06/12",
    "terça",
    createGame("marrocos", "12:00", "espanha") +
      createGame("portugal", "16:00", "suíça"),
    "próximos jogos"
  )
