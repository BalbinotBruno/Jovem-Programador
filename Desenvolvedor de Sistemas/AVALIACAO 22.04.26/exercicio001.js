function confirmar(){
    let idade =  document.getElementById('idade').value

    if(idade >= 18){
       console.log(`Você tem ${idade} anos! Pode Entrar.`) 
        
    } else {
        console.log(`VocÊ tem ${idade} anos! Não pode entrar! Menor de Idade!`)
    }
}