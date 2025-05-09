// Simulador de Dividendos
function simularDividendos() {
  const valorInvestido = parseFloat(document.getElementById("valorInvestido").value);
  const ativo = document.getElementById("ativo").value;
  let rendimentoMensal = 0;

  switch(ativo) {
    case "itsa4":
      rendimentoMensal = 0.40; // Exemplo de valor mensal por ação
      break;
    case "knri11":
      rendimentoMensal = 1.10;
      break;
    case "taee11":
      rendimentoMensal = 0.80;
      break;
  }

  const dividendos = valorInvestido * (rendimentoMensal / 100);
  const resultado = `
    <h4>Simulação de Dividendos:</h4>
    <p><strong>Ativo Selecionado:</strong> ${ativo.toUpperCase()}</p>
    <p><strong>Rendimento Mensal:</strong> R$ ${dividendos.toFixed(2)}</p>
    <p><strong>Rendimento Anualizado:</strong> R$ ${(dividendos * 12).toFixed(2)}</p>
  `;

  document.getElementById("resultadoSimulacao").innerHTML = resultado;
  
  // Gerar gráfico
  gerarGraficoDividendos(valorInvestido, rendimentoMensal);
}

// Gráfico de Distribuição de Dividendos
function gerarGraficoDividendos(valor, rendimentoMensal) {
  const ctx = document.getElementById('graficoDividendos').getContext('2d');
  const meses = Array.from({ length: 12 }, (_, i) => `Mês ${i + 1}`);
  const rendimentos = meses.map(() => valor * (rendimentoMensal / 100));

  new Chart(ctx, {
    type: 'bar',
    data: {
      labels: meses,
      datasets: [{
        label: 'Dividendos Mensais',
        data: rendimentos,
        backgroundColor: '#4caf50',
      }]
    },
    options: {
      responsive: true,
      scales: {
        y: { beginAtZero: true }
      }
    }
  });
}
