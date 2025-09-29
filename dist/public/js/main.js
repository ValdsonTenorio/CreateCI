document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('productForm');
  const list = document.getElementById('productList');

  const fetchProducts = async () => {
    const res = await fetch('/api/products');
    const products = await res.json();
    list.innerHTML = '';
    products.forEach(prod => {
      const li = document.createElement('li');
      li.textContent = `${prod.name} - R$${prod.price} - ${prod.quantity} unidades`;
      list.appendChild(li);
    });
  };

  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    const name = form.name.value;
    const price = form.price.value;
    const quantity = form.quantity.value;

    await fetch('/api/products', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name, price, quantity }),
    });

    form.reset();
    fetchProducts();
  });

  fetchProducts();
});
