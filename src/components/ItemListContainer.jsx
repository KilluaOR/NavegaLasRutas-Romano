import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getProducts /*, getProductsByCategory*/ } from "../firebase/db";
import ItemList from "./ItemList";

function ItemListContainer({ greeting = "Bienvenido a Tabaquería Rodriguez" }) {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { category } = useParams();

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setLoading(true);
        setError(null);

        let productsData;
        if (category) {
          productsData = await getProductsByCategory(category);
        } else {
          productsData = await getProducts();
        }

        setProducts(productsData);
      } catch (err) {
        setError(err.message);
        setProducts([]);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, [category]);

  if (loading) {
    return (
      <div className="loading-container">
        <div className="loading-spinner"></div>
        <p>Cargando productos...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="error-container">
        <h2>Error</h2>
        <p>{error}</p>
      </div>
    );
  }

  return (
    <div className="item-list-container">
      <h2 className="greeting">{greeting}</h2>
      <ItemList products={products} />
    </div>
  );
}

export default ItemListContainer;
