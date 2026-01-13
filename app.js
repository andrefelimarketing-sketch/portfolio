(() => {
  const tabs = Array.from(document.querySelectorAll('.tab'));
  const panels = Array.from(document.querySelectorAll('.panel'));

  function show(tabId){
    tabs.forEach(t => t.classList.toggle('is-active', t.dataset.tab === tabId));
    panels.forEach(p => p.classList.toggle('is-active', p.id === tabId));
    const activeTab = tabs.find(t => t.dataset.tab === tabId);
    if(activeTab) activeTab.focus({ preventScroll: true });
  }

  tabs.forEach(btn => btn.addEventListener('click', () => show(btn.dataset.tab)));

  // Keyboard shortcuts: 1-4
  window.addEventListener('keydown', (e) => {
    const key = e.key;
    if(key === '1') show('home');
    if(key === '2') show('copy');
    if(key === '3') show('social');
    if(key === '4') show('web');
  });

  // Clock + year
  const clock = document.getElementById('clock');
  const year = document.getElementById('year');

  function pad(n){ return String(n).padStart(2, '0'); }
  function tick(){
    const now = new Date();
    if(clock) clock.textContent = `${pad(now.getHours())}:${pad(now.getMinutes())}`;
    if(year) year.textContent = String(now.getFullYear());
  }
  tick();
  setInterval(tick, 1000 * 15);
})();
