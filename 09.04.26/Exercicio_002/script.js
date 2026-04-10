function fazerLogin(event) {
    event.preventDefault();

    const email = document.getElementById('email').value;
    const senha = document.getElementById('senha').value;


    const emailCorreto = "naracybalbinot@gmail.com";
    const senhaCorreta = "2222";

   
    const menssagem = document.getElementById('menssagem');

    if(email === emailCorreto && senha === senhaCorreta){
        menssagem.textContent = 'Você logou com sucesso'
    } else {
        menssagem.textContent = 'Login ou senha incorreto!'
    }
} 