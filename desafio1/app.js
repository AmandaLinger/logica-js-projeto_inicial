let diaSemana = prompt('Digite o dia da semana')

if (diaSemana) {
    diaSemana = diaSemana.toLowerCase().trim().normalize('NFD').replace(/[\u0300-\u036f]/g, '')
} else {
    diaSemana = ''
}

let sabado = 'sabado'
let domingo = 'domingo'

if (diaSemana === sabado || diaSemana === domingo) {
    alert('Bom fim de semana')
} else if (diaSemana) {
    alert('Boa semana')
} else {
    alert('Nenhum dia informado')
}
let diaSemana = prompt('Digite o dia da semana')

if (diaSemana == 'sabado' || diaSemana == 'domingo'){
    alert('Bom fim de semana')
} else {
    alert('Boa semana')
}