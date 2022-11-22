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

document.getElementById("botao").onclick = function () {
  var body = document.getElementsByTagName("body")[0]
  var color = body.getAttribute("class")

  if (color === "yellow") {
    body.classList.remove("yellow")
    body.classList.add("blue")
  } else if (color === "blue") {
    body.classList.remove("blue")
    body.classList.add("green")
  } else if (color === "green") {
    body.classList.remove("green")
    body.classList.add("yellow")
  }
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
  createCard("20/11", "domingo", createGame("catar", "0 x 2", "equador"), "finalizado") +
  createCard(
    "21/11",
    "segunda",
    createGame("inglaterra", "6 x 2", "irã") +
      createGame("senegal", "0 x 2", "holanda") +
      createGame("estados unidos", "1 x 1", "país de gales"), "finalizados"
  ) +
  createCard(
    "22/11",
    "terça",
    createGame("argentina", "07:00", "arábia saudita") +
      createGame("dinamarca", "10:00", "tunísia") +
      createGame("méxico", "13:00", "polônia") +
      createGame("frança", "16:00", "austrália"), "próximos jogos"
  ) +
  createCard(
    "23/11",
    "quarta",
    createGame("marrocos", "07:00", "croácia") +
      createGame("alemanha", "10:00", "japão") +
      createGame("espanha", "13:00", "costa rica") +
      createGame("bélgica", "16:00", "canadá"), "próximos jogos"
  ) +
  createCard(
    "24/11",
    "quinta",
    createGame("suíça", "07:00", "camarões") +
      createGame("uruguai", "10:00", "coreia do sul") +
      createGame("portugal", "13:00", "gana") +
      createGame("brasil", "16:00", "sérvia"), "próximos jogos"
  ) +
  createCard(
    "25/11",
    "sexta",
    createGame("país de gales", "07:00", "irã") +
      createGame("catar", "10:00", "senegal") +
      createGame("holanda", "13:00", "equador") +
      createGame("inglaterra", "16:00", "estados unidos"), "próximos jogos"
  ) +
  createCard(
    "26/11",
    "sábado",
    createGame("tunísia", "07:00", "austrália") +
      createGame("polônia", "10:00", "arábia saudita") +
      createGame("frança", "13:00", "dinamarca") +
      createGame("argentina", "16:00", "méxico"), "próximos jogos"
  ) +
  createCard(
    "27/11",
    "domingo",
    createGame("japão", "07:00", "costa rica") +
      createGame("bélgica", "10:00", "marrocos") +
      createGame("croácia", "13:00", "canadá") +
      createGame("espanha", "16:00", "alemanha"), "próximos jogos"
  ) +
  createCard(
    "28/11",
    "segunda",
    createGame("camarões", "07:00", "sérvia") +
      createGame("coreia do sul", "10:00", "gana") +
      createGame("brasil", "13:00", "suíça") +
      createGame("portugal", "16:00", "uruguai"), "próximos jogos"
  ) +
  createCard(
    "29/11",
    "terça",
    createGame("equador", "12:00", "senegal") +
      createGame("holanda", "12:00", "catar") +
      createGame("irã", "16:00", "estados unidos") +
      createGame("inglaterra", "16:00", "país de gales"), "próximos jogos"
  ) +
  createCard(
    "30/11",
    "quarta",
    createGame("tunísia", "12:00", "frança") +
      createGame("austrália", "12:00", "dinamarca") +
      createGame("arábia saudita", "16:00", "méxico") +
      createGame("polônia", "16:00", "argentina"), "próximos jogos"
  ) +
  createCard(
    "01/12",
    "quinta",
    createGame("croácia", "12:00", "bélgica") +
      createGame("marrocos", "12:00", "canadá") +
      createGame("costa rica", "16:00", "alemanha") +
      createGame("japão", "16:00", "espanha"), "próximos jogos"
  ) +
  createCard(
    "02/12",
    "sexta",
    createGame("coreia do sul", "12:00", "portugal") +
      createGame("gana", "12:00", "uruguai") +
      createGame("sérvia", "16:00", "suíça") +
      createGame("camarões", "16:00", "brasil"), "próximos jogos"
  )
