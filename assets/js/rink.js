// Ryker Crosby Carson #23 - Interactive SVG Offensive Zone Rink
class HockeyRinkChart {
  constructor(containerId, options = {}) {
    this.container = document.getElementById(containerId);
    this.shots = options.shots || [];
    this.onAddShot = options.onAddShot || null;
    this.filter = 'all';
    this.init();
  }

  init() {
    if (!this.container) return;
    this.render();
  }

  setShots(shots) {
    this.shots = shots;
    this.render();
  }

  setFilter(filter) {
    this.filter = filter;
    this.render();
  }

  render() {
    const visibleShots = this.shots.filter(s => {
      if (this.filter === 'goals') return s.isGoal;
      if (this.filter === 'saves') return !s.isGoal;
      return true;
    });

    const goalsCount = this.shots.filter(s => s.isGoal).length;
    const savesCount = this.shots.filter(s => !s.isGoal).length;
    const totalShots = this.shots.length;
    const shootingPct = totalShots ? Math.round((goalsCount / totalShots) * 100) : 0;

    let shotCircles = '';
    visibleShots.forEach((shot, index) => {
      const isGoal = shot.isGoal;
      const fill = isGoal ? '#F59E0B' : '#38BDF8';
      const stroke = isGoal ? '#FDE047' : '#FFFFFF';
      const radius = isGoal ? 8 : 6;
      const pulse = isGoal ? `<circle cx="${shot.x}" cy="${shot.y}" r="12" fill="none" stroke="#F59E0B" stroke-width="1.5" opacity="0.6"><animate attributeName="r" values="8;16;8" dur="2s" repeatCount="indefinite"/></circle>` : '';
      
      shotCircles += `
        <g class="shot-marker cursor-pointer group" data-index="${index}">
          ${pulse}
          <circle cx="${shot.x}" cy="${shot.y}" r="${radius}" fill="${fill}" stroke="${stroke}" stroke-width="2" class="transition hover:scale-125">
            <title>${isGoal ? '★ GOAL!' : 'Shot on Goal'} (${shot.type || 'Wrist Shot'}) - Period ${shot.period} vs ${shot.opponent || 'Opponent'}</title>
          </circle>
          ${isGoal ? `<text x="${shot.x}" y="${shot.y + 3.5}" text-anchor="middle" fill="#090D16" font-size="8" font-weight="900">★</text>` : ''}
        </g>
      `;
    });

    this.container.innerHTML = `
      <div class="w-full flex flex-col items-center">
        <!-- Rink Filter Bar -->
        <div class="flex flex-wrap items-center justify-between w-full max-w-4xl px-2 mb-3 text-xs">
          <div class="flex items-center gap-2">
            <span class="text-slate-400 font-bold uppercase text-[10px] tracking-wider">Filter:</span>
            <div class="inline-flex rounded-lg bg-slate-900 p-0.5 border border-slate-800">
              <button class="filter-btn px-2.5 py-1 rounded-md text-xs font-semibold ${this.filter === 'all' ? 'bg-amber-500 text-slate-950' : 'text-slate-400 hover:text-white'}" data-filter="all">All Shots (${totalShots})</button>
              <button class="filter-btn px-2.5 py-1 rounded-md text-xs font-semibold ${this.filter === 'goals' ? 'bg-amber-500 text-slate-950' : 'text-slate-400 hover:text-white'}" data-filter="goals">Goals (${goalsCount})</button>
              <button class="filter-btn px-2.5 py-1 rounded-md text-xs font-semibold ${this.filter === 'saves' ? 'bg-amber-500 text-slate-950' : 'text-slate-400 hover:text-white'}" data-filter="saves">Saves (${savesCount})</button>
            </div>
          </div>
          
          <div class="flex items-center gap-3 text-slate-300 text-xs mt-2 sm:mt-0 font-tech">
            <span class="flex items-center gap-1.5"><span class="w-3 h-3 rounded-full bg-amber-400 border border-amber-200"></span> Goal (${shootingPct}%)</span>
            <span class="flex items-center gap-1.5"><span class="w-3 h-3 rounded-full bg-sky-400 border border-white"></span> Saved</span>
            <span class="text-slate-500 hidden sm:inline">| Click ice to plot shot</span>
          </div>
        </div>

        <!-- SVG Offensive Zone Rink -->
        <div class="relative w-full max-w-4xl rounded-2xl overflow-hidden border border-slate-800 shadow-2xl bg-gradient-to-b from-slate-950 via-[#0a101f] to-slate-950">
          <svg id="hockeyRinkSvg" viewBox="0 0 600 320" class="w-full h-auto cursor-crosshair select-none">
            <defs>
              <pattern id="iceGrid" width="40" height="40" patternUnits="userSpaceOnUse">
                <path d="M 40 0 L 0 0 0 40" fill="none" stroke="rgba(56, 189, 248, 0.03)" stroke-width="1"/>
              </pattern>
              <linearGradient id="slotGlow" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stop-color="rgba(245, 158, 11, 0.15)"/>
                <stop offset="100%" stop-color="rgba(245, 158, 11, 0.02)"/>
              </linearGradient>
            </defs>

            <!-- Ice Surface -->
            <rect width="600" height="320" fill="#0B132B"/>
            <rect width="600" height="320" fill="url(#iceGrid)"/>

            <!-- Boards (Curved right end) -->
            <path d="M 20,20 L 520,20 Q 580,20 580,80 L 580,240 Q 580,300 520,300 L 20,300" fill="none" stroke="#334155" stroke-width="6"/>

            <!-- Center Red Line (Left) -->
            <line x1="20" y1="20" x2="20" y2="300" stroke="#EF4444" stroke-width="5" stroke-dasharray="12 6"/>

            <!-- Blue Line -->
            <line x1="180" y1="20" x2="180" y2="300" stroke="#0284C7" stroke-width="8"/>

            <!-- Goal Line -->
            <line x1="510" y1="20" x2="510" y2="300" stroke="#DC2626" stroke-width="3"/>

            <!-- Goal Crease -->
            <path d="M 510,140 L 490,140 A 20 20 0 0 0 490,180 L 510,180 Z" fill="rgba(56, 189, 248, 0.3)" stroke="#DC2626" stroke-width="2"/>
            <rect x="510" y="145" width="18" height="30" fill="#1E293B" stroke="#DC2626" stroke-width="2"/>

            <!-- High-Danger Scoring Slot Zone (Highlighted in Gold) -->
            <polygon points="510,120 420,120 380,160 420,200 510,200" fill="url(#slotGlow)" stroke="rgba(245, 158, 11, 0.4)" stroke-width="1.5" stroke-dasharray="4 4"/>
            <text x="445" y="164" fill="rgba(245, 158, 11, 0.6)" font-size="10" font-family="'Chakra Petch', monospace" font-weight="700" text-anchor="middle">HIGH DANGER SLOT</text>

            <!-- Faceoff Circles (Offensive Zone) -->
            <!-- Top Circle -->
            <circle cx="430" cy="85" r="45" fill="none" stroke="#DC2626" stroke-width="2"/>
            <circle cx="430" cy="85" r="4" fill="#DC2626"/>
            <line x1="422" y1="85" x2="438" y2="85" stroke="#FFFFFF" stroke-width="1.5"/>
            <line x1="430" y1="77" x2="430" y2="93" stroke="#FFFFFF" stroke-width="1.5"/>

            <!-- Bottom Circle -->
            <circle cx="430" cy="235" r="45" fill="none" stroke="#DC2626" stroke-width="2"/>
            <circle cx="430" cy="235" r="4" fill="#DC2626"/>
            <line x1="422" y1="235" x2="438" y2="235" stroke="#FFFFFF" stroke-width="1.5"/>
            <line x1="430" y1="227" x2="430" y2="243" stroke="#FFFFFF" stroke-width="1.5"/>

            <!-- Center Neutral Faceoff Dot -->
            <circle cx="100" cy="85" r="4" fill="#DC2626"/>
            <circle cx="100" cy="235" r="4" fill="#DC2626"/>

            <!-- BWC Ice Logo Watermark -->
            <g opacity="0.15" transform="translate(230, 95) scale(0.65)">
              <circle cx="100" cy="100" r="80" fill="none" stroke="#F59E0B" stroke-width="4"/>
              <text x="100" y="95" text-anchor="middle" fill="#FFFFFF" font-size="28" font-weight="900" font-family="Arial Black">BWC</text>
              <text x="100" y="125" text-anchor="middle" fill="#F59E0B" font-size="20" font-weight="900" font-family="Arial Black">#23</text>
            </g>

            <!-- Rendered Shot Pins -->
            <g id="shotMarkersLayer">
              ${shotCircles}
            </g>
          </svg>
        </div>
      </div>
    `;

    // Bind event listeners
    const svg = document.getElementById('hockeyRinkSvg');
    if (svg && this.onAddShot) {
      svg.addEventListener('click', (e) => {
        // Prevent trigger if clicking on an existing shot marker
        if (e.target.closest('.shot-marker')) return;
        const rect = svg.getBoundingClientRect();
        const scaleX = 600 / rect.width;
        const scaleY = 320 / rect.height;
        const x = Math.round((e.clientX - rect.left) * scaleX);
        const y = Math.round((e.clientY - rect.top) * scaleY);
        this.onAddShot({ x, y });
      });
    }

    // Filter Buttons
    const buttons = this.container.querySelectorAll('.filter-btn');
    buttons.forEach(btn => {
      btn.addEventListener('click', (e) => {
        const f = e.currentTarget.getAttribute('data-filter');
        this.setFilter(f);
      });
    });
  }
}
