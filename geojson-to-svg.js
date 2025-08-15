// geojson-to-svg.js
const fs = require('fs-extra');
const topojson = require('topojson-client');
const d3 = require('d3-geo');
const path = require('path');

function sanitizeId(name) {
  return name.replace(/\s+/g, '_').replace(/[^\w_]/g, '');
}

async function main() {
  const [inputFile, outputFile] = process.argv.slice(2);
  if (!inputFile || !outputFile) {
    console.error('Usage: node geojson-to-svg.js input.geojson output.svg');
    process.exit(1);
  }
  const geo = await fs.readJson(inputFile);
  let features = geo.type === 'Topology'
    ? topojson.feature(geo, geo.objects[Object.keys(geo.objects)[0]]).features
    : geo.features;

  const width = 1200, height = 1400;
  const projection = d3.geoMercator();
  const pathGen = d3.geoPath().projection(projection).pointRadius(2);
  projection.fitSize([width - 20, height - 20], { type: 'FeatureCollection', features });

  const svgParts = [
    `<?xml version="1.0" encoding="utf-8"?>`,
    `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${width} ${height}" role="img" aria-label="India map">`,
    `<defs><style><![CDATA[
      .state { fill:#e8f6ff; stroke:#2b6cb0; stroke-width:1.5; cursor:pointer; transition:all .12s ease; }
      .state:hover { fill:#cbe6ff; }
      .label { font-family: Inter, Arial, sans-serif; font-size:12px; fill:#08304a; pointer-events:none; }
    ]]></style></defs>`,
    `<g id="map">`
  ];

  features.forEach((f, i) => {
    const name = f.properties.st_nm || f.properties.NAME_1 || f.properties.STATE || `state_${i}`;
    const id = sanitizeId(name);
    const d = pathGen(f);
    svgParts.push(`<path id="${id}" class="state" d="${d}" data-name="${name}" />`);
  });

  svgParts.push(`</g></svg>`);

  await fs.writeFile(outputFile, svgParts.join('\n'), 'utf8');
  console.log('Wrote', outputFile);
}

main().catch(e => console.error(e));
