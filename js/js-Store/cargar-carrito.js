// AGREGANDO PRODUCTOS AL CARRITO
function addToCart(id) {
  // CHECK - SI PRODUCTOS YA EXISTEN EN EL CARRITO
  if (cart.some((item) => item.id === id)) {
    cambioCantidades("add", id);
  } else {
    const item = productos.find((producto) => producto.id === id);

    cart.push({
      ...item,
      cantidadUnidades: 1,
    });
    actualizarCart();
  }
}


// CALCULAMOS LOS PRECIOS Y PINTAMOS EN CARRITO DE COMPRAS(FOOTER)
function dibujarfooterCart() {
  let totalPrice = 0,
    totalItems = 0;

  cart.forEach((item) => {
    totalPrice += item.precio * item.cantidadUnidades;
    totalItems += item.cantidadUnidades;
  });
  contenedorFooterCarrito.innerHTML = `<th class="letra" scope="row" colspan="6">En Carrito (${totalItems} items) : &nbsp;${totalPrice} CLP.</th>`;
totalItemsInImg.innerHTML = totalItems;
}


// PINTAMOS LOS PRODUCTOS AGREGADOS EN CARRITO(ITEMS)
function dibujaritemsCart() {
  contenedorCarritoCompras.innerHTML = ""; // SOBREESCRIBIMOS EL CARRITO DE COMPRAS
  cart.forEach((item) => {
    contenedorCarritoCompras.innerHTML += `
              <tr>
                <th class="clickaction" scope="col" onclick="eliminarItemsCart(${item.id})">
                <img src="${item.foto}" class="img-cart"  alt="${item.nombre}">
                <h4 class="letra fs-6 pt-1">${item.nombre}</h4>
                </th>


                <td class="letra text-center pt-5">${item.precio} CLP.</td>

                <td class="d-flex justify-content-center align-items-center pt-5">

                <div class="letra bton1 fw-bold  bg-danger  d-flex " scope="col" onclick="cambioCantidades('subtract', ${item.id})">-</div>

              
                <div class="letra px-4" scope="col">${item.cantidadUnidades}</div>

                <div class="letra bton2 fw-bold bg-info " scope="col" onclick="cambioCantidades('add', ${item.id})">+</div>
                </td>
              </tr>
      `;
  });
}


// BORRAR PRODUCTOS DEL CARRITO(TAMBIEN SE BORRA DEL LOCALSTORAGE)
function eliminarItemsCart(id) {
  cart = cart.filter((item) => item.id !== id);
  actualizarCart();
}


// CAMBIAR CANTIDAD DE PRODUCTOS (+,-)
function cambioCantidades(action, id) {
  cart = cart.map((item) => {
    let cantidadUnidades = item.cantidadUnidades;

    if (item.id === id) {
      if (action === "subtract" && cantidadUnidades > 1) {
        cantidadUnidades--;
      } else if (action === "add" && cantidadUnidades < item.stock) {
        cantidadUnidades++;
      }
    }
    return {
      ...item,
      cantidadUnidades,
    };
  });
  actualizarCart();
}
