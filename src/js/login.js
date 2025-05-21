// Alterna entre light e dark mode
const toggle = document.getElementById('theme-toggle');
toggle.addEventListener('click', () => {
  const body = document.body;
  if (body.dataset.theme === 'light') {
    body.dataset.theme = 'dark';
    toggle.textContent = '☀️';
  } else {
    body.dataset.theme = 'light';
    toggle.textContent = '🌙';
  }
});

// Validação simples de login
const form = document.getElementById('login-form');
const errorMsg = document.getElementById('error-message');

form.addEventListener('submit', e => {
  e.preventDefault();
  const user = document.getElementById('username').value.trim();
  const pass = document.getElementById('password').value.trim();

  // Exemplo: usuário e senha "admin"
  if (user === 'admin' && pass === 'admin') {
    errorMsg.style.display = 'none';
    alert('Login bem-sucedido!');
    // aqui você pode redirecionar: window.location.href = 'dashboard.html';
  } else {
    errorMsg.style.display = 'block';
  }
});
