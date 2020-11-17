import { writable } from 'svelte/store';

const products = writable([
	{
    id: 14892736,
    title: 'Smart Tv',
    subtitle: 'Sony X800H 55 Inch TV',
    description:
      '4K Ultra HD Smart LED TV with HDR and Alexa Compatibility',
    },
  {
    id: 8749201,
    title: 'Headphone',
    subtitle: "COWIN E7",
    description: 'Active Noise Cancelling Headphones Bluetooth Headphones with Microphone Deep Bass Wireless Headphones Over Ear.',
	}
]);

const customProductsStore = {
  subscribe: products.subscribe,
  addProduct: productData => {
    const newProduct = {
      ...productData,
      id: Math.random(),
    };
    products.update(items => {
      return [...items, newProduct];
    });
  },
  updateProduct: (id, productData) => {
    products.update(items => {
      const productIndex = items.findIndex(i => i.id === id);
      const updatedProduct = { ...items[productIndex], ...productData };
      const updatedProducts = [...items];
      updatedProducts[productIndex] = updatedProduct;
      return updatedProducts;
    });
  },
  removeProduct: (id) => {
      products.update(items => {
        return items.filter(i => i.id !== id);
      });
  },
};

export default customProductsStore;
