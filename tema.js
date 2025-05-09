// Aplica o modo dark se estava ativado antes
if (localStorage.getItem('modoDark') === 'true') {
    document.body.classList.add('dark');
  }
  
  // Controle do botão de alternância
  const botaoTema = document.querySelector('.theme-toggle');
  if (botaoTema) {
    botaoTema.addEventListener('click', () => {
      document.body.classList.toggle('dark');
      // Salva o estado no localStorage
      const modoDarkAtivado = document.body.classList.contains('dark');
      localStorage.setItem('modoDark', modoDarkAtivado);
    });
  }
  