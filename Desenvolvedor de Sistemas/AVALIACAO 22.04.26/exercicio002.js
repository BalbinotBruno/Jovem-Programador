
function confirmar() {

    let valorGasto = document.getElementById('valorGasto').value
    
    if (valorGasto > 100) {
        console.log(`Você gastou ${valorComprado}! Você recebe um DESCONTO`)

    } else {
        console.log(`Você não recebe nenhum Desconto, seu valor foi abaixo de 100 Moedas1`)
    }
} 
