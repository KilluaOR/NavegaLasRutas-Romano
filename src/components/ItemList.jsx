import ItemCard from "./ItemCard";

function ItemList({ products }) {
  if (!products || products.length === 0) {
    return (
      <div className="no-products">
        <p>No se encontraron productos.</p>
      </div>
    );
  }

  return (
    <div className="item-list">
      {products.map((product) => (
        <ItemCard key={product.id} product={product} />
      ))}
    </div>
  );
}

export default ItemList;
