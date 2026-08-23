// Ryker Crosby Carson #23 - Chart.js Charts Initialization Module
let scoringChartInstance = null;
let pushupChartInstance = null;
let radarChartInstance = null;

// 1. Scoring Trajectory Chart
window.initScoringChart = function(games) {
  const ctx = document.getElementById('scoringChart');
  if (!ctx) return;

  const reversed = [...games].reverse();
  const labels = reversed.map((g, i) => `G${i + 1}`);
  let cumulative = 0;
  const rykerPace = reversed.map(g => {
    cumulative += (Number(g.goals) || 0) + (Number(g.assists) || 0);
    return cumulative;
  });

  // Elite Tier 1 Draft Baseline (1.2 PPG pace)
  const draftBaseline = reversed.map((g, i) => Math.round((i + 1) * 1.2));

  if (scoringChartInstance) {
    scoringChartInstance.destroy();
  }

  scoringChartInstance = new Chart(ctx, {
    type: 'line',
    data: {
      labels: labels,
      datasets: [
        {
          label: 'Ryker Carson #23 Cumulative Points',
          data: rykerPace,
          borderColor: '#F59E0B',
          backgroundColor: 'rgba(245, 158, 11, 0.15)',
          fill: true,
          tension: 0.3,
          borderWidth: 3,
          pointBackgroundColor: '#FDE047',
          pointRadius: 4,
          pointHoverRadius: 7
        },
        {
          label: 'NHL Tier-1 Draft Hopeful Avg (1.2 PPG)',
          data: draftBaseline,
          borderColor: '#64748B',
          borderDash: [5, 5],
          tension: 0.1,
          borderWidth: 2,
          pointRadius: 0
        }
      ]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: {
          labels: {
            color: '#CBD5E1',
            font: { family: "'Outfit', sans-serif", size: 11 }
          }
        },
        tooltip: {
          backgroundColor: '#0F172A',
          titleColor: '#F59E0B',
          bodyColor: '#F8FAFC',
          borderColor: 'rgba(245, 158, 11, 0.4)',
          borderWidth: 1
        }
      },
      scales: {
        x: {
          grid: { color: 'rgba(255, 255, 255, 0.05)' },
          ticks: { color: '#94A3B8' }
        },
        y: {
          grid: { color: 'rgba(255, 255, 255, 0.05)' },
          ticks: { color: '#94A3B8' },
          title: { display: true, text: 'Total Points', color: '#94A3B8' }
        }
      }
    }
  });
};

// 2. Pushup Duel 14-Day History Chart
window.initPushupDuelChart = function(history) {
  const ctx = document.getElementById('pushupDuelChart');
  if (!ctx) return;

  const labels = history.map(h => h.date);
  const rykerData = history.map(h => h.ryker);
  const dadData = history.map(h => h.dad);

  if (pushupChartInstance) {
    pushupChartInstance.destroy();
  }

  pushupChartInstance = new Chart(ctx, {
    type: 'bar',
    data: {
      labels: labels,
      datasets: [
        {
          label: 'Ryker #23 (Reps)',
          data: rykerData,
          backgroundColor: '#F59E0B',
          borderRadius: 6,
          borderSkipped: false
        },
        {
          label: 'Dad (Reps)',
          data: dadData,
          backgroundColor: '#0EA5E9',
          borderRadius: 6,
          borderSkipped: false
        }
      ]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: {
          labels: {
            color: '#CBD5E1',
            font: { family: "'Outfit', sans-serif", size: 11 }
          }
        },
        tooltip: {
          backgroundColor: '#0F172A',
          borderColor: 'rgba(245, 158, 11, 0.4)',
          borderWidth: 1
        }
      },
      scales: {
        x: {
          grid: { display: false },
          ticks: { color: '#94A3B8' }
        },
        y: {
          grid: { color: 'rgba(255, 255, 255, 0.05)' },
          ticks: { color: '#94A3B8' },
          title: { display: true, text: 'Pushups Completed', color: '#94A3B8' }
        }
      }
    }
  });
};

// 3. 7-Attribute Scouting Radar Chart
window.initScoutingRadar = function(radarData) {
  const ctx = document.getElementById('scoutingRadarChart');
  if (!ctx) return;

  const labels = Object.keys(radarData);
  const values = Object.values(radarData);

  if (radarChartInstance) {
    radarChartInstance.destroy();
  }

  radarChartInstance = new Chart(ctx, {
    type: 'radar',
    data: {
      labels: labels,
      datasets: [
        {
          label: 'Ryker Crosby Carson (BWC #23)',
          data: values,
          backgroundColor: 'rgba(245, 158, 11, 0.25)',
          borderColor: '#F59E0B',
          pointBackgroundColor: '#FDE047',
          pointBorderColor: '#090D16',
          pointHoverBackgroundColor: '#FFFFFF',
          pointRadius: 4,
          borderWidth: 2
        },
        {
          label: 'NHL Combine Benchmark',
          data: [82, 80, 84, 80, 78, 80, 85],
          backgroundColor: 'rgba(56, 189, 248, 0.1)',
          borderColor: 'rgba(56, 189, 248, 0.5)',
          borderDash: [4, 4],
          pointRadius: 2,
          borderWidth: 1.5
        }
      ]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: {
          position: 'bottom',
          labels: {
            color: '#CBD5E1',
            font: { family: "'Outfit', sans-serif", size: 10 }
          }
        }
      },
      scales: {
        r: {
          angleLines: { color: 'rgba(255, 255, 255, 0.1)' },
          grid: { color: 'rgba(255, 255, 255, 0.08)' },
          pointLabels: {
            color: '#E2E8F0',
            font: { family: "'Chakra Petch', monospace", size: 10, weight: 'bold' }
          },
          ticks: {
            backdropColor: 'transparent',
            color: '#64748B',
            stepSize: 20
          },
          suggestedMin: 50,
          suggestedMax: 100
        }
      }
    }
  });
};
