import { Link } from "react-router-dom";

function ItemDetail({ product }) {
  if (!product) {
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
        <img src={product.image} alt={product.name} />
      </div>
      <div className="item-detail-content">
        <h1 className="item-detail-title">{product.name}</h1>
        <p className="item-detail-price">${product.price}</p>
        <p className="item-detail-description">{product.description}</p>
        <div className="item-detail-info">
          <p>
            <strong>Stock disponible:</strong> {product.stock} unidades
          </p>
          <p>
            <strong>Categoría:</strong> {product.category}
          </p>
        </div>
        <div className="item-detail-actions">
          <button className="btn btn-primary">Agregar al Carrito</button>
          <Link to="/" className="btn btn-secondary">
            Volver al catálogo
          </Link>
        </div>
      </div>
    </div>
  );
}

export default ItemDetail;
