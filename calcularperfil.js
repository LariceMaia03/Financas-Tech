const quizForm = document.getElementById('quizForm');
const resultado = document.getElementById('resultado');
const progressBar = document.getElementById('progress-bar');
const graficoPerfil = document.getElementById('graficoPerfil');
let chart;

quizForm.addEventListener('change', () => {
  const total = document.querySelectorAll('.steps input[type="radio"]:checked').length;
  const totalPerguntas = document.querySelectorAll('.steps .step').length;
  const progresso = Math.round((total / totalPerguntas) * 100);
  progressBar.style.width = progresso + '%';
});

quizForm.addEventListener('submit', (e) => {
  e.preventDefault();

  const respostas = new FormData(quizForm);
  let pontos = { C: 0, M: 0, A: 0 };

  for (let [_, valor] of respostas.entries()) {
    pontos[valor]++;
  }

  let perfil, mensagem;

  if (pontos.C >= pontos.M && pontos.C >= pontos.A) {
    perfil = "Conservador";
    mensagem = "Perfil Conservador: priorize segurança e previsibilidade. Invista em Tesouro Selic, CDBs garantidos e fundos de renda fixa.";
  } else if (pontos.M >= pontos.C && pontos.M >= pontos.A) {
    perfil = "Moderado";
    mensagem = "Perfil Moderado: busque equilíbrio entre segurança e crescimento. Renda fixa, multimercados e algumas ações.";
  } else {
    perfil = "Arrojado";
    mensagem = "Perfil Arrojado: priorize rentabilidade mesmo com riscos. Ações, criptomoedas, FIIs e fundos agressivos.";
  }

  resultado.style.display = 'block';
  resultado.style.opacity = '0';
  setTimeout(() => {
    resultado.style.opacity = '1';
  }, 50);
  resultado.innerHTML = `<h3>Seu perfil de investidor é: ${perfil}</h3><p>${mensagem}</p>`;
  progressBar.style.width = '100%';

  graficoPerfil.style.display = 'block';
  if (chart) chart.destroy();
  chart = new Chart(graficoPerfil, {
    type: 'pie',
    data: {
      labels: ['Conservador', 'Moderado', 'Arrojado'],
      datasets: [{
        data: [pontos.C, pontos.M, pontos.A],
        backgroundColor: ['#4caf50', '#ffb300', '#e53935']
      }]
    },
    options: {
      plugins: {
        legend: { position: 'bottom' }
      }
    }
  });
});
