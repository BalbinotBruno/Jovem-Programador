function confirmar() {
    let idade = document.getElementById('idade').value
    let arma 

    if (idade >= 16 && arma == true) {
        console.log('Você Pode participar do Torneio!')

    } else {
        console.log('Você Não Pode Participar do Torneio!')
    }
}