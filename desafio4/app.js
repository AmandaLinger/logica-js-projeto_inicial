let saldoInicial = prompt('Saldo inicial do dia')
let saldoInicialInt = Number(saldoInicial) //convertendo uma sting para numero


let vendasDia = prompt('Qual a quantidade de vendas realizadas ?')
let vendasDiaInt = Number(vendasDia) //convertendo uma sting para numero

let valorVendas = vendasDiaInt*10

let SaldoFinal = saldoInicialInt + valorVendas;
alert(`Bom dia, o saldo inicial do dia é ${saldoInicial}, foram feitas ${vendasDia} no valor de 10 reais. O caixa final é de ${SaldoFinal}`)