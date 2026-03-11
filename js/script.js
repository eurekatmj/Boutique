/* ============================================================
   MAISON REINE — Main Script
   js/script.js
============================================================ */

/* ── Toast ─────────────────────────────────────────────── */
function showToast(msg) {
  const t = document.getElementById('toast');
  if (!t) return;
  document.getElementById('toastMsg').textContent = msg;
  t.classList.add('show');
  setTimeout(() => t.classList.remove('show'), 3200);
}

/* ── Ripple effect ─────────────────────────────────────── */
document.addEventListener('click', e => {
  const btn = e.target.closest('.btn');
  if (!btn) return;
  const r = document.createElement('span');
  const rect = btn.getBoundingClientRect();
  const size = Math.max(rect.width, rect.height);
  r.className = 'ripple';
  r.style.cssText = `width:${size}px;height:${size}px;left:${e.clientX-rect.left-size/2}px;top:${e.clientY-rect.top-size/2}px`;
  btn.appendChild(r);
  r.addEventListener('animationend', () => r.remove());
});

/* ── Sticky nav ────────────────────────────────────────── */
window.addEventListener('scroll', () => {
  const nav = document.getElementById('mainNav');
  if (nav) nav.classList.toggle('scrolled', window.scrollY > 50);
  observeFadeUps();
});

/* ── Mobile menu ───────────────────────────────────────── */
function openMobileMenu()  { document.getElementById('mobileMenu')?.classList.add('open'); }
function closeMobileMenu() { document.getElementById('mobileMenu')?.classList.remove('open'); }

/* ── Scroll animations ─────────────────────────────────── */
const fadeObserver = new IntersectionObserver(entries => {
  entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); });
}, { threshold: 0.1 });

function observeFadeUps() {
  document.querySelectorAll('.fade-up:not(.visible)').forEach(el => fadeObserver.observe(el));
}
document.addEventListener('DOMContentLoaded', observeFadeUps);

/* ── Marquee duplication ───────────────────────────────── */
document.addEventListener('DOMContentLoaded', () => {
  const track = document.getElementById('marqueeTrack');
  if (track) track.innerHTML += track.innerHTML;
});

/* ── Color swatch selection ────────────────────────────── */
document.addEventListener('click', e => {
  const sw = e.target.closest('.color-swatch');
  if (!sw) return;
  const parent = sw.closest('.color-swatches, .color-dots');
  if (parent) parent.querySelectorAll('.color-swatch').forEach(s => s.classList.remove('active'));
  sw.classList.add('active');
});

/* ── Carousel scroll ───────────────────────────────────── */
function scrollCarousel(dir) {
  const t = document.getElementById('carouselTrack');
  if (t) t.scrollBy({ left: dir * 300, behavior:'smooth' });
}

/* ── Quick View modal ──────────────────────────────────── */
let _quickProduct = null;

function openQuickView(id) {
  const p = getProductById(id);
  if (!p) return;
  _quickProduct = p;
  document.getElementById('modalImg').src   = p.img;
  document.getElementById('modalTitle').textContent = p.name;
  document.getElementById('modalPrice').textContent = `₹${p.price.toLocaleString()}`;
  const overlay = document.getElementById('modalOverlay');
  overlay.classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeQuickView() {
  document.getElementById('modalOverlay')?.classList.remove('open');
  document.body.style.overflow = '';
}

document.addEventListener('click', e => {
  if (e.target.id === 'modalOverlay') closeQuickView();
});

function addFromModal() {
  if (_quickProduct) { addToCart(_quickProduct.id); closeQuickView(); }
}

function detailFromModal() {
  if (_quickProduct) { closeQuickView(); setTimeout(() => goToDetail(_quickProduct.id), 100); }
}

/* ── Size selector ─────────────────────────────────────── */
function selectSize(btn) {
  if (btn.classList.contains('out')) return;
  btn.closest('.size-options').querySelectorAll('.size-btn').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
}

/* ── Qty selector ──────────────────────────────────────── */
function changeQty(delta) {
  const el = document.getElementById('qtyNum');
  if (!el) return;
  let v = parseInt(el.value) + delta;
  el.value = Math.min(10, Math.max(1, v));
}

/* ── Newsletter ────────────────────────────────────────── */
function subscribeNewsletter(inputId) {
  const inp = document.getElementById(inputId || 'newsletterEmail');
  if (!inp || !inp.value.includes('@')) {
    if (inp) inp.style.borderColor = '#c0392b';
    return;
  }
  inp.style.borderColor = '';
  inp.value = '';
  showToast('Welcome to the inner circle! ✨');
}

/* ── Contact form ──────────────────────────────────────── */
function submitContact() {
  showToast("Message sent! We'll be in touch within 24 hours.");
}

/* ── Gallery main switch ───────────────────────────────── */
function switchGallery(el, url) {
  document.getElementById('galleryMain').src = url;
  document.querySelectorAll('.gallery-thumb').forEach(t => t.classList.remove('active'));
  el.classList.add('active');
}

/* ── Active nav highlight ──────────────────────────────── */
(function setActiveNav() {
  const page = window.location.pathname.split('/').pop() || 'index.html';
  const map  = { 'index.html':'nav-home','shop.html':'nav-shop','about.html':'nav-about','contact.html':'nav-contact','product.html':'nav-shop' };
  const id   = map[page];
  if (id) document.getElementById(id)?.classList.add('active');
})();

/* ── Filter toggle (sidebar accordion) ────────────────── */
function toggleFilterGroup(el) {
  el.classList.toggle('collapsed');
}
