const products = [
  { id: 1, name: "Áo thun nam", price: 150000 },
  { id: 2, name: "Quần jean", price: 350000 },
  { id: 3, name: "Giày sneaker", price: 800000 },
  { id: 4, name: "Nón lưỡi trai", price: 120000 },
];

let cart = [];

const productTableBody = document.querySelector("#product_table tbody");
const cartData = document.getElementById("cart_data");

function renderProducts() {
  productTableBody.innerHTML = "";

  products.forEach((product, index) => {
    const tr = document.createElement("tr");

    tr.innerHTML = `
      <td>${index + 1}</td>
      <td>${product.name}</td>
      <td>${product.price.toLocaleString()}đ</td>
      <td>
        <div class="add-to-cart-container">
          <input type="number" min="1" value="1" class="quantity-input" id="qty-${
            product.id
          }">
          <button class="add-to-cart" onclick="addToCart(${product.id})">
            Thêm
          </button>
        </div>
      </td>
    `;

    productTableBody.appendChild(tr);
  });
}

function addToCart(productId) {
  const product = products.find((p) => p.id === productId);
  const qtyInput = document.getElementById(`qty-${productId}`);
  const quantity = parseInt(qtyInput.value);

  if (quantity <= 0) return;

  const cartItem = cart.find((item) => item.id === productId);

  if (cartItem) {
    cartItem.quantity += quantity;
  } else {
    cart.push({
      ...product,
      quantity,
    });
  }

  renderCart();
}

function renderCart() {
  if (cart.length === 0) {
    cartData.innerHTML = "";
    return;
  }

  let total = 0;

  let html = `
    <table class="cart-table">
      <thead>
        <tr>
          <th>STT</th>
          <th>Sản phẩm</th>
          <th>Giá</th>
          <th>Số lượng</th>
          <th>Thành tiền</th>
          <th>Xóa</th>
        </tr>
      </thead>
      <tbody>
  `;

  cart.forEach((item, index) => {
    const itemTotal = item.price * item.quantity;
    total += itemTotal;

    html += `
      <tr>
        <td>${index + 1}</td>
        <td>${item.name}</td>
        <td>${item.price.toLocaleString()}đ</td>
        <td>
          <button class="quantity-btn" onclick="changeQty(${
            item.id
          }, -1)">-</button>
          <span class="quantity-display">${item.quantity}</span>
          <button class="quantity-btn" onclick="changeQty(${
            item.id
          }, 1)">+</button>
        </td>
        <td>${itemTotal.toLocaleString()}đ</td>
        <td>
          <button class="remove-from-cart" onclick="removeItem(${item.id})">
            Xóa
          </button>
        </td>
      </tr>
    `;
  });

  html += `
      </tbody>
    </table>
    <div class="cart-total">
      Tổng tiền: ${total.toLocaleString()}đ
    </div>
  `;

  cartData.innerHTML = html;
}

function changeQty(productId, delta) {
  const item = cart.find((i) => i.id === productId);
  if (!item) return;

  item.quantity += delta;

  if (item.quantity <= 0) {
    cart = cart.filter((i) => i.id !== productId);
  }

  renderCart();
}

function removeItem(productId) {
  cart = cart.filter((item) => item.id !== productId);
  renderCart();
}

renderProducts();
