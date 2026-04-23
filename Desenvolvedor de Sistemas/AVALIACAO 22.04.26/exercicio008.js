let senhaCorreta = Number('1234')

function validaSenha() {

    if (senhaCorreta === "senha") {
        console.log('Cofre Aberto')
    } else if (senhaCorreta == "") {
        console.log('Digite um Senha por Favor!!')
    } else {
        console.log('Senha Incorreta! Tente Novamente!')
    }
}