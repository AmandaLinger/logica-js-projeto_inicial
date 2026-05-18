alert('Boas vindas ao jogo do número')
let numeroMax = 5000;
let numeroSecreto = parseInt(Math.random()* numeroMax +1);

console.log(numeroSecreto)

let chute
let tentativas = 1


//enquanto o chute não for igual ao numero secreto
while (chute != numeroSecreto){
    chute = prompt(`Escolha um número de 1 a ${numeroMax}`);

    if (chute == numeroSecreto){
        break;
    } else {
        if(chute> numeroSecreto){
            alert(`O numero secreto é menor que ${chute}`)
        }else{
            alert(`O numero secreto é maior que ${chute}`)
        }

        tentativas++
    }
}

//usando operadores ternarios
let palavraTentativa = tentativas > 1? 'tentativas':'tentativa';




if (tentativas > 1){
    alert(`isso ai! Você descobriu o numero secreto ${numeroSecreto} com ${tentativas} tentativas`)
} else{
    alert(`isso ai! Você descobriu o numero secreto ${numeroSecreto} com ${tentativas} tentativa`)
}
