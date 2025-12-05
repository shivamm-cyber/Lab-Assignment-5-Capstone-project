let cart = [];

function addToCart(product, price) {
  cart.push({ product, price });
  document.getElementById('cart-count').textContent = cart.length;
  alert(`${product} added to cart!`);
}

function toggleCart() {
  const modal = document.getElementById('cart-modal');
  modal.style.display = modal.style.display === 'block' ? 'none' : 'block';
}

function closeCart() {
  document.getElementById('cart-modal').style.display = 'none';
}

function subscribe(event) {
  event.preventDefault();
  const email = document.getElementById('email').value;
  alert(`Subscribed with ${email}! Welcome aboard.`);
  document.getElementById('email').value = '';
}

function checkout() {
  if (cart.length === 0) {
    alert('Your cart is empty!');
    return;
  }
  const total = cart.reduce((sum, item) => sum + item.price, 0);
  alert(`Checkout successful! Total: $${total}`);
  cart = [];
  document.getElementById('cart-count').textContent = '0';
  closeCart();
}

// Cart display in modal
function updateCartDisplay() {
  const itemsDiv = document.getElementById('cart-items');
  const totalSpan = document.getElementById('cart-total');
  let html = '';
  let total = 0;
  cart.forEach((item, index) => {
    html += `<div class="cart-item">
      <span>${item.product}</span>
      <span>$${item.price}</span>
      <button onclick="removeFromCart(${index})">Remove</button>
    </div>`;
    total += item.price;
  });
  itemsDiv.innerHTML = html;
  totalSpan.textContent = total;
}

function removeFromCart(index) {
  cart.splice(index, 1);
  document.getElementById('cart-count').textContent = cart.length;
  updateCartDisplay();
}

// Call on load
document.addEventListener('DOMContentLoaded', updateCartDisplay);
