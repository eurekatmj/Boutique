/* ============================================================
   MAISON REINE — Product Data
   js/products.js
============================================================ */

const PRODUCTS = [
  { id:1,  name:"Floral Printed Kurti",    price:899,  oldPrice:1199, cat:"kurti",   badge:"new",  rating:4.5, img:"https://images.unsplash.com/photo-1593032465171-8cdd6c8b0b4c?w=500&q=80" },
  { id:2,  name:"Cotton Straight Kurti",   price:799,  oldPrice:999,  cat:"kurti",   badge:"",     rating:4.2, img:"https://images.unsplash.com/photo-1610030469983-98e550d6193c?w=500&q=80" },
  { id:3,  name:"Designer Party Kurti",    price:1299, oldPrice:1599, cat:"kurti",   badge:"hot",  rating:4.8, img:"https://images.unsplash.com/photo-1583391733956-6c78276477e1?w=500&q=80" },
  { id:4,  name:"Anarkali Kurti",          price:1399, oldPrice:1799, cat:"kurti",   badge:"",     rating:4.4, img:"https://images.unsplash.com/photo-1520975922284-1c0d8c7a3b30?w=500&q=80" },
  { id:5,  name:"Traditional Silk Saree",  price:1799, oldPrice:2299, cat:"saree",   badge:"new",  rating:4.9, img:"https://images.unsplash.com/photo-1618354691373-d851c5c3a990?w=500&q=80" },
  { id:6,  name:"Soft Cotton Saree",       price:1199, oldPrice:1499, cat:"saree",   badge:"",     rating:4.1, img:"https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?w=500&q=80" },
  { id:7,  name:"Party Wear Saree",        price:1899, oldPrice:2399, cat:"saree",   badge:"sale", rating:4.7, img:"https://images.unsplash.com/photo-1609357605129-26f69add5d6e?w=500&q=80" },
  { id:8,  name:"Designer Wedding Saree",  price:2499, oldPrice:3199, cat:"saree",   badge:"hot",  rating:5.0, img:"https://images.unsplash.com/photo-1597225244660-1cd128c64284?w=500&q=80" },
  { id:9,  name:"Western Party Dress",     price:1599, oldPrice:1999, cat:"western", badge:"new",  rating:4.6, img:"https://images.unsplash.com/photo-1520975698519-59c4b9f5f28d?w=500&q=80" },
  { id:10, name:"Evening Gown",            price:2199, oldPrice:2799, cat:"western", badge:"",     rating:4.8, img:"https://images.unsplash.com/photo-1509631179647-0177331693ae?w=500&q=80" },
  { id:11, name:"Casual Summer Dress",     price:1299, oldPrice:1599, cat:"western", badge:"",     rating:4.3, img:"https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?w=500&q=80" },
  { id:12, name:"Elegant Black Dress",     price:1999, oldPrice:2499, cat:"western", badge:"hot",  rating:4.9, img:"https://images.unsplash.com/photo-1496747611176-843222e1e57c?w=500&q=80" },
  { id:13, name:"Floral Kurti Collection", price:950,  oldPrice:1199, cat:"kurti",   badge:"",     rating:4.4, img:"https://images.unsplash.com/photo-1596464716127-f2a82984de30?w=500&q=80" },
  { id:14, name:"Printed Kurti Style",     price:899,  oldPrice:1099, cat:"kurti",   badge:"new",  rating:4.2, img:"https://images.unsplash.com/photo-1551232864-3f0890e580d9?w=500&q=80" },
  { id:15, name:"Festival Kurti",          price:1399, oldPrice:1799, cat:"kurti",   badge:"sale", rating:4.7, img:"https://images.unsplash.com/photo-1581338834647-b0fb40704e21?w=500&q=80" },
  { id:16, name:"Banarasi Saree",          price:2599, oldPrice:3299, cat:"saree",   badge:"hot",  rating:5.0, img:"https://images.unsplash.com/photo-1610189021992-55e84d4a14c7?w=500&q=80" },
  { id:17, name:"Silk Designer Saree",     price:2299, oldPrice:2899, cat:"saree",   badge:"new",  rating:4.8, img:"https://images.unsplash.com/photo-1469334031218-e382a71b716b?w=500&q=80" },
  { id:18, name:"Wedding Saree",           price:2999, oldPrice:3799, cat:"saree",   badge:"",     rating:4.9, img:"https://images.unsplash.com/photo-1529139574466-a303027c1d8b?w=500&q=80" },
  { id:19, name:"Stylish Western Dress",   price:1799, oldPrice:2299, cat:"western", badge:"",     rating:4.5, img:"https://images.unsplash.com/photo-1524253482453-3fed8d2fe12b?w=500&q=80" },
  { id:20, name:"Elegant Fashion Dress",   price:1699, oldPrice:2199, cat:"western", badge:"sale", rating:4.6, img:"https://images.unsplash.com/photo-1539109136881-3be0616acf4b?w=500&q=80" },
  { id:21, name:"Modern Western Outfit",   price:1899, oldPrice:2399, cat:"western", badge:"new",  rating:4.7, img:"https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=500&q=80" },
  { id:22, name:"Daily Wear Kurti",        price:750,  oldPrice:999,  cat:"kurti",   badge:"sale", rating:4.1, img:"https://images.unsplash.com/photo-1487222477894-8943e31ef7b2?w=500&q=80" },
  { id:23, name:"Traditional Saree",       price:1799, oldPrice:2299, cat:"saree",   badge:"",     rating:4.5, img:"https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=500&q=80" },
  { id:24, name:"Red Party Dress",         price:1999, oldPrice:2499, cat:"western", badge:"hot",  rating:4.8, img:"https://images.unsplash.com/photo-1580489944761-15a19d654956?w=500&q=80" }
];

