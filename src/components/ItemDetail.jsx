import { Link } from "react-router-dom";
import ItemCount from "./ItemCount";

function ItemDetail({ products }) {
  if (!products) {
    return (
      <div className="item-detail-error">
        <h2>Producto no encontrado</h2>
        <Link to="/" className="btn btn-primary">
          Volver al catálogo
        </Link>
      </div>
    );
  }

  return (
    <div className="item-detail">
      <div className="item-detail-image">
        <img src={products?.image} alt={products?.name} />
      </div>
      <div className="item-detail-content">
        <h1 className="item-detail-title">{products?.name}</h1>
        <p className="item-detail-price">${products?.price}</p>
        <p className="item-detail-description">{products?.description}</p>
        <div className="item-detail-info">
          <p>
            <strong>Stock disponible:</strong> {products?.stock} unidades
          </p>
          <p>
            <strong>Categoría:</strong> {products?.category}
          </p>
        </div>
        <div className="item-detail-actions">
          <ItemCount products={products} />
        </div>
      </div>
    </div>
  );
}

export default ItemDetail;
