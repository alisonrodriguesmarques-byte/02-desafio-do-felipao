// pedra, papel ou tesoura + ranking

const objeto = ["pedra", "papel", "tesoura"];

// função que sorteia jogada
function objetoJogado() {
  return Math.floor(Math.random() * 3);
}

// ranking 
function calcularRank(vitorias, derrotas) {
  let saldo = vitorias - derrotas;
  let nivel;

  if (vitorias <= 10) {
    nivel = "Ferro";
  } else if (vitorias <= 20) {
    nivel = "Bronze";
  } else if (vitorias <= 50) {
    nivel = "Prata";
  } else if (vitorias <= 80) {
    nivel = "Ouro";
  } else if (vitorias <= 90) {
    nivel = "Diamante";
  } else if (vitorias <= 100) {
    nivel = "Lendário";
  } else {
    nivel = "Imortal";
  }

  return { saldo, nivel };
}

// placar
let vitorias = 0;
let derrotas = 0;

// número de partidas
let totalPartidas = 10;

// loop de partidas
for (let i = 0; i < totalPartidas; i++) {
  let jogada1 = objeto[objetoJogado()];
  let jogada2 = objeto[objetoJogado()];

  console.log(`\nRodada ${i + 1}`);
  console.log(`Player: ${jogada1}`);
  console.log(`CPU: ${jogada2}`);

  if (jogada1 === jogada2) {
    console.log("Empate 🤝");
  } else if (
    (jogada1 === "pedra" && jogada2 === "tesoura") ||
    (jogada1 === "papel" && jogada2 === "pedra") ||
    (jogada1 === "tesoura" && jogada2 === "papel")
  ) {
    console.log("Você venceu! 🥇");
    vitorias++;
  } else {
    console.log("Você perdeu! 💀");
    derrotas++;
  }
}

// calcula ranking final
let resultado = calcularRank(vitorias, derrotas);

// resutado final
console.log("\n===== RESULTADO FINAL =====");
console.log(
  `O Herói tem de saldo de ${resultado.saldo} está no nível de ${resultado.nivel}`
);
