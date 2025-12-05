let cart = [];
let cartCount = 0;

function addToCart(productName, price) {
  cart.push({ name: productName, price: price });
  cartCount++;
  document.getElementById('cart-count').textContent = cartCount;
  alert(`${productName} added to cart! 🛒 Total items: ${cartCount}`);
  updateCartDisplay(); // Refresh modal if open
}

function toggleCart() {
  const modal = document.getElementById('cart-modal');
  if (cart.length === 0) {
    alert('Your cart is empty. Start shopping!');
    return;
  }
  modal.style.display = 'block';
  updateCartDisplay();
}

function updateCartDisplay() {
  const itemsDiv = document.getElementById('cart-items');
  const totalSpan = document.getElementById('cart-total');
  let html = '';
  let total = 0;
  cart.forEach((item, index) => {
    html += `<div class="cart-item">
      <span>${item.name}</span>
      <span>$${item.price}</span>
      <button onclick="removeItem(${index})">Remove</button>
    </div>`;
    total += item.price;
  });
  itemsDiv.innerHTML = cart.length > 0 ? html : '<p>Your cart is empty 😢</p>';
  totalSpan.textContent = total;
  document.getElementById('modal-cart-count').textContent = cart.length;
}

function removeItem(index) {
  const removedItem = cart[index].name;
  cart.splice(index, 1);
  cartCount--;
  document.getElementById('cart-count').textContent = cartCount;
  alert(`${removedItem} removed from cart.`);
  updateCartDisplay();
}

function closeCart() {
  document.getElementById('cart-modal').style.display = 'none';
}

function checkout() {
  if (cart.length === 0) {
    alert('Cart is empty!');
    return;
  }
  const total = cart.reduce((sum, item) => sum + item.price, 0);
  alert(`Checkout Successful! 🎉\nTotal Amount: $${total}\nThank you for shopping at TechMart!`);
  cart = [];
  cartCount = 0;
  document.getElementById('cart-count').textContent = '0';
  closeCart();
  updateCartDisplay();
}

// Close modal on outside click
window.onclick = function(event) {
  const modal = document.getElementById('cart-modal');
  if (event.target === modal) {
    modal.style.display = 'none';
  }
}

// Initialize on page load
document.addEventListener('DOMContentLoaded', function() {
  updateCartDisplay();
});
