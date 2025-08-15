// assets/js/map.js
// Uses your local accurate GeoJSON (assets/geojson/india_states.geojson).
// Clicking a state opens its festivals (from FESTIVALS_BY_STATE).

document.addEventListener('DOMContentLoaded', () => {
  const panel   = document.getElementById('statePanel');
  const titleEl = document.getElementById('stateTitle');
  const listEl  = document.getElementById('stateFestivals');
  const closeBtn = document.getElementById('closePanel');

  closeBtn && closeBtn.addEventListener('click', () => panel.classList.add('hidden'));

  // 1) Init Leaflet
  const map = L.map('leafletMap', { zoomControl: true }).setView([22.9734, 78.6569], 5);
  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; OpenStreetMap contributors'
  }).addTo(map);

  // 2) Hover info (top-right)
  const info = L.control({ position: 'topright' });
  info.onAdd = function () {
    this._div = L.DomUtil.create('div', 'info');
    this.update();
    return this._div;
  };
  info.update = function (props) {
    this._div.innerHTML = props ? `<strong>${props}</strong>` : 'Hover over a state';
  };
  info.addTo(map);

  // 3) Styles
  function baseStyle() {
    return { color:'#2563eb', weight:1.2, fillColor:'#93c5fd', fillOpacity:0.35 };
  }
  function highlight(e) {
    const layer = e.target;
    layer.setStyle({ weight:2, fillOpacity:0.55 });
    if (!L.Browser.ie && !L.Browser.opera && !L.Browser.edge) layer.bringToFront();
    info.update(layer.feature?.properties?.st_nm || layer.feature?.properties?.name);
  }
  function reset(e) {
    geojson.resetStyle(e.target);
    info.update();
  }

  // 4) Name normalization to match your FESTIVALS_BY_STATE keys (underscores)
  const NAME_ALIASES = {
    'NCT of Delhi': 'Delhi',
    'Delhi': 'Delhi',
    'Andaman and Nicobar Islands': 'Andaman_and_Nicobar_Islands',
    'Dadra and Nagar Haveli and Daman and Diu': 'Dadra_and_Nagar_Haveli_and_Daman_and_Diu',
    'Jammu & Kashmir': 'Jammu_and_Kashmir',
    'Jammu and Kashmir': 'Jammu_and_Kashmir',
    'Odisha': 'Odisha', // already same key in your data (no underscore variant)
    'Orissa': 'Odisha',
    'Puducherry': 'Puducherry',
    'Pondicherry': 'Puducherry'
  };
  function toFestivalKey(name) {
    const n = (NAME_ALIASES[name] || name).trim();
    // convert spaces to underscores (e.g., "Tamil Nadu" -> "Tamil_Nadu")
    const underscore = n.replace(/[\s]+/g, '_');
    return underscore;
  }

  // 5) Panel rendering
  function openStatePanel(rawName) {
    const key = toFestivalKey(rawName);
    const items = FESTIVALS_BY_STATE[key] || FESTIVALS_BY_STATE['All'] || [];

    titleEl.textContent = key.replace(/_/g, ' ');
    listEl.innerHTML = '';

    if (!items.length) {
      listEl.innerHTML = '<p class="muted">No festival data available for this state.</p>';
    } else {
      items.forEach(f => {
        const card = document.createElement('div');
        card.className = 'festival-card';

        const img = document.createElement('img');
        img.src = f.img || 'data:image/svg+xml;utf8,'+encodeURIComponent('<svg xmlns="http://www.w3.org/2000/svg" width="300" height="180"><rect width="100%" height="100%" fill="#f2f7ff"/><text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="#9aa7c7" font-family="Arial" font-size="16">No Image</text></svg>');
        img.alt = f.name || '';
        img.onerror = function(){ this.src = 'data:image/svg+xml;utf8,'+encodeURIComponent('<svg xmlns="http://www.w3.org/2000/svg" width="300" height="180"><rect width="100%" height="100%" fill="#f2f7ff"/><text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="#9aa7c7" font-family="Arial" font-size="16">Image not found</text></svg>'); };

        const infoWrap = document.createElement('div');
        const h3 = document.createElement('h3'); h3.textContent = f.name || '';
        const small = document.createElement('small'); small.className = 'muted';
        small.textContent = f.month ? `${f.month}${f.date ? ' • '+f.date : ''}` : (f.date || '');
        const p = document.createElement('p'); p.textContent = f.desc || '';

        infoWrap.appendChild(h3);
        infoWrap.appendChild(small);
        infoWrap.appendChild(p);

        card.appendChild(img);
        card.appendChild(infoWrap);
        listEl.appendChild(card);
      });
    }
    panel.classList.remove('hidden');

    // Optional: notify calendar to filter by state
    if (window.filterByState) window.filterByState(key);
  }

  // 6) Load REAL India boundaries (your local accurate GeoJSON)
  //    Make sure this file exists: assets/geojson/india_states.geojson
  let geojson;
  fetch('assets/geojson/india_states.geojson')
    .then(r => r.json())
    .then(data => {
      geojson = L.geoJSON(data, {
        style: baseStyle,
        onEachFeature: (feature, layer) => {
          const stateName = feature.properties?.st_nm || feature.properties?.name || 'State';
          layer.bindTooltip(stateName, { sticky:true, direction:'auto' });
          layer.on({
            mouseover: highlight,
            mouseout: reset,
            click: () => openStatePanel(stateName)
          });
        }
      }).addTo(map);

      // Fit map to bounds
      try { map.fitBounds(geojson.getBounds(), { padding:[10,10] }); } catch(e) { /* ignore */ }
    })
    .catch(err => {
      console.error('Failed to load india_states.geojson', err);
      info.update('Map data missing');
    });
});
