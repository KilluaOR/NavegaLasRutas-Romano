import {
  getFirestore,
  collection,
  getDocs,
  query,
  where,
  doc,
  getDoc,
  addDoc,
} from "firebase/firestore";
import { app } from "./config";
import toast from "react-hot-toast";

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

export const getProductById = async (id) => {
  const docRef = doc(db, "products", id);
  const docSnap = await getDoc(docRef);

  if (docSnap.exists()) {
    return { ...docSnap.data(), id: docSnap.id };
  }
  throw new Error("Producto no encontrado");
};

export const createOrder = async (order) => {
  try {
    const docRef = await addDoc(collection(db, "orders"), order);
    toast.succes("Gracias por tu compra, el ID de tu orden es: ${docRef.id}");
    return true;
  } catch (error) {
    toast.error("Ocurrió un error: ${error.code}");
    return false;
  }
};
