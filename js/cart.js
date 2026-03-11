/* ============================================================
   MAISON REINE — Cart Logic
   js/cart.js
============================================================ */

let cart = JSON.parse(localStorage.getItem('mr_cart') || '[]');

function saveCart()  { localStorage.setItem('mr_cart', JSON.stringify(cart)); }

function addToCart(id, qty = 1, size = 'M') {
  const p = getProductById(id);
  if (!p) return;
  const existing = cart.find(c => c.id === id && c.size === size);
  if (existing) existing.qty += qty;
  else cart.push({ ...p, qty, size });
  saveCart();
  updateCartUI();
  showToast(`${p.name} added to bag!`);
}

function removeFromCart(id, size) {
  cart = cart.filter(c => !(c.id === id && c.size === size));
  saveCart();
  updateCartUI();
}

function updateQty(id, size, delta) {
  const item = cart.find(c => c.id === id && c.size === size);
  if (!item) return;
  item.qty = Math.max(1, item.qty + delta);
  saveCart();
  updateCartUI();
}

function getCartTotal()  { return cart.reduce((s, c) => s + c.price * c.qty, 0); }
function getCartCount()  { return cart.reduce((s, c) => s + c.qty, 0); }
function clearCart()     { cart = []; saveCart(); updateCartUI(); }

function updateCartUI() {
  const count = getCartCount();
  const total = getCartTotal();

  /* Badge */
  document.querySelectorAll('.cart-badge').forEach(el => el.textContent = count);
  document.querySelectorAll('#cartItemCount').forEach(el => el.textContent = `(${count})`);

  /* Drawer items */
  const bodyEl = document.getElementById('cartBodyEl');
  if (!bodyEl) return;

  if (cart.length === 0) {
    bodyEl.innerHTML = `<div class="cart-empty"><i class="fas fa-shopping-bag"></i><p>Your bag is empty</p></div>`;
  } else {
    bodyEl.innerHTML = cart.map(c => `
      <div class="cart-item">
        <img class="cart-item-img" src="${c.img}" alt="${c.name}" loading="lazy">
        <div class="cart-item-info">
          <div class="cart-item-name">${c.name}</div>
          <div class="cart-item-meta">Size: ${c.size} · Qty: ${c.qty}</div>
          <div class="cart-item-price">₹${(c.price * c.qty).toLocaleString()}</div>
        </div>
        <button class="cart-remove" onclick="removeFromCart(${c.id},'${c.size}')"><i class="fas fa-times"></i></button>
      </div>`).join('');
  }

  document.querySelectorAll('#cartSubtotalEl').forEach(el => el.textContent = `₹${total.toLocaleString()}`);
  document.querySelectorAll('#cartTotalEl').forEach(el => el.textContent = `₹${total.toLocaleString()}`);
}

/* Drawer toggle */
function toggleCart() {
  document.getElementById('cartDrawer')?.classList.toggle('open');
  document.getElementById('cartOverlay')?.classList.toggle('open');
}

/* Wishlist */
let wishlist = JSON.parse(localStorage.getItem('mr_wishlist') || '[]');

function toggleWishlist(btn, id) {
  const idx = wishlist.indexOf(id);
  if (idx === -1) {
    wishlist.push(id);
    btn.classList.add('active');
    btn.querySelector('i').className = 'fas fa-heart';
    btn.querySelector('i').style.color = '#c0392b';
    showToast('Added to wishlist ♥');
  } else {
    wishlist.splice(idx, 1);
    btn.classList.remove('active');
    btn.querySelector('i').className = 'far fa-heart';
    btn.querySelector('i').style.color = '';
  }
  localStorage.setItem('mr_wishlist', JSON.stringify(wishlist));
}

/* Init cart UI on load */
document.addEventListener('DOMContentLoaded', updateCartUI);
