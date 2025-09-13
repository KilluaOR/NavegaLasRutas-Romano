document.addEventListener("DOMContentLoaded", () => {
  const cart = JSON.parse(sessionStorage.getItem("cart")) || [];
  const checkoutItems = document.querySelector(".checkout__items");
  const subtotalElement = document.getElementById("subtotal");
  const totalElement = document.getElementById("total");
  const thankYouElement = document.getElementById("thank-you");
  const checkoutButton = document.querySelector(".checkout__button");
  const deleteButton = document.querySelector(".delete__button");

  const parsePrice = (priceString) => {
    return parseInt(priceString.replace(/[^0-9]/g, ""));
  };

  const displayCartItems = () => {
    if (cart.length === 0) {
      checkoutItems.innerHTML =
        '<p class="text-white text-center py-4">Tu carrito está vacío</p>';
      return;
    }

    const itemsHTML = cart
      .map(
        (item) => `
        <div class="flex items-center justify-between p-4 border-b border-gray-700">
          <div class="flex items-center space-x-4">
            <img src="${item.imagen}" alt="${
          item.nombre
        }" class="w-16 h-20 object-cover rounded">
            <div>
              <h3 class="text-white font-medium">${item.nombre}</h3>
              <p class="text-gray-400 text-sm">Cantidad: ${item.quantity}</p>
            </div>
          </div>
          <div class="text-right">
            <p class="text-white">${item.precio}</p>
            <p class="text-gray-400 text-sm">Total: $${
              parsePrice(item.precio) * item.quantity
            }</p>
          </div>
        </div>
      `
      )
      .join("");

    checkoutItems.innerHTML = itemsHTML;
  };

  const calculateTotals = () => {
    const subtotal = cart.reduce((total, item) => {
      return total + parsePrice(item.precio) * item.quantity;
    }, 0);

    const shipping = 0;
    const total = subtotal + shipping;

    subtotalElement.textContent = `$${subtotal.toLocaleString()}`;
    totalElement.textContent = `$${total.toLocaleString()}`;
  };

  const deleteCart = () => {
    sessionStorage.removeItem("cart");
    checkoutItems.innerHTML =
      '<p class="text-white text-center py-4">Tu carrito está vacío</p>';
    subtotalElement.textContent = "$0";
    totalElement.textContent = "$0";
    checkoutButton.style.display = "none";
    deleteButton.style.display = "none";
  };

  const handleCheckout = () => {
    if (cart.length === 0) {
      return;
    }

    thankYouElement.classList.remove("hidden");

    checkoutButton.style.display = "none";
    deleteButton.style.display = "none";

    sessionStorage.removeItem("cart");

    checkoutItems.innerHTML = "";
    subtotalElement.textContent = "$0";
    totalElement.textContent = "$0";
  };

  checkoutButton.addEventListener("click", handleCheckout);
  deleteButton.addEventListener("click", deleteCart);

  displayCartItems();
  calculateTotals();
});
function CartWidget() {
  return (
    <div className="nav-cart">
      <svg
        width="20"
        height="20"
        viewBox="0 0 12 12"
        fill="white"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
        <g
          id="SVGRepo_tracerCarrier"
          strokeLinecap="round"
          strokeLinejoin="round"
        ></g>
        <g id="SVGRepo_iconCarrier">
          <path
            d="M11.5,8L12,3L2.1803589,2.0935669L1.9477539,0H0v1h1.0522461L1.953064,9.1067505 C1.3963623,9.3261108,1,9.866272,1,10.5C1,11.3271484,1.6728516,12,2.5,12S4,11.3271484,4,10.5 c0-0.1761475-0.0360718-0.3428345-0.0921021-0.5h4.1842041C8.0360718,10.1571655,8,10.3238525,8,10.5 C8,11.3271484,8.6728516,12,9.5,12s1.5-0.6728516,1.5-1.5S10.3271484,9,9.5,9H2.9476318l-0.111145-1H11.5z M2.5,11 C2.2241211,11,2,10.7758789,2,10.5c0-0.2634277,0.2062378-0.473938,0.4649048-0.4929199l0.0452881-0.0050049 C2.7811279,10.0078125,3,10.2277222,3,10.5C3,10.7758789,2.7758789,11,2.5,11z M10,10.5c0,0.2758789-0.2241211,0.5-0.5,0.5 S9,10.7758789,9,10.5S9.2241211,10,9.5,10S10,10.2241211,10,10.5z"
            fill="white"
          ></path>
        </g>
      </svg>
    </div>
  );
}
export default CartWidget;
