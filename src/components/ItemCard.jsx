import { useNavigate } from "react-router-dom";

function ItemCard({ products }) {
  const navigate = useNavigate();
  return (
    <div className="item-card">
      <div className="item-image">
        <img src={products.image} alt={products.name} />
      </div>
      <div className="item-content">
        <h3 className="item-title">{products.name}</h3>
        <p className="item-price">${products.price}</p>
        <p className="item-description">{products.description}</p>
        <div className="item-actions">
          <button
            onClick={() => navigate(`/items/${products.id}`)}
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
