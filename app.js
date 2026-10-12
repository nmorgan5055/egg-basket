(function () {
  'use strict';
  const KEY = 'eggbasket.v1';
  const OLD_KEY = 'kronorium.bo3.v1';
  const VER = window.EB_VER || '1';
  const EB = window.EB = window.EB || {};
  const CAT = EB.catalog || [];
  const byGame = Object.fromEntries(CAT.map(g => [g.id, g]));
  const LOADED = {};
  EB.register = function (id, data) {
    data.byId = Object.fromEntries(data.maps.map(m => [m.id, m]));
    LOADED[id] = data;
  };

  // ---------- storage ----------
  const DEFP = { pics: true, hideDone: false, theme: 'auto' };
  let S = { v: 1, games: {}, prefs: Object.assign({}, DEFP), lastBackup: null };
  let notice = '';
  const blankGame = () => ({ checks: {}, settings: {}, runs: {}, notes: {} });
  const pickGame = d => ({ checks: d.checks || {}, settings: d.settings || {}, runs: d.runs || {}, notes: d.notes || {} });
  function load() {
    try {
      const raw = localStorage.getItem(KEY);
      if (raw) {
        const d = JSON.parse(raw);
        S = Object.assign(S, d);
        S.games = d.games || {};
        S.prefs = Object.assign({}, DEFP, d.prefs || {});
        return;
      }
      const old = localStorage.getItem(OLD_KEY);
      if (old) {
        const d = JSON.parse(old);
        S.games.bo3 = pickGame(d);
        S.prefs = Object.assign({}, DEFP, d.prefs || {});
        notice = 'Your Kronorium progress for Black Ops III was copied over. Kronorium still has its own copy.';
        save();
      }
    } catch (e) { /* storage unavailable */ }
  }
  function save() { try { localStorage.setItem(KEY, JSON.stringify(S)); } catch (e) {} }
  load();

  // ---------- current game context ----------
  let gid = null, GD = null, GS = null, GC = null; // id, data, state, catalog entry
  function setGame(id) { gid = id; GD = LOADED[id]; GC = byGame[id]; GS = S.games[id] || (S.games[id] = blankGame()); }
  function loadGame(id) {
    if (LOADED[id]) return Promise.resolve(LOADED[id]);
    const g = byGame[id];
    return new Promise((res, rej) => {
      const sc = document.createElement('script');
      sc.src = g.file + '?v=' + VER;
      sc.onload = () => LOADED[id] ? res(LOADED[id]) : rej(new Error('no data'));
      sc.onerror = () => rej(new Error('load failed'));
      document.head.appendChild(sc);
    });
  }

  // ---------- helpers ----------
  const $ = (s, r = document) => r.querySelector(s);
  const esc = s => String(s).replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
  function stepKey(m, t, si, i) { return m.id + '.' + t.id + '.' + si + '.' + i; }
  function mapSettings(m) { return GS.settings[m.id] || (GS.settings[m.id] = {}); }
  function visible(m, w) {
    if (!w) return true;
    const ms = mapSettings(m);
    return Object.keys(w).every(k => {
      const sel = ms[k];
      if (!sel || !sel.length) return true;
      return w[k].some(v => sel.includes(v));
    });
  }
  function norm(step) {
    if (Array.isArray(step)) return { t: step[0], i: step[1] || [], w: step[2] || null };
    return step;
  }
  function imgUrl(m, p) { return /^https?:/.test(p) ? p : (m.img || '') + p; }
  function countTab(m, t) {
    let done = 0, total = 0;
    t.sections.forEach((sec, si) => {
      if (!visible(m, sec.w)) return;
      sec.steps.forEach((st, i) => {
        const s = norm(st);
        if (!visible(m, s.w)) return;
        total++;
        if (GS.checks[stepKey(m, t, si, i)]) done++;
      });
    });
    return { done, total };
  }
  function countMap(m) {
    const main = { done: 0, total: 0 }, side = { done: 0, total: 0 };
    m.tabs.forEach(t => {
      const c = countTab(m, t);
      const tgt = t.main ? main : side;
      tgt.done += c.done; tgt.total += c.total;
    });
    return { main, side };
  }
  const runsOf = m => GS.runs[m.id] || [];
  const isDone = m => runsOf(m).length > 0;
  function fmtTime(mins) {
    if (mins == null || isNaN(mins)) return '';
    const h = Math.floor(mins / 60), mm = mins % 60;
    return h ? h + 'h ' + String(mm).padStart(2, '0') + 'm' : mm + 'm';
  }
  const plLabel = p => p == 1 ? 'Solo' : p + ' players';
  function bestRun(m) {
    const r = runsOf(m).filter(x => x.mins != null);
    if (!r.length) return runsOf(m)[0];
    return r.reduce((a, b) => (b.mins < a.mins ? b : a));
  }
  function pct(c) { return c.total ? Math.round(100 * c.done / c.total) : 0; }
  function today() { const d = new Date(); return d.getFullYear() + '-' + String(d.getMonth() + 1).padStart(2, '0') + '-' + String(d.getDate()).padStart(2, '0'); }
  function fmtDate(iso) { try { return new Date(iso).toLocaleDateString(undefined, { month: 'short', day: 'numeric', year: 'numeric' }); } catch (e) { return iso; } }

  // ---------- theme ----------
  function applyTheme() {
    const t = S.prefs.theme;
    if (t === 'auto') document.documentElement.removeAttribute('data-theme');
    else document.documentElement.setAttribute('data-theme', t);
    $('#themeBtn').textContent = ({ auto: '◐ Auto', light: '☀ Light', dark: '☾ Dark' })[t];
  }
  $('#themeBtn').addEventListener('click', () => {
    const order = ['auto', 'light', 'dark'];
    S.prefs.theme = order[(order.indexOf(S.prefs.theme) + 1) % 3];
    save(); applyTheme();
  });
  applyTheme();

  // ---------- pie ----------
  function pieSVG(done, total, label) {
    const r = 54, c = 2 * Math.PI * r, frac = total ? done / total : 0;
    const p = Math.round(frac * 100);
    return '<svg class="pie" viewBox="0 0 148 148" role="img" aria-label="' + done + ' of ' + total + ' main quests complete">' +
      '<circle cx="74" cy="74" r="' + r + '" fill="none" stroke="var(--rule)" stroke-width="22"/>' +
      (frac > 0 ? '<circle cx="74" cy="74" r="' + r + '" fill="none" stroke="var(--stamp)" stroke-width="22" stroke-dasharray="' + (c * frac).toFixed(2) + ' ' + c.toFixed(2) + '" transform="rotate(-90 74 74)"/>' : '') +
      '<text x="74" y="80" text-anchor="middle" font-size="34" font-weight="800" fill="var(--ink)">' + p + '%</text>' +
      '<text x="74" y="100" text-anchor="middle" font-size="12" font-family="IBM Plex Mono, monospace" fill="var(--muted)" letter-spacing="1">' + (label || 'MAIN QUESTS') + '</text>' +
      '</svg>';
  }

  // ---------- top bar ----------
  function topbar(backHref, backLabel, sub) {
    const b = $('#backBtn');
    if (backHref) { b.hidden = false; b.href = backHref; b.textContent = '← ' + backLabel; } else b.hidden = true;
    $('#brandSub').textContent = sub || 'CoD Zombies';
  }

  // ---------- backup ----------
  function exportObj() { return { app: 'egg-basket', v: 1, exported: new Date().toISOString(), games: S.games, prefs: S.prefs }; }
  function downloadBackup() {
    try {
      const blob = new Blob([JSON.stringify(exportObj(), null, 1)], { type: 'application/json' });
      const a = document.createElement('a');
      a.href = URL.createObjectURL(blob); a.download = 'egg-basket-backup-' + today() + '.json';
      document.body.appendChild(a); a.click(); a.remove();
      setTimeout(() => URL.revokeObjectURL(a.href), 4000);
      S.lastBackup = new Date().toISOString(); save();
      return true;
    } catch (e) { return false; }
  }
  // Parse any supported backup. Returns { kind, games, prefs, when } or throws.
  function parseBackup(text) {
    const d = JSON.parse(text);
    if (d && d.games && typeof d.games === 'object') return { kind: 'full', games: d.games, prefs: d.prefs, when: d.exported };
    if (d && d.checks) return { kind: 'kronorium', games: { bo3: pickGame(d) }, prefs: d.prefs, when: null };
    throw new Error('bad');
  }
  function summarize(games) {
    const names = Object.keys(games).filter(k => byGame[k]).map(k => {
      const g = games[k];
      const n = Object.keys(g.checks || {}).length;
      return byGame[k].short + ' (' + n + ' step' + (n === 1 ? '' : 's') + ')';
    });
    return names.length ? names.join(', ') : 'no game progress';
  }

  // ---------- HOME ----------
  function gameStats(g) {
    const st = S.games[g.id];
    const mains = g.mains || [];
    const done = st ? mains.filter(id => (st.runs && st.runs[id] || []).length).length : 0;
    const steps = st ? Object.keys(st.checks || {}).length : 0;
    return { done, total: mains.length, steps };
  }
  let pending = null; // parsed backup awaiting confirmation
  function renderHome() {
    topbar(null);
    document.title = 'Egg Basket · CoD Zombies Easter Egg Tracker';
    const ready = CAT.filter(g => g.ready);
    let mDone = 0, mTotal = 0, steps = 0;
    ready.forEach(g => { const s = gameStats(g); mDone += s.done; mTotal += s.total; steps += s.steps; });

    let h = '<section class="wrap eb-hero"><div><div class="label">Call of Duty · Zombies</div><h1>Egg<br>Basket</h1>' +
      '<p>Every Easter egg, one checklist per game. Pick the game you\'re playing, then a map. Progress saves on this device — back it up below to move it between your phone and PC.</p></div>' +
      '<div class="summary">' + pieSVG(mDone, mTotal) +
      '<div class="stats"><div class="stat"><b>' + mDone + ' / ' + mTotal + '</b><span class="label">Main quests logged</span></div>' +
      '<div class="stat"><b>' + steps + '</b><span class="label">Steps checked</span></div>' +
      '<div class="legend"><span>' + ready.length + ' of ' + CAT.length + ' games ready</span></div></div></div></section>';

    if (notice) { h += '<section class="wrap"><div class="banner">' + esc(notice) + '</div></section>'; notice = ''; }

    h += '<section class="wrap"><div class="vault"><div><h2>Your backups</h2><p>' +
      (S.lastBackup ? 'Last downloaded ' + esc(fmtDate(S.lastBackup)) + '. ' : 'You haven\'t downloaded a backup yet. ') +
      'Download a file here, then upload it on your other device. Kronorium backups work too.</p></div>' +
      '<div class="acts"><button type="button" class="btn" id="dlBackup">Download backup</button>' +
      '<label class="btn ghost filebtn">Upload backup<input type="file" id="upBackup" accept=".json,application/json,text/plain"></label></div>' +
      '<div id="confirmBox" class="confirm" hidden></div>' +
      '<p class="msg" id="vaultMsg" role="status"></p>' +
      '<details><summary>Copy or paste instead</summary><div class="paste">' +
      '<textarea id="pasteBox" placeholder="Paste a backup here, or press Copy to grab yours"></textarea>' +
      '<div class="btns" style="justify-content:flex-start"><button type="button" class="iconbtn" id="copyBackup">Copy my progress</button><button type="button" class="iconbtn" id="usePaste">Restore from pasted text</button></div>' +
      '</div></details></div></section>';

    h += '<section class="wrap group"><div class="group-head"><h2>Pick your game</h2><span class="label">Oldest to newest</span></div><div class="shelf">';
    CAT.forEach(g => {
      if (g.ready) {
        const s = gameStats(g);
        h += '<article class="game ready"><div class="yr">' + g.year + ' · ' + esc(g.short) + '</div>' +
          '<a class="gt" href="#/' + g.id + '">' + esc(g.title) + '</a>' + (g.sub ? '<div class="gsub">' + esc(g.sub) + '</div>' : '') +
          '<div class="maplist">' + esc(g.mapNames.join(' · ')) + '</div>' +
          '<div class="gfoot"><div class="gstat"><span>Main quests</span><b>' + s.done + ' / ' + s.total + '</b></div>' +
          '<div class="track"><div class="fill" style="width:' + (s.total ? Math.round(100 * s.done / s.total) : 0) + '%;background:var(--stamp)"></div></div>' +
          '<div class="gstat"><span>' + g.mapCount + ' maps</span><span>' + s.steps + ' steps checked</span></div></div></article>';
      } else {
        h += '<article class="game soon"><div class="yr">' + g.year + ' · ' + esc(g.short) + '</div>' +
          '<div class="gt">' + esc(g.title) + '</div>' + (g.sub ? '<div class="gsub">' + esc(g.sub) + '</div>' : '') +
          '<div class="maplist">' + esc(g.maps.join(' · ')) + '</div>' +
          '<div class="gfoot"><span class="soonchip">Coming soon</span></div></article>';
      }
    });
    h += '</div></section><section class="wrap tools"><span>Kronorium (the original BO3 tracker) stays online at its own address.</span></section>';
    $('#app').innerHTML = h;

    const msg = t => { $('#vaultMsg').textContent = t; };
    $('#dlBackup').addEventListener('click', () => {
      if (downloadBackup()) { msg('Backup downloaded. Upload that file on your other device.'); renderHomeKeep(); }
      else msg('Downloads are blocked here. Use “Copy or paste instead”.');
    });
    $('#upBackup').addEventListener('change', e => {
      const f = e.target.files[0]; if (!f) return;
      const r = new FileReader();
      r.onload = () => askRestore(r.result, f.name);
      r.readAsText(f);
      e.target.value = '';
    });
    $('#copyBackup').addEventListener('click', () => {
      const t = $('#pasteBox'); t.value = JSON.stringify(exportObj());
      const ok = () => msg('Copied. Paste it on your other device under “Copy or paste instead”.');
      if (navigator.clipboard) navigator.clipboard.writeText(t.value).then(ok, () => { t.select(); msg('Text selected — copy it with your keyboard.'); });
      else { t.select(); msg('Text selected — copy it with your keyboard.'); }
    });
    $('#usePaste').addEventListener('click', () => askRestore($('#pasteBox').value, 'pasted text'));
  }
  function renderHomeKeep() { const y = scrollY; renderHome(); scrollTo(0, y); $('#vaultMsg').textContent = 'Backup downloaded. Upload that file on your other device.'; }
  function askRestore(text, src) {
    const box = $('#confirmBox');
    try { pending = parseBackup(text); }
    catch (e) { pending = null; box.hidden = true; $('#vaultMsg').textContent = 'That file isn\'t an Egg Basket or Kronorium backup.'; return; }
    const what = pending.kind === 'kronorium'
      ? 'This is a Kronorium backup. It will replace your Black Ops III progress on this device.'
      : 'This backup' + (pending.when ? ' from ' + esc(fmtDate(pending.when)) : '') + ' has ' + esc(summarize(pending.games)) + '. It will replace all progress on this device.';
    box.innerHTML = '<span>' + what + '</span><span class="spacer"></span><button type="button" class="btn red" id="doRestore">Replace</button><button type="button" class="btn ghost" id="noRestore">Cancel</button>';
    box.hidden = false;
    $('#vaultMsg').textContent = 'Loaded ' + src + '.';
    $('#noRestore').addEventListener('click', () => { pending = null; box.hidden = true; $('#vaultMsg').textContent = 'Restore cancelled.'; });
    $('#doRestore').addEventListener('click', () => {
      if (pending.kind === 'kronorium') S.games.bo3 = pending.games.bo3;
      else S.games = pending.games;
      if (pending.prefs) S.prefs = Object.assign({}, DEFP, pending.prefs);
      pending = null; save(); applyTheme();
      const y = scrollY; renderHome(); scrollTo(0, y);
      $('#vaultMsg').textContent = 'Progress restored.';
    });
  }

  // ---------- GAME screen (map list) ----------
  function renderGame() {
    topbar('#/', 'Games', GC.short);
    document.title = GC.title + ' · Egg Basket';
    const MAPS = GD.maps;
    const mains = MAPS.filter(m => m.main);
    const doneMains = mains.filter(isDone).length;
    let sideDone = 0, sideTotal = 0, runsTotal = 0;
    MAPS.forEach(m => { const c = countMap(m); sideDone += c.side.done; sideTotal += c.side.total; runsTotal += runsOf(m).length; });

    let html = '<section class="wrap hero"><div><div class="label">' + esc(GC.title) + ' · Zombies · ' + GC.year + '</div><h1>' + esc(GC.title) + '</h1>' +
      '<p>Pick a map for step-by-step guides with checkboxes. Main quests count toward the chart; side eggs live on their own tabs.</p></div>' +
      '<div class="summary">' + pieSVG(doneMains, mains.length) +
      '<div class="stats"><div class="stat"><b>' + doneMains + ' / ' + mains.length + '</b><span class="label">Main quests complete</span></div>' +
      '<div class="stat"><b>' + sideDone + ' / ' + sideTotal + '</b><span class="label">Side-egg steps checked</span></div>' +
      '<div class="legend"><span><i style="background:var(--stamp)"></i>Done</span><span><i style="background:var(--rule)"></i>Remaining</span><span>' + runsTotal + ' run' + (runsTotal === 1 ? '' : 's') + ' logged</span></div></div></div></section>';

    (GC.groups || [['all', 'Maps', '']]).forEach(([g, title, sub]) => {
      const list = MAPS.filter(m => g === 'all' || m.group === g);
      if (!list.length) return;
      html += '<section class="wrap group"><div class="group-head"><h2>' + esc(title) + '</h2><span class="label">' + esc(sub) + '</span></div><div class="grid">';
      list.forEach(m => {
        const c = countMap(m), done = isDone(m), br = bestRun(m);
        html += '<article class="card' + (done ? ' done' : '') + '">' +
          '<div class="card-top"><span class="label">' + esc(m.pack) + '</span>' + (done ? '<span class="stamp">' + (m.main ? 'Complete' : 'Done') + '</span>' : '') + '</div>' +
          '<a class="name" href="#/' + gid + '/' + m.id + '">' + esc(m.name) + '</a>' +
          '<div class="main">' + (m.main ? 'Main quest: <strong>' + esc(m.main) + '</strong>' : 'No main quest · side eggs only') + '</div>' +
          '<div class="bars">' +
          (m.main ? '<div class="bar"><span>Main</span><div class="track"><div class="fill" style="width:' + pct(c.main) + '%"></div></div><span>' + c.main.done + '/' + c.main.total + '</span></div>' : '') +
          '<div class="bar"><span>Side</span><div class="track"><div class="fill side" style="width:' + pct(c.side) + '%"></div></div><span>' + c.side.done + '/' + c.side.total + '</span></div>' +
          '</div><div class="card-foot">' +
          (br ? '<span class="runinfo">' + [fmtTime(br.mins), plLabel(br.players), br.round ? 'R' + br.round : ''].filter(Boolean).join(' · ') + (runsOf(m).length > 1 ? ' · ' + runsOf(m).length + ' runs' : '') + '</span>' : '') +
          '<span class="spacer"></span><button type="button" class="iconbtn" data-log="' + m.id + '">' + (done ? 'Edit log' : (m.main ? 'Mark complete' : 'Mark done')) + '</button></div></article>';
      });
      html += '</div></section>';
    });
    html += '<section class="wrap tools"><a class="iconbtn" href="#/">Backups &amp; other games</a></section>';
    $('#app').innerHTML = html;
    $('#app').querySelectorAll('[data-log]').forEach(b => b.addEventListener('click', e => { e.preventDefault(); openRun(GD.byId[b.dataset.log]); }));
  }

  // ---------- write-it-down fields ----------
  function notesOf(m) { GS.notes = GS.notes || {}; return GS.notes[m.id] || (GS.notes[m.id] = {}); }
  function recHTML(m, fields, inline) {
    if (!fields || !fields.length) return '';
    const N = notesOf(m);
    const opt = (o, v) => '<option value="' + esc(o) + '"' + (o === v ? ' selected' : '') + '>' + esc(o) + '</option>';
    const f = fields.map(r => {
      const v = N[r.id];
      const lab = '<span class="label">' + esc(r.label) + '</span>';
      if (r.type === 'seq') {
        const arr = Array.isArray(v) ? v : [];
        let row = '';
        for (let i = 0; i < r.n; i++) row += (i ? '<span class="arrow">→</span>' : '') + '<select data-rec="' + r.id + '" data-i="' + i + '" aria-label="' + esc(r.label) + ' ' + (i + 1) + '"><option value="">' + (i + 1) + '…</option>' + r.opts.map(o => opt(o, arr[i])).join('') + '</select>';
        return '<div class="rf wide">' + lab + '<div class="seqrow">' + row + '</div></div>';
      }
      if (r.type === 'nums') {
        const arr = Array.isArray(v) ? v : [];
        let row = '';
        for (let i = 0; i < r.n; i++) row += (i ? '<span class="arrow">·</span>' : '') + '<input type="number" inputmode="numeric" data-rec="' + r.id + '" data-i="' + i + '" value="' + esc(arr[i] ?? '') + '" aria-label="' + esc(r.label) + ' ' + (i + 1) + '">';
        return '<div class="rf">' + lab + '<div class="seqrow">' + row + '</div></div>';
      }
      if (r.type === 'select') return '<div class="rf">' + lab + '<select data-rec="' + r.id + '"><option value="">Not found yet</option>' + r.opts.map(o => opt(o, v)).join('') + '</select></div>';
      if (r.type === 'multi') {
        const arr = Array.isArray(v) ? v : [];
        return '<div class="rf wide">' + lab + '<div class="chips">' + r.opts.map(o => '<button type="button" class="chip" data-recm="' + r.id + '" data-val="' + esc(o) + '" aria-pressed="' + arr.includes(o) + '">' + esc(o) + '</button>').join('') + '</div></div>';
      }
      return '<div class="rf">' + lab + '<input type="text" data-rec="' + r.id + '" value="' + esc(v || '') + '" placeholder="' + esc(r.ph || '') + '"></div>';
    }).join('');
    return '<div class="rec' + (inline ? ' inline' : '') + '"><div class="rec-head"><b>Write it down</b><span class="label">Saved for this game</span></div><div class="rec-grid">' + f + '</div></div>';
  }
  function wireRec(m) {
    const N = notesOf(m);
    $('#app').querySelectorAll('[data-rec]').forEach(el => {
      const ev = el.tagName === 'SELECT' ? 'change' : 'input';
      el.addEventListener(ev, () => {
        const id = el.dataset.rec;
        if (el.dataset.i != null) {
          const arr = Array.isArray(N[id]) ? N[id] : [];
          arr[+el.dataset.i] = el.value; N[id] = arr;
          $('#app').querySelectorAll('[data-rec="' + id + '"][data-i="' + el.dataset.i + '"]').forEach(o => { if (o !== el) o.value = el.value; });
        } else {
          N[id] = el.value;
          $('#app').querySelectorAll('[data-rec="' + id + '"]').forEach(o => { if (o !== el) o.value = el.value; });
        }
        save();
      });
    });
    $('#app').querySelectorAll('[data-recm]').forEach(b => b.addEventListener('click', () => {
      const id = b.dataset.recm, v = b.dataset.val;
      let arr = Array.isArray(N[id]) ? N[id] : [];
      arr = arr.includes(v) ? arr.filter(x => x !== v) : arr.concat(v);
      N[id] = arr; save();
      $('#app').querySelectorAll('[data-recm="' + id + '"]').forEach(o => o.setAttribute('aria-pressed', arr.includes(o.dataset.val)));
    }));
  }

  // ---------- MAP page ----------
  const curTab = {};
  function renderMap(m, tabId, keepScroll) {
    topbar('#/' + gid, GC.short + ' maps', GC.short);
    document.title = m.name + ' · ' + GC.short + ' · Egg Basket';
    const tab = m.tabs.find(t => t.id === tabId) || m.tabs.find(t => t.id === curTab[gid + m.id]) || m.tabs[0];
    curTab[gid + m.id] = tab.id;
    const ms = mapSettings(m);
    const y = window.scrollY;

    let h = '<section class="wrap mhead"><div class="label">' + esc(GC.title) + ' · ' + esc(m.pack) + '</div><h1>' + esc(m.name) + '</h1>' +
      '<div class="quest">' + (m.main ? 'Main quest: <b>' + esc(m.main) + '</b>' + (isDone(m) ? ' <span class="tag" style="color:var(--stamp);border-color:var(--stamp)">Logged complete</span>' : '') : 'No main quest on this map') + '</div>' +
      '<p>' + esc(m.blurb) + '</p><div class="links">' +
      '<button type="button" class="iconbtn" id="logHere">' + (isDone(m) ? 'Edit completion log' : 'Mark complete') + '</button>' +
      (m.guide ? '<a class="iconbtn" href="' + esc(m.guide) + '" target="_blank" rel="noopener">Source guide ↗</a>' : '') +
      (m.wiki ? '<a class="iconbtn" href="' + esc(m.wiki) + '" target="_blank" rel="noopener">Wiki ↗</a>' : '') +
      '</div></section>';

    h += '<section class="wrap"><div class="panel">';
    (m.settings || []).forEach(st => {
      const sel = ms[st.id] || [];
      h += '<div class="setting"><span class="label">' + esc(st.label) + (st.multi ? ' · pick any' : '') + '</span><div class="chips">' +
        '<button type="button" class="chip" data-set="' + st.id + '" data-val="" aria-pressed="' + (!sel.length) + '">Show all</button>' +
        st.opts.map(o => '<button type="button" class="chip" data-set="' + st.id + '" data-val="' + o[0] + '" data-multi="' + (st.multi ? 1 : 0) + '" aria-pressed="' + sel.includes(o[0]) + '">' + esc(o[1]) + '</button>').join('') +
        '</div></div>';
    });
    h += '<div class="toggles"><label><input type="checkbox" id="hideDone"' + (S.prefs.hideDone ? ' checked' : '') + '> Hide checked steps</label>' +
      '<label><input type="checkbox" id="showPics"' + (S.prefs.pics ? ' checked' : '') + '> Show pictures</label></div></div></section>';

    h += '<nav class="tabs" aria-label="Guide sections"><div class="wrap" role="tablist">' + m.tabs.map(t => {
      const c = countTab(m, t);
      return '<button type="button" role="tab" class="tab" data-tab="' + t.id + '" aria-selected="' + (t.id === tab.id) + '">' +
        (t.main ? '<span class="mainmark">★</span>' : '') + esc(t.label) + '<span class="cnt">' + c.done + '/' + c.total + '</span></button>';
    }).join('') + '</div></nav>';

    h += '<section class="wrap sections" id="secs">';
    let shown = 0;
    tab.sections.forEach((sec, si) => {
      if (!visible(m, sec.w)) return;
      const steps = sec.steps.map((st, i) => ({ s: norm(st), i, k: stepKey(m, tab, si, i) })).filter(x => visible(m, x.s.w));
      if (!steps.length) return;
      const doneN = steps.filter(x => GS.checks[x.k]).length;
      const all = doneN === steps.length;
      const q = encodeURIComponent(GC.title + ' zombies ' + m.name + ' ' + sec.h.replace(/<[^>]+>/g, ''));
      let list = '';
      let num = 0;
      steps.forEach(x => {
        num++;
        const on = !!GS.checks[x.k];
        if (on && S.prefs.hideDone) return;
        const tags = x.s.w ? Object.keys(x.s.w).map(k => {
          const set = (m.settings || []).find(z => z.id === k);
          if (!set) return '';
          return x.s.w[k].map(v => { const o = set.opts.find(z => z[0] === v); return o ? o[1] : v; }).join(' / ');
        }).filter(Boolean) : [];
        list += '<li class="step' + (on ? ' checked' : '') + '">' +
          '<label class="chk"><input type="checkbox" data-k="' + x.k + '"' + (on ? ' checked' : '') + ' aria-label="Step ' + num + ' done"></label>' +
          '<div class="body"><div class="left"><p class="txt"><span class="num">' + num + '.</span> ' + x.s.t + (tags.length ? tags.map(t => '<span class="tag">' + esc(t) + '</span>').join('') : '') + '</p>' +
          recHTML(m, (sec.rec || []).filter(r => r.at != null && [].concat(r.at).includes(x.i)), true) + '</div>' +
          (S.prefs.pics && x.s.i && x.s.i.length ? '<div class="thumbs">' + x.s.i.map((im, ii) => {
            const [p, cap, era] = im.split('|');
            return '<button type="button" class="thumb' + (era ? ' oldver' : '') + '" data-gal="' + x.k + '" data-idx="' + ii + '">' + (era ? '<em class="era" title="This picture was taken in an older version of the map. The location is the same.">' + esc(era) + ' screenshot</em>' : '') + '<img loading="lazy" referrerpolicy="no-referrer" alt="' + esc(cap || '') + '" src="' + esc(imgUrl(m, p)) + '"><span>' + esc(cap || '') + '</span></button>';
          }).join('') + '</div>' : '') +
          '</div></li>';
      });
      shown++;
      h += '<article class="section' + (all ? ' complete' : '') + '"><div class="sec-head"><h3>' + sec.h + '</h3><span class="cnt">' + doneN + '/' + steps.length + '</span>' +
        '<span class="ext"><a href="https://www.google.com/search?tbm=isch&q=' + q + '" target="_blank" rel="noopener">More pictures ↗</a><a href="https://www.youtube.com/results?search_query=' + q + '+guide" target="_blank" rel="noopener">Video ↗</a></span></div>' +
        (sec.note ? '<div class="note">' + sec.note + '</div>' : '') + recHTML(m, (sec.rec || []).filter(r => r.at == null), false) +
        (list ? '<ol class="steps">' + list + '</ol>' : '<div class="empty">All steps in this section are checked.</div>') + '</article>';
    });
    if (!shown) h += '<div class="empty">Nothing matches your filters. Tap “Show all” above.</div>';
    h += '</section>';
    h += '<section class="wrap reset-row" id="resetRow"><button type="button" class="iconbtn danger" id="resetBtn">Uncheck every step on ' + esc(m.name) + '</button>' + (m.tabs.some(t => t.sections.some(x => x.rec)) ? '<button type="button" class="iconbtn" id="clearNotes">Clear written notes (new game)</button>' : '') + '<span id="resetConfirm" hidden>Sure? This can’t be undone. <button type="button" class="iconbtn danger" id="resetYes">Yes, uncheck all</button> <button type="button" class="iconbtn" id="resetNo">Cancel</button></span></section>';

    $('#app').innerHTML = h;
    if (keepScroll) window.scrollTo(0, y);

    $('#logHere').addEventListener('click', () => openRun(m));
    $('#app').querySelectorAll('.chip[data-set]').forEach(b => b.addEventListener('click', () => {
      const id = b.dataset.set, v = b.dataset.val, multi = b.dataset.multi === '1';
      let sel = ms[id] || [];
      if (!v) sel = [];
      else if (multi) sel = sel.includes(v) ? sel.filter(z => z !== v) : sel.concat(v);
      else sel = sel.includes(v) ? [] : [v];
      ms[id] = sel; save(); renderMap(m, tab.id, true);
    }));
    $('#hideDone').addEventListener('change', e => { S.prefs.hideDone = e.target.checked; save(); renderMap(m, tab.id, true); });
    $('#showPics').addEventListener('change', e => { S.prefs.pics = e.target.checked; save(); renderMap(m, tab.id, true); });
    $('#app').querySelectorAll('.tab').forEach(b => b.addEventListener('click', () => {
      history.replaceState(null, '', '#/' + gid + '/' + m.id + '/' + b.dataset.tab);
      renderMap(m, b.dataset.tab, false);
      const tabsEl = $('.tabs');
      const top = tabsEl.getBoundingClientRect().top + window.scrollY - 60;
      if (window.scrollY > top) window.scrollTo(0, top);
    }));
    $('#app').querySelectorAll('input[data-k]').forEach(c => c.addEventListener('change', () => {
      if (c.checked) GS.checks[c.dataset.k] = 1; else delete GS.checks[c.dataset.k];
      save(); renderMap(m, tab.id, true);
    }));
    $('#app').querySelectorAll('.thumb img').forEach(img => img.addEventListener('error', () => img.parentElement.classList.add('broken'), { once: true }));
    $('#app').querySelectorAll('.thumb').forEach(b => b.addEventListener('click', () => {
      const st = findStep(m, b.dataset.gal);
      if (st) openLightbox(m, st.i, +b.dataset.idx);
    }));
    wireRec(m);
    const cn = $('#clearNotes');
    if (cn) cn.addEventListener('click', () => { if (cn.dataset.armed) { delete GS.notes[m.id]; save(); renderMap(m, tab.id, true); } else { cn.dataset.armed = 1; cn.textContent = 'Tap again to clear notes'; } });
    $('#resetBtn').addEventListener('click', () => { $('#resetConfirm').hidden = false; });
    $('#resetNo').addEventListener('click', () => { $('#resetConfirm').hidden = true; });
    $('#resetYes').addEventListener('click', () => {
      Object.keys(GS.checks).forEach(k => { if (k.startsWith(m.id + '.')) delete GS.checks[k]; });
      save(); renderMap(m, tab.id, false);
    });
  }
  function findStep(m, k) {
    const [, tid, si, i] = k.split('.');
    const t = m.tabs.find(x => x.id === tid);
    return t ? norm(t.sections[+si].steps[+i]) : null;
  }

  // ---------- lightbox ----------
  let LB = null;
  function openLightbox(m, imgs, idx) { LB = { m, imgs, idx }; showLB(); $('#lightbox').hidden = false; document.body.style.overflow = 'hidden'; }
  function showLB() {
    const [p, cap, era] = LB.imgs[LB.idx].split('|');
    const url = imgUrl(LB.m, p);
    $('#lbImg').src = url; $('#lbImg').alt = cap || '';
    $('#lbCap').textContent = (cap || '') + (era ? '  ·  ' + era + ' screenshot (same spot, older graphics)' : '');
    $('#lbOpen').href = url;
    $('#lbCount').textContent = (LB.idx + 1) + ' / ' + LB.imgs.length;
    $('#lbPrev').disabled = $('#lbNext').disabled = LB.imgs.length < 2;
  }
  function closeLB() { $('#lightbox').hidden = true; document.body.style.overflow = ''; LB = null; }
  const stepLB = d => { if (!LB) return; LB.idx = (LB.idx + d + LB.imgs.length) % LB.imgs.length; showLB(); };
  $('#lbClose').addEventListener('click', closeLB);
  $('#lbPrev').addEventListener('click', () => stepLB(-1));
  $('#lbNext').addEventListener('click', () => stepLB(1));
  $('#lightbox').addEventListener('click', e => { if (e.target.classList.contains('lb-stage')) closeLB(); });
  document.addEventListener('keydown', e => {
    if (!LB) return;
    if (e.key === 'Escape') closeLB();
    if (e.key === 'ArrowLeft') stepLB(-1);
    if (e.key === 'ArrowRight') stepLB(1);
  });
  let tx = null;
  $('#lightbox').addEventListener('touchstart', e => { tx = e.touches[0].clientX; }, { passive: true });
  $('#lightbox').addEventListener('touchend', e => { if (tx == null) return; const dx = e.changedTouches[0].clientX - tx; if (Math.abs(dx) > 50) stepLB(dx < 0 ? 1 : -1); tx = null; });

  // ---------- run log dialog ----------
  let runMap = null;
  function openRun(m) {
    runMap = m;
    $('#runTitle').textContent = m.name;
    $('#runMapLabel').textContent = GC.short + ' · ' + (m.main ? 'Main quest · ' + m.main : 'Map log');
    $('#runDate').value = today(); $('#runH').value = ''; $('#runM').value = ''; $('#runRound').value = ''; $('#runNotes').value = '';
    const pl = (mapSettings(m).pl || [])[0];
    $('#runPlayers').value = pl || '1';
    $('#runSave').textContent = isDone(m) ? 'Add another run' : 'Save completion';
    drawRuns();
    $('#runDlg').showModal();
  }
  function drawRuns() {
    const r = runsOf(runMap);
    $('#runList').innerHTML = r.length ? r.map((x, i) =>
      '<div class="run"><div><div>' + esc([fmtTime(x.mins) || 'Time not set', plLabel(x.players), x.round ? 'Round ' + x.round : ''].filter(Boolean).join(' · ')) + '</div>' +
      '<div class="meta">' + esc(x.date || '') + (x.notes ? ' — ' + esc(x.notes) : '') + '</div></div>' +
      '<button type="button" class="iconbtn danger" data-del="' + i + '">Remove</button></div>').join('') : '';
    $('#runList').querySelectorAll('[data-del]').forEach(b => b.addEventListener('click', () => {
      r.splice(+b.dataset.del, 1);
      if (!r.length) delete GS.runs[runMap.id];
      save(); drawRuns(); $('#runSave').textContent = isDone(runMap) ? 'Add another run' : 'Save completion'; route(true);
    }));
  }
  $('#runCancel').addEventListener('click', () => $('#runDlg').close());
  $('#runForm').addEventListener('submit', e => {
    e.preventDefault();
    const h = parseInt($('#runH').value, 10), mi = parseInt($('#runM').value, 10);
    const mins = (isNaN(h) && isNaN(mi)) ? null : (isNaN(h) ? 0 : h) * 60 + (isNaN(mi) ? 0 : mi);
    const run = { date: $('#runDate').value, players: +$('#runPlayers').value, mins, round: parseInt($('#runRound').value, 10) || null, notes: $('#runNotes').value.trim() };
    (GS.runs[runMap.id] = GS.runs[runMap.id] || []).push(run);
    save(); $('#runDlg').close(); route(true);
  });

  // ---------- routing ----------
  // #/                → home (game picker + backups)
  // #/bo3             → map list for a game
  // #/bo3/de[/tab]    → map guide
  let lastView = '';
  const scrollMem = {};
  function parse() {
    let h = location.hash.replace(/^#\/?/, '');
    const legacy = h.match(/^map\/(\w+)(?:\/(\w+))?/); // old Kronorium links
    if (legacy) { history.replaceState(null, '', '#/bo3/' + legacy[1] + (legacy[2] ? '/' + legacy[2] : '')); h = location.hash.replace(/^#\/?/, ''); }
    return h.split('/').filter(Boolean);
  }
  function route(keep) {
    const [g, mapId, tabId] = parse();
    const view = g ? (mapId ? g + '/' + mapId : g) : '';
    const same = view === lastView;
    if (!same && lastView) scrollMem[lastView] = window.scrollY;
    const restore = () => window.scrollTo(0, same && keep ? window.scrollY : (scrollMem[view] && !mapId ? scrollMem[view] : 0));
    lastView = view;
    if (!g || !byGame[g] || !byGame[g].ready) { const y = scrollY; renderHome(); same && keep ? scrollTo(0, y) : restore(); return; }
    const go = () => {
      setGame(g);
      if (mapId && GD.byId[mapId]) { renderMap(GD.byId[mapId], tabId, keep && same); if (!(keep && same)) window.scrollTo(0, 0); }
      else { const y = scrollY; renderGame(); same && keep ? scrollTo(0, y) : restore(); }
    };
    if (LOADED[g]) go();
    else {
      $('#app').innerHTML = '<div class="loading">Loading ' + esc(byGame[g].title) + '…</div>';
      loadGame(g).then(go, () => { $('#app').innerHTML = '<div class="loading">Couldn’t load ' + esc(byGame[g].title) + '. Check your connection and refresh.</div>'; });
    }
  }
  window.addEventListener('hashchange', () => route(false));
  $('#brand').addEventListener('click', e => { e.preventDefault(); location.hash = '#/'; });
  route(false);
})();
