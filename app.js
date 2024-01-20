alert("Número secreto: o jogo.");
let NumeroMaximo=200;
let NumeroSecreto = parseInt(Math.random() * NumeroMaximo+1);

let chute = prompt('Escolha um número entre 1 e 200');

let tentativas = 1;

while (parseInt(chute) !== NumeroSecreto) {
    chute = prompt(`Escolha um número entre 1 e ${NumeroMaximo}`);

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