/* ============================================================
   MAISON REINE — Filters & Sort Logic
   js/filters.js
============================================================ */

let currentMaxPrice = 3000;
let activeFilters = { cats: [], sizes: [], colors: [] };

function applyFilters() {
  let filtered = [...PRODUCTS];

  /* Category filter */
  const checked = ['kurti','saree','western'].filter(c => {
    const el = document.getElementById('f-' + c);
    return el && el.checked;
  });
  if (checked.length > 0) filtered = filtered.filter(p => checked.includes(p.cat));

  /* Price filter */
  filtered = filtered.filter(p => p.price <= currentMaxPrice);

  /* Sort */
  applySort(filtered);
}

function applySort(list) {
  let filtered = list || [...PRODUCTS];
  const sel = document.getElementById('sortSelect');
  if (!sel) return;
  const val = sel.value;
  if (val === 'Price: Low to High')  filtered.sort((a,b) => a.price - b.price);
  else if (val === 'Price: High to Low') filtered.sort((a,b) => b.price - a.price);
  else if (val === 'Newest First')       filtered.sort((a,b) => b.id - a.id);
  else if (val === 'Most Popular')       filtered.sort((a,b) => b.rating - a.rating);

  renderShopGrid(filtered);
}

function renderShopGrid(items) {
  const grid = document.getElementById('shopGrid');
  if (!grid) return;
  const countEl = document.getElementById('shopCount');
  if (countEl) countEl.textContent = items.length;
  grid.innerHTML = items.map(p => productCardHTML(p)).join('');
}

function updatePrice(el) {
  currentMaxPrice = parseInt(el.value);
  const lbl = document.getElementById('priceValue');
  if (lbl) lbl.textContent = `₹${currentMaxPrice.toLocaleString()}`;
  applyFilters();
}

function setView(type, btn) {
  document.querySelectorAll('.view-btn').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
  const grid = document.getElementById('shopGrid');
  if (!grid) return;
  grid.style.gridTemplateColumns = type === 'list'
    ? '1fr'
    : 'repeat(auto-fill,minmax(240px,1fr))';
}

function filterByCat(cat) {
  /* Reset checkboxes then check the right one */
  ['kurti','saree','western'].forEach(c => {
    const el = document.getElementById('f-' + c);
    if (el) el.checked = (c === cat || cat === 'all');
  });
  applyFilters();
}
