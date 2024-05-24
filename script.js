document.addEventListener('DOMContentLoaded', () => {
    const tamanhoCaracteresInput = document.getElementById('tamanho_caracteres');
    const generateButton = document.getElementById('generate');
    const senhaGerada = document.getElementById('senha_gerada');

    generateButton.addEventListener('click', () => {
        const tamanho = parseInt(tamanhoCaracteresInput.value);
        if (isNaN(tamanho) || tamanho <= 0) {
            alert('Por favor, insira um número válido de caracteres.');
            return;
        }

        const senha = gerarSenha(tamanho);
        document.getElementById('senha_gerada').innerHTML= senha;
        novoTamanho(senha)
    });

    function gerarSenha(tamanho) {
        const caracteres = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        let senha = '';
        for (let i = 0; i < tamanho; i++) {
            senha += caracteres.charAt(Math.floor(Math.random() * caracteres.length));
        }
        return senha;
    }

    function novoTamanho() {
        senhaGerada.style.height = 'auto';
        senhaGerada.style.height = (senhaGerada.scrollHeight) + 'px';
    }
});
