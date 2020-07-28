const BtnNumeroUser = document.getElementsByClassName("BtnNumeroUser");
const NumeroBingoSpan = document.getElementById("NumeroBingoSpan");
const NumAnteriores = document.getElementById("NumAnteriores");

let numeroBingo = 10;
let numeroUsado = false;
let maxNovoNumero = 105;

let tempoNovoNumero = 5000;
let tempoInterval = setInterval(novoNumero, tempoNovoNumero);

// Esta função incia o jogo
// Mostra os números no cartão do jogador
inicio();
function inicio() {
	let numero = [];
	let linha = 0;
	for (let i = 0; i < BtnNumeroUser.length; i++) {
		const random = Math.floor(Math.random() * 15 + (linha * 15) + 1);
		const check = numero.includes(random);

		if (check) {
			i--;
			continue;
		} else {
			numero.push(random);
			BtnNumeroUser[i].innerHTML = random;
			if ((i + 1) % 4 == 0) linha++;
		}
	}
	numeroBingo = Math.floor(Math.random() * maxNovoNumero + 1);
	NumeroBingoSpan.textContent = numeroBingo;
}

// Recebe o calor do cartão que o utilizador clicou
function userClick(numeroCartao) {
	for (let i = 0; i < BtnNumeroUser.length; i++) {
		const valor = Number(BtnNumeroUser[i].innerHTML);
		if (valor === Number(numeroCartao)) {
			if (valor === numeroBingo) {
				BtnNumeroUser[i].style.background = "grey";
				BtnNumeroUser[i].disabled = true;
				numeroUsado = true;
			}
			break;
		}
	}
}

// Quando o user clicar no btn "Bingo"
// Chama uma outra função que verifica  se o user venceu
// Se vencer pára o jogo
document.getElementById("BtnBingo").addEventListener("click", () => {
	const checkVitoriaVar = checkVitoria();
	if (checkVitoriaVar) {
		alert("Venceste");
		tempoInterval = clearInterval;
	} else alert("Ainda te faltam alguns números");
});

document.getElementById("BtnPausa").addEventListener("click", () => alert("Jogo em Pausa. Clica 'Ok' para continuar."));
document.getElementById("BtnRecomeçar").addEventListener("click", () => window.location.reload());

// Mostra um novo número na tela
function novoNumero() {
	const li = document.createElement("li");
	li.innerHTML = numeroBingo;
	if (numeroUsado) li.style.background = "green";
	else li.style.background = "red";
	NumAnteriores.appendChild(li);
	NumAnteriores.scrollTop = NumAnteriores.scrollHeight;
	numeroBingo = Math.floor(Math.random() * maxNovoNumero + 1);
	NumeroBingoSpan.textContent = numeroBingo;
	numeroUsado = false;
	if (tempoNovoNumero > 750) tempoNovoNumero = tempoNovoNumero - 50;
}

// Função que verifica de o user venceu
// Caso os btns estejam desabilitados
function checkVitoria() {
	// -------------  Horizontal
	if (BtnNumeroUser[0].disabled === true
		&& BtnNumeroUser[1].disabled === true
		&& BtnNumeroUser[2].disabled === true
		&& BtnNumeroUser[3].disabled === true
		&& BtnNumeroUser[4].disabled === true) return true;

	else if (BtnNumeroUser[5].disabled === true
		&& BtnNumeroUser[6].disabled === true
		&& BtnNumeroUser[7].disabled === true
		&& BtnNumeroUser[8].disabled === true
		&& BtnNumeroUser[9].disabled === true) return true;

	else if (
		BtnNumeroUser[10].disabled === true
		&& BtnNumeroUser[11].disabled === true
		&& BtnNumeroUser[12].disabled === true
		&& BtnNumeroUser[13].disabled === true
		&& BtnNumeroUser[14].disabled === true) return true;

	else if (BtnNumeroUser[15].disabled === true
		&& BtnNumeroUser[16].disabled === true
		&& BtnNumeroUser[17].disabled === true
		&& BtnNumeroUser[18].disabled === true
		&& BtnNumeroUser[19].disabled === true) return true;

	else if (BtnNumeroUser[20].disabled === true
		&& BtnNumeroUser[21].disabled === true
		&& BtnNumeroUser[22].disabled === true
		&& BtnNumeroUser[23].disabled === true
		&& BtnNumeroUser[24].disabled === true) return true;

	// -------------  Vertical
	else if (BtnNumeroUser[0].disabled === true
		&& BtnNumeroUser[5].disabled === true
		&& BtnNumeroUser[10].disabled === true
		&& BtnNumeroUser[15].disabled === true
		&& BtnNumeroUser[20].disabled === true) return true;

	else if (BtnNumeroUser[1].disabled === true
		&& BtnNumeroUser[6].disabled === true
		&& BtnNumeroUser[11].disabled === true
		&& BtnNumeroUser[16].disabled === true
		&& BtnNumeroUser[21].disabled === true) return true;

	else if (BtnNumeroUser[2].disabled === true
		&& BtnNumeroUser[7].disabled === true
		&& BtnNumeroUser[12].disabled === true
		&& BtnNumeroUser[17].disabled === true
		&& BtnNumeroUser[22].disabled === true) return true;

	else if (BtnNumeroUser[3].disabled === true
		&& BtnNumeroUser[8].disabled === true
		&& BtnNumeroUser[13].disabled === true
		&& BtnNumeroUser[18].disabled === true
		&& BtnNumeroUser[23].disabled === true) return true;

	else if (BtnNumeroUser[4].disabled === true
		&& BtnNumeroUser[9].disabled === true
		&& BtnNumeroUser[14].disabled === true
		&& BtnNumeroUser[19].disabled === true
		&& BtnNumeroUser[24].disabled === true) return true;

	// -------------  Diagonal
	else if (BtnNumeroUser[0].disabled === true
		&& BtnNumeroUser[6].disabled === true
		&& BtnNumeroUser[12].disabled === true
		&& BtnNumeroUser[18].disabled === true
		&& BtnNumeroUser[24].disabled === true
	) return true;

	else if (
		BtnNumeroUser[4].disabled === true
		&& BtnNumeroUser[8].disabled === true
		&& BtnNumeroUser[12].disabled === true
		&& BtnNumeroUser[16].disabled === true
		&& BtnNumeroUser[20].disabled === true
	) return true;

	else return false;
}