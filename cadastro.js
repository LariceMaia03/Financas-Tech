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

// validação do formulário de cadastro
const form = document.getElementById('cadastro-form');
const errorMsg = document.getElementById('error-message');

form.addEventListener('submit', e => {
  e.preventDefault();

  const nome         = document.getElementById('nome').value.trim();
  const email        = document.getElementById('email').value.trim();
  const user         = document.getElementById('username').value.trim();
  const pass         = document.getElementById('password').value.trim();
  const confirmPass  = document.getElementById('confirm-password').value.trim();

  if (!nome || !email || !user || !pass || !confirmPass) {
    errorMsg.textContent = 'Por favor, preencha todos os campos!';
    errorMsg.style.display = 'block';
    return;
  }

  if (pass !== confirmPass) {
    errorMsg.textContent = 'As senhas não coincidem!';
    errorMsg.style.display = 'block';
    return;
  }

  // simula cadastro bem-sucedido
  errorMsg.style.display = 'none';
  alert('Cadastro realizado com sucesso!');
  window.location.href = 'index.html';
});
