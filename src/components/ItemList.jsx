import ItemCard from "./ItemCard";

function ItemList({ product }) {
  if (!product || product.length === 0) {
    return (
      <div className="no-products">
        <p>No se encontraron productos.</p>
      </div>
    );
  }

  return (
    <div className="item-list">
      {product.map((product) => (
        <ItemCard key={product.id} product={product} />
      ))}
    </div>
  );
}

export default ItemList;