/* ── Helpers ────────────────────────────────────────────── */
function getProductById(id) {
  return PRODUCTS.find(p => p.id === parseInt(id));
}

function renderStars(rating) {
  const full = Math.floor(rating);
  const half = rating % 1 >= 0.5;
  let html = '';
  for (let i = 0; i < full; i++) html += '<i class="fas fa-star"></i>';
  if (half) html += '<i class="fas fa-star-half-alt"></i>';
  for (let i = full + (half ? 1 : 0); i < 5; i++) html += '<i class="far fa-star"></i>';
  return html;
}

function productCardHTML(p) {
  const badgeCls = p.badge === 'new' ? 'badge-new' : p.badge === 'sale' ? 'badge-sale' : 'badge-hot';
  const badgeHTML = p.badge ? `<div class="badge ${badgeCls}">${p.badge.toUpperCase()}</div>` : '';
  return `
  <div class="product-card" data-id="${p.id}">
    <div class="product-img-wrap">
      <div class="product-badges">${badgeHTML}</div>
      <div class="product-hover-actions">
        <button class="icon-btn wishlist-btn" data-id="${p.id}" title="Wishlist" onclick="toggleWishlist(this,${p.id})">
          <i class="far fa-heart"></i>
        </button>
        <button class="icon-btn" title="Quick View" onclick="openQuickView(${p.id})">
          <i class="far fa-eye"></i>
        </button>
        <button class="icon-btn" title="View Details" onclick="goToDetail(${p.id})">
          <i class="fas fa-expand-alt"></i>
        </button>
      </div>
      <img src="${p.img}" alt="${p.name}" loading="lazy">
      <button class="product-add-hover" onclick="addToCart(${p.id})">Add to Bag</button>
    </div>
    <div class="product-info">
      <div class="product-cat">${p.cat.charAt(0).toUpperCase()+p.cat.slice(1)}</div>
      <div class="product-name">${p.name}</div>
      <div class="product-price-row">
        <div>
          <span class="product-price">₹${p.price.toLocaleString()}</span>
          ${p.oldPrice ? `<span class="product-price-old">₹${p.oldPrice.toLocaleString()}</span>` : ''}
        </div>
        <div class="product-stars">${renderStars(p.rating)}</div>
      </div>
    </div>
  </div>`;
}

function goToDetail(id) {
  localStorage.setItem('selectedProduct', id);
  window.location.href = 'product.html';
}
