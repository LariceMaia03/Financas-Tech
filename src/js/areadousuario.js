;(function() {
  const userMenu = document.getElementById('user-menu');
  const logoutBtn = document.getElementById('logout-btn');

  // Toggle do dropdown
  userMenu.addEventListener('click', e => {
    e.stopPropagation();
    userMenu.classList.toggle('open');
  });

  // Fecha ao clicar fora
  document.addEventListener('click', () => {
    userMenu.classList.remove('open');
  });

  // Ação de Sair
  logoutBtn.addEventListener('click', e => {
    e.preventDefault();
   
    window.location.href = 'index.html';
  });

})();
