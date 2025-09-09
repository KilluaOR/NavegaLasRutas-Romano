// Sample product data for the tobacco shop
export const products = [
  {
    id: 1,
    name: "Tabaco Premium Virginia",
    category: "tabaco-armar",
    price: 2500,
    description:
      "Tabaco de alta calidad para armar cigarrillos. Sabor suave y aroma característico.",
    image: "https://via.placeholder.com/300x200?text=Tabaco+Virginia",
    stock: 15,
  },
  {
    id: 2,
    name: "Tabaco Burley Clásico",
    category: "tabaco-armar",
    price: 2200,
    description:
      "Tabaco Burley con sabor intenso y cuerpo completo. Ideal para fumadores experimentados.",
    image: "https://via.placeholder.com/300x200?text=Tabaco+Burley",
    stock: 8,
  },
  {
    id: 3,
    name: "Tabaco English Blend",
    category: "tabaco-pipa",
    price: 3200,
    description:
      "Mezcla inglesa tradicional para pipa. Combina diferentes variedades para un sabor único.",
    image: "https://via.placeholder.com/300x200?text=Tabaco+English",
    stock: 12,
  },
  {
    id: 4,
    name: "Tabaco Aromático Cherry",
    category: "tabaco-pipa",
    price: 2800,
    description:
      "Tabaco aromatizado con cereza. Perfecto para quienes buscan un sabor dulce y suave.",
    image: "https://via.placeholder.com/300x200?text=Tabaco+Cherry",
    stock: 6,
  },
  {
    id: 5,
    name: "Papel de Armar OCB",
    category: "accesorios",
    price: 450,
    description:
      "Papel de armar OCB Premium. Quema lenta y uniforme, sin sabor.",
    image: "https://via.placeholder.com/300x200?text=Papel+OCB",
    stock: 25,
  },
  {
    id: 6,
    name: "Filtros Activados",
    category: "accesorios",
    price: 380,
    description:
      "Filtros de carbón activado para reducir alquitrán y nicotina.",
    image: "https://via.placeholder.com/300x200?text=Filtros+Activados",
    stock: 30,
  },
  {
    id: 7,
    name: "Pipa de Madera Clásica",
    category: "accesorios",
    price: 8500,
    description:
      "Pipa de madera de briar con acabado natural. Diseño clásico y cómodo.",
    image: "https://via.placeholder.com/300x200?text=Pipa+Madera",
    stock: 4,
  },
  {
    id: 8,
    name: "Encendedor de Viento",
    category: "accesorios",
    price: 1200,
    description:
      "Encendedor resistente al viento con llama ajustable. Ideal para uso exterior.",
    image: "https://via.placeholder.com/300x200?text=Encendedor+Viento",
    stock: 18,
  },
];

// Function to simulate async data fetching with delay
export const getProducts = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(products);
    }, 2000); // 2 second delay
  });
};

// Function to get a single product by ID
export const getProductById = (id) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const product = products.find((p) => p.id === parseInt(id));
      if (product) {
        resolve(product);
      } else {
        reject(new Error("Producto no encontrado"));
      }
    }, 1500); // 1.5 second delay
  });
};

// Function to get products by category
export const getProductsByCategory = (category) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const filteredProducts = products.filter((p) => p.category === category);
      resolve(filteredProducts);
    }, 1000); // 1 second delay
  });
};
