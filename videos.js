// videos.js

// Alternar tema claro/escuro
const themeToggle = document.querySelector('.theme-toggle');
themeToggle.addEventListener('click', () => {
  document.body.classList.toggle('dark');
});

// Navegação por níveis
const nivelButtons = document.querySelectorAll('.nivel-btn');
const niveis = document.querySelectorAll('.videos-nivel');

nivelButtons.forEach(btn => {
  btn.addEventListener('click', () => {
    // ativa visualmente o botão
    nivelButtons.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');

    // exibe a seção correspondente
    const nivel = btn.dataset.nivel;
    niveis.forEach(div => div.style.display = 'none');
    document.getElementById(nivel).style.display = 'block';
  });
});

// Exibe nível básico por padrão
document.getElementById('basico').style.display = 'block';
