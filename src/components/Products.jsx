// const API_URL = "https://68a3b19bc123272fb9b039fa.mockapi.io/api/tab1/products";

// export const getProducts = async () => {
//   try {
//     const res = await fetch(API_URL);
//     const data = await res.json();

//     console.log("getProducts response:", data);

//     return Array.isArray(data) ? data : [];
//   } catch (err) {
//     console.error("Error en getProducts:", err);
//     return [];
//   }
// };

// export const getProductsByCategory = async (category) => {
//   try {
//     const res = await fetch(`${API_URL}?category=${category}`);
//     const data = await res.json();

//     console.log("getProductsByCategory response:", data);

//     return Array.isArray(data) ? data : [];
//   } catch (err) {
//     console.error("Error en getProductsByCategory:", err);
//     return [];
//   }
// };
// export const getProductById = async (id) => {
//   try {
//     const res = await fetch(`${API_URL}/${id}`);
//     const data = await res.json();

//     console.log("getProductById →", data);
//     return data;
//   } catch (err) {
//     console.error("Error en getProductById:", err);
//     return null;
//   }
// };
