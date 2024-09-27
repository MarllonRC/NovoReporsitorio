// Adiciona um evento ao formulário de contato
document.getElementById('contact-form').addEventListener('submit', function (e) {
    e.preventDefault(); // Previne o envio do formulário padrão

    const email = this.querySelector('input[type="email"]').value; // Obtém o valor do campo de email
    const message = document.getElementById('form-message'); // Captura a mensagem de retorno

    // Função para validar o formato do email
    const validateEmail = (email) => {
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Regex para verificar o formato do email
        return regex.test(email); // Retorna true se o formato estiver correto
    };

    if (!validateEmail(email)) {
        message.textContent = 'Por favor, insira um email válido.'; // Mensagem de erro
        message.style.color = 'red'; // Cor vermelha para erro
        return; // Para o envio se o email não for válido
    }

    // Exibe uma mensagem de sucesso
    message.textContent = 'Mensagem enviada com sucesso!';
    message.style.color = 'green'; // Define a cor da mensagem como verde

    // Limpa os campos do formulário
    this.reset();
});

// Função para verificar se os elementos estão visíveis
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible'); // Adiciona a classe
        }
    });
});

// Seleciona todos os artigos
const projects = document.querySelectorAll('article');
projects.forEach(project => {
    observer.observe(project); // Observa cada projeto
});
