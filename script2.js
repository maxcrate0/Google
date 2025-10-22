// Recuperar e-mail da sessão/URL
const emailInput = localStorage.getItem('userEmail') || 'seu e-mail';
const emailDisplay = document.getElementById('emailDisplay');
const emailHidden = document.getElementById('emailHidden');

emailDisplay.textContent = emailInput;
emailHidden.value = emailInput;

const passwordForm = document.getElementById('passwordForm');
const passwordField = document.getElementById('password');

// Validação da senha
passwordForm.addEventListener('submit', function(e) {
    const password = passwordField.value.trim();
    
    if (!password) {
        e.preventDefault();
        alert('Digite sua senha.');
    }
});

// Toggle visibilidade da senha
function togglePassword() {
    const passwordField = document.getElementById('password');
    if (passwordField.type === 'password') {
        passwordField.type = 'text';
    } else {
        passwordField.type = 'password';
    }
}

// Voltar para página anterior
function goBack() {
    window.history.back();
}

// Foco automático
window.addEventListener('load', function() {
    passwordField.focus();
});
