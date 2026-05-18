alert ('Boas vindas ao nosso site')

let mensagemDeErro = 'Erro! Preencha todos os campos'
alert(mensagemDeErro);


let nome1 = prompt("Digite seu nome")
let idade1 = prompt('Digite sua idade')


if(idade1 >= 18){
    console.log('Já pode tirar carteira')
} else {
    console.log('Você ainda é menor de idade')
}
