// assets/js/calendar.js
(function(){
  const months = ["All","January","February","March","April","May","June","July","August","September","October","November","December"];
  const monthSelect = document.getElementById('monthSelect');
  const searchInput = document.getElementById('searchInput');
  const festivalsContainer = document.getElementById('festivalsContainer');
  const gridViewBtn = document.getElementById('gridView');
  const listViewBtn = document.getElementById('listView');

  if(!monthSelect || !searchInput || !festivalsContainer) return;

  months.forEach(m => {
    const opt = document.createElement('option');
    opt.value = m;
    opt.textContent = m;
    monthSelect.appendChild(opt);
  });

  monthSelect.value = "All";

  function gatherAll() {
    const arr = [];
    Object.keys(FESTIVALS_BY_STATE).forEach(stateKey => {
      const items = FESTIVALS_BY_STATE[stateKey] || [];
      items.forEach(it => arr.push(Object.assign({}, it, { state: stateKey })));
    });
    return arr;
  }

  function filterItems() {
    const sel = monthSelect.value;
    const q = (searchInput.value || '').toLowerCase().trim();
    let items = gatherAll();

    // month filter (if not All)
    if(sel && sel !== 'All') {
      items = items.filter(i => {
        const m = (i.month || '');
        return m.toLowerCase().includes(sel.toLowerCase());
      });
    }

    // search filter on name/state/desc
    if(q) {
      items = items.filter(i => {
        return (i.name || '').toLowerCase().includes(q)
            || (i.state || '').toLowerCase().includes(q)
            || (i.desc || '').toLowerCase().includes(q);
      });
    }

    return items;
  }

  function render(items, mode='grid') {
    festivalsContainer.className = mode === 'list' ? 'list' : 'grid';
    festivalsContainer.innerHTML = '';
    if(!items.length) {
      festivalsContainer.innerHTML = '<p class="muted">No festivals found.</p>';
      return;
    }
    items.forEach(f => {
      const card = document.createElement('div');
      card.className = 'card';
      const imgSrc = f.img || '';
      const img = document.createElement('img');
      if(imgSrc) img.src = imgSrc;
      else img.src = 'data:image/svg+xml;utf8,' + encodeURIComponent('<svg xmlns="http://www.w3.org/2000/svg" width="640" height="360"><rect width="100%" height="100%" fill="#f2f7ff"/><text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="#9aa7c7" font-family="Arial" font-size="18">No Image</text></svg>');
      img.alt = f.name || 'Festival';
      img.onerror = function(){ this.src='data:image/svg+xml;utf8,'+encodeURIComponent('<svg xmlns="http://www.w3.org/2000/svg" width="640" height="360"><rect width="100%" height="100%" fill="#f2f7ff"/><text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="#9aa7c7" font-family="Arial" font-size="18">Image not found</text></svg>'); };

      const h3 = document.createElement('h3'); h3.textContent = f.name || '';
      const small = document.createElement('small'); small.className='muted'; small.textContent = `${(f.state||'').replace(/_/g,' ')} • ${f.month || ''}`;
      const p = document.createElement('p'); p.textContent = f.desc || '';

      card.appendChild(img); card.appendChild(h3); card.appendChild(small); card.appendChild(p);
      festivalsContainer.appendChild(card);
    });
  }

  function refresh() {
    const items = filterItems();
    render(items, document.getElementById('listView').classList.contains('active') ? 'list' : 'grid');
  }

  monthSelect.addEventListener('change', refresh);
  searchInput.addEventListener('input', refresh);

  gridViewBtn.addEventListener('click', ()=>{ gridViewBtn.classList.add('active'); listViewBtn.classList.remove('active'); refresh(); });
  listViewBtn.addEventListener('click', ()=>{ listViewBtn.classList.add('active'); gridViewBtn.classList.remove('active'); refresh(); });

  // expose function for map to call (stateKey uses underscores)
  window.filterByState = function(stateKey){
    if(!stateKey) return;
    // set search to state (space separated) and show All months
    searchInput.value = stateKey.replace(/_/g,' ');
    monthSelect.value = 'All';
    // run a tiny delay to ensure UI inputs updated before refresh
    setTimeout(refresh, 10);
  };

  // initial render
  refresh();
})();
