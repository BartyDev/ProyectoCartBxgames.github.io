// array de CARRITO_parseamos los productos si existe en el local,caso contrario n os devolvera un array vacío.
let cart = JSON.parse(localStorage.getItem("CARRITO")) || [];



// REFRESCAR CARRITO
function actualizarCart() {
  dibujaritemsCart();
  dibujarfooterCart();

  // GUARDANDO CARRITO EN LOCALSTORAGE
  localStorage.setItem("CARRITO", JSON.stringify(cart));
}
