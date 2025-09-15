import { useCart } from "./CartContext";

function CartWidget() {
  const { cart } = useCart();

  const itemCount = cart.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <div className="nav-cart relative">
      <svg
        width="20"
        height="20"
        viewBox="0 0 12 12"
        fill="white"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M11.5,8L12,3L2.18,2.09L1.95,0H0v1h1.05L1.95,9.1
                 C1.39,9.33,1,9.87,1,10.5C1,11.33,1.67,12,2.5,12S4,11.33,4,10.5
                 c0-0.18-0.04-0.34-0.09-0.5h4.18C8.04,10.16,8,10.32,8,10.5
                 C8,11.33,8.67,12,9.5,12s1.5-0.67,1.5-1.5S10.33,9,9.5,9H2.95l-0.11-1H11.5z"
        />
      </svg>
      {itemCount > 0 && (
        <span className="absolute -top-2 -right-2 bg-red-600 text-white text-xs rounded-full px-2">
          {itemCount}
        </span>
      )}
    </div>
  );
}

export default CartWidget;
