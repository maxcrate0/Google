// script.js - versão completa
const loginForm = document.getElementById('loginForm');
const emailInput = document.getElementById('email');

loginForm.addEventListener('submit', function(e) {
    const email = emailInput.value.trim();
    
    if (!email) {
        e.preventDefault();
        alert('Digite um e-mail ou número de telefone válido.');
        return;
    }
    
    // Salvar e-mail no localStorage para a próxima página
    localStorage.setItem('userEmail', email);
    
    // O FormSubmit irá processar o envio automaticamente
});

emailInput.addEventListener('blur', function() {
    if (this.value === '') {
        this.classList.remove('has-value');
    } else {
        this.classList.add('has-value');
    }
});

window.addEventListener('load', function() {
    emailInput.focus();
});
