// assets/js/map.js
let map;
let geojsonLayer;
let labelLayer;

document.addEventListener("DOMContentLoaded", () => {
  initMap();
});

// Initialize the map
function initMap() {
 map = L.map("leafletMap").setView([20.5937, 78.9629], 5);


  // Base layer
  L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
    maxZoom: 18,
    attribution: "© OpenStreetMap contributors",
  }).addTo(map);

  // Pane for labels that does not capture mouse events
  map.createPane("labels");
  map.getPane("labels").style.zIndex = 650;
  map.getPane("labels").style.pointerEvents = "none";

  loadGeoJSON();
}

// Load India GeoJSON
function loadGeoJSON() {
  fetch("assets/geojson/india_states.geojson")
    .then((res) => res.json())
    .then((data) => {
      geojsonLayer = L.geoJSON(data, {
        style: defaultStyle,
        onEachFeature: onEachFeature,
      }).addTo(map);

      // Fit to bounds
      const b = geojsonLayer.getBounds();
      if (b && b.isValid()) map.fitBounds(b, { padding: [20, 20] });

      addLabelsFromLayer(geojsonLayer);
    })
    .catch((err) => console.error("Error loading GeoJSON:", err));
}

// Default state style
function defaultStyle() {
  return {
    fillColor: "#4f46e5",
    weight: 1,
    opacity: 1,
    color: "#fff",
    dashArray: "3",
    fillOpacity: 0.6,
  };
}

// Highlighted style
function highlightStyle() {
  return {
    fillColor: "#f97316",
    weight: 2,
    color: "#000",
    fillOpacity: 0.8,
  };
}

// Add state labels
function addLabelsFromLayer(layerGroup) {
  if (labelLayer) map.removeLayer(labelLayer);
  labelLayer = L.layerGroup().addTo(map);

  layerGroup.eachLayer((layer) => {
    const props = layer.feature?.properties || {};
    const stateName = props.ST_NM || props.NAME_1 || "Unknown";

    let center;
    try {
      center = layer.getBounds().getCenter();
    } catch (e) {
      center = null;
    }
    if (!center) return;

    L.marker(center, {
      pane: "labels",
      interactive: false,
      icon: L.divIcon({
        className: "state-label",
        html: stateName,
      }),
    }).addTo(labelLayer);
  });
}

// Event binding per feature
function onEachFeature(feature, layer) {
  layer.on({
    mouseover: (e) => {
      e.target.setStyle(highlightStyle());
      e.target.bringToFront();
    },
    mouseout: (e) => geojsonLayer.resetStyle(e.target),
    click: (e) => {
      const props = feature?.properties || {};
      const stateName = props.ST_NM || props.NAME_1 || "All";
      console.log("Clicked state:", stateName);

      if (typeof showFestivalForState === "function") {
        showFestivalForState(stateName);
      } else {
        console.warn("showFestivalForState is not defined. Make sure assets/js/festivals.js is loaded before map.js.");
      }

      map.fitBounds(e.target.getBounds(), { padding: [30, 30] });
    },
  });

  const tooltip = feature.properties?.ST_NM || feature.properties?.NAME_1;
  if (tooltip) layer.bindTooltip(tooltip, { direction: "auto", sticky: true });
}
