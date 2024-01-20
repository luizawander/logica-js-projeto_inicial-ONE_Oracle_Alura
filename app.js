alert("Número secreto: o jogo.");

let NumeroSecreto = parseInt(Math.random() * 100+1);

let chute = prompt('Escolha um número entre 1 e 100');

let tentativas = 1;

while (parseInt(chute) !== NumeroSecreto) {
    chute = prompt('Escolha um número entre 1 e 100');

    if (parseInt(chute) === NumeroSecreto) {
        alert(`Uau! Você acertou o número secreto ${NumeroSecreto} em ${tentativas} tentativas.`);
        break;
    } else {
        if (parseInt(chute) > NumeroSecreto) {
            alert(`O Número Secreto é menor que ${chute}`);
        } else {
            alert(`O Número Secreto é maior que ${chute}`);
        }
    }
    tentativas++;
}