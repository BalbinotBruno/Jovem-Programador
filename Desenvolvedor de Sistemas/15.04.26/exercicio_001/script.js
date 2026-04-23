function fazerLogin(event) {
    event.preventDefault();

    const email = document.getElementById('email').value.trim().replace(/\s/g, '');
    const senha = document.getElementById('senha').value.trim();

    const mensagem = document.getElementById('mensagem');

    const emailCorreto = 'naracybalbinot@gmail.com';
    const senhaCorreta = '12345';

    document.querySelector('form').reset();

    if (!email || !senha) {
        mensagem.textContent = "Preencha todos os campos!";
        return;
    }

    if (email === emailCorreto && senha === senhaCorreta) {
        mensagem.textContent = 'Você logou com sucesso!';
    } else {
        mensagem.textContent = 'Login ou senha incorretos!';
    }

    
}