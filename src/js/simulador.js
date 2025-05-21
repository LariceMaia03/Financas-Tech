let chart;

// Simulação de investimento
function simularInvestimento() {
  const valorInicial = parseFloat(document.getElementById('valorInicial').value) || 0;
  const aporteMensal = document.getElementById('semAporte').checked ? 0 : (parseFloat(document.getElementById('aporteMensal').value) || 0);
  const prazo = parseInt(document.getElementById('prazo').value) || 0;
  const taxa = (parseFloat(document.getElementById('taxa').value) || 0) / 100;
  const inflacao = (parseFloat(document.getElementById('inflacao').value) || 0) / 100;
  const imposto = parseFloat(document.getElementById('ir').value) || 0;

  let saldo = valorInicial;
  const saldoEvolucao = [];

  for (let i = 1; i <= prazo; i++) {
    saldo += aporteMensal;
    saldo += saldo * taxa / 12;
    saldoEvolucao.push(saldo.toFixed(2));
  }

  const saldoLiquido = saldo - (saldo * (imposto / 100));

  document.getElementById('resultado').innerHTML = `
    <h3>Resultado da Simulação</h3>
    <p>Após ${prazo} meses, você teria: <strong>R$ ${saldo.toFixed(2)}</strong></p>
    <p>Saldo líquido após IR: <strong>R$ ${saldoLiquido.toFixed(2)}</strong></p>
  `;

  desenharGrafico(saldoEvolucao);
}

// Desenha o gráfico com adaptação para tema
function desenharGrafico(data) {
  const ctx = document.getElementById('graficoSaldo').getContext('2d');
  if (chart) chart.destroy();

  const isDark = document.body.classList.contains('dark');
  const textColor = isDark ? '#f0f0f0' : '#333';
  const gridColor = isDark ? '#444' : '#ddd';

  chart = new Chart(ctx, {
    type: 'line',
    data: {
      labels: data.map((_, i) => (i + 1) + "m"),
      datasets: [{
        label: 'Saldo Evolução',
        data,
        fill: false,
        borderColor: getComputedStyle(document.documentElement).getPropertyValue('--primary').trim(),
        tension: 0.25
      }]
    },
    options: {
      responsive: true,
      plugins: {
        legend: {
          labels: {
            color: textColor
          }
        }
      },
      scales: {
        x: {
          ticks: { color: textColor },
          grid: { color: gridColor },
          title: {
            display: true,
            text: 'Meses',
            color: textColor
          }
        },
        y: {
          ticks: { color: textColor },
          grid: { color: gridColor },
          title: {
            display: true,
            text: 'R$',
            color: textColor
          }
        }
      }
    }
  });
}

// Atualiza gráfico ao alternar o tema
document.querySelector('.theme-toggle').addEventListener('click', () => {
  document.body.classList.toggle('dark');
  if (chart) {
    const isDark = document.body.classList.contains('dark');
    const textColor = isDark ? '#f0f0f0' : '#333';
    const gridColor = isDark ? '#444' : '#ddd';

    chart.options.plugins.legend.labels.color = textColor;
    chart.options.scales.x.ticks.color = textColor;
    chart.options.scales.x.grid.color = gridColor;
    chart.options.scales.x.title.color = textColor;
    chart.options.scales.y.ticks.color = textColor;
    chart.options.scales.y.grid.color = gridColor;
    chart.options.scales.y.title.color = textColor;
    chart.update();
  }
});
