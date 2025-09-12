// products.js
const API_URL = "https://68a3b19bc123272fb9b039fa.mockapi.io/api/tab1";

// Trae todos los productos
export const getProducts = async () => {
  try {
    const res = await fetch(API_URL);
    const data = await res.json();

    // Asegura que siempre sea array
    return Array.isArray(data) ? data : [];
  } catch (err) {
    console.error("Error en getProducts:", err);
    return [];
  }
};

// Trae productos filtrados por categoría
export const getProductsByCategory = async (category) => {
  try {
    const res = await fetch(`${API_URL}?category=${category}`);
    const data = await res.json();

    // Asegura que siempre sea array
    return Array.isArray(data) ? data : [];
  } catch (err) {
    console.error("Error en getProductsByCategory:", err);
    return [];
  }
};

// Sample product data for the tobacco shop
// export const products = async () => {
//   try {
//     const response = await fetch(
//       "https://68a3b19bc123272fb9b039fa.mockapi.io/api/tab1/products"
//     );
//     const data = await response.json();
//     return data;
//   } catch (error) {
//     console.error("Error al obtener los datos:", error);
//     return [];
//   }
// };
// window.products = products;

// // Function to simulate async data fetching with delay
// export const getProducts = () => {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       resolve(products);
//     }, 2000); // 2 second delay
//   });
// };

// // Function to get a single product by ID
// export const getProductById = (id) => {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       const product = products.find((p) => p.id === parseInt(id));
//       if (product) {
//         resolve(product);
//       } else {
//         reject(new Error("Producto no encontrado"));
//       }
//     }, 1500); // 1.5 second delay
//   });
// };

// // Function to get products by category
// export const getProductsByCategory = (category) => {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       const filteredProducts = products.filter((p) => p.category === category);
//       resolve(filteredProducts);
//     }, 1000); // 1 second delay
//   });
// };
