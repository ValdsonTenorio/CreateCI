const productModel = require('../src/models/productModel');

describe('Product Model', () => {
  let createdProduct;

  afterAll(async () => {
    await productModel.pool.query('DELETE FROM products WHERE id = $1', [createdProduct.id]);
    await productModel.pool.end();
  });

  test('Deve criar um produto', async () => {
    const product = {
      name: 'Produto Teste',
      price: 99.99,
      quantity: 10
    };
    createdProduct = await productModel.createProduct(product);

    expect(createdProduct).toHaveProperty('id');
    expect(createdProduct.name).toBe(product.name);
  });

  test('Deve retornar lista de produtos', async () => {
    const products = await productModel.getAllProducts();
    expect(Array.isArray(products)).toBe(true);
    expect(products.length).toBeGreaterThan(0);
  });
});
