import { Link } from "react-router-dom";

function ItemCard({ product }) {
  return (
    <div className="item-card">
      <div className="item-image">
        <img src={product.image} alt={product.name} />
      </div>
      <div className="item-content">
        <h3 className="item-title">{product.name}</h3>
        <p className="item-price">${product.price}</p>
        <p className="item-description">{product.description}</p>
        <div className="item-actions">
          <Link to={`/item/${product.id}`} className="btn btn-primary">
            Ver Detalles
          </Link>
        </div>
      </div>
    </div>
  );
}

export default ItemCard;
