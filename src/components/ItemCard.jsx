import { useNavigate } from "react-router-dom";

function ItemCard({ product }) {
  const navigate = useNavigate();
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
          <button
            onClick={() => navigate(`/item/${product.id}`)}
            className="btn btn-primary"
          >
            Ver Detalles
          </button>
        </div>
      </div>
    </div>
  );
}

export default ItemCard;
