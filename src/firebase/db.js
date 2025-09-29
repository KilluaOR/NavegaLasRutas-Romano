import {
  getFirestore,
  collection,
  getDocs,
  query,
  where,
} from "firebase/firestore";
import { app } from "./config";

const db = getFirestore(app);

export const getProducts = async () => {
  const querySnapshot = await getDocs(collection(db, "products"));
  const products = [];

  querySnapshot.forEach((doc) => {
    products.push({ ...doc.data(), id: doc.id });
  });
  return products;
};
export const getCategories = async () => {
  const querySnapshot = await getDocs(collection(db, "categories"));
  const categories = [];

  querySnapshot.forEach((doc) => {
    categories.push({ ...doc.data(), id: doc.id });
  });
  return categories;
};

export const getProductsByCategory = async (category) => {
  const accesoriosQuery = query(
    collection(db, "products"),
    where("category", "==", category)
  );
  const products = [];
  const querySnapshot = await getDocs(accesoriosQuery);

  querySnapshot.forEach((doc) => {
    products.push({ ...doc.data(), id: doc.id });
  });
  return products;
};
// export const getProductById = async (id) => {
// try {
//   const res = await fetch(`${API_URL}/${id}`);
//   const data = await res.json();
//   console.log("getProductById →", data);
//   return data;
// } catch (err) {
//   console.error("Error en getProductById:", err);
//   return null;
// }
// };

//   try {
//     const res = await fetch(API_URL);
//     const data = await res.json();

//     console.log("getProducts response:", data);

//     return Array.isArray(data) ? data : [];
//   } catch (err) {
//     console.error("Error en getProducts:", err);
//     return [];
//   }

//   try {
//     const res = await fetch(`${API_URL}?category=${category}`);
//     const data = await res.json();

//     console.log("getProductsByCategory response:", data);

//     return Array.isArray(data) ? data : [];
//   } catch (err) {
//     console.error("Error en getProductsByCategory:", err);
//     return [];
//   }
