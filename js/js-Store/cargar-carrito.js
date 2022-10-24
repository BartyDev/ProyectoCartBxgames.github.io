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

  /* AGREGANDO SWEET ALERT(AGREGAR)  */
  item = productos.find((producto) => producto.id === id);
  const Toast = Swal.mixin({
    toast: true,
    position: 'top-end',
    showConfirmButton: false,
    timer: 1500,
    timerProgressBar: true,
    didOpen: (toast) => {
      toast.addEventListener('mouseenter', Swal.stopTimer)
      toast.addEventListener('mouseleave', Swal.resumeTimer)
    }
  })
  Toast.fire({
    icon: 'success',
    title: `Agregaste ${item.nombre} al carrito`,
    color: '#fff',
    background: '#0c1f4c'
  })
}


// AGREGANDO ALERT VALORACION
function clickHeart() {
  Swal.fire({
    padding: '8rem',
    color: '#fff',
    background: 'transparent center no-repeat url("../assets/valoracion.png")',
    backdrop: `
    rgba(30, 0, 123, 0.4)
    url("https://i.kym-cdn.com/photos/images/original/001/543/826/3e4.gif")
    center top
    no-repeat`,
    timer: 3000,
    showConfirmButton: false
  })
}


// CALCULAMOS LOS PRECIOS Y PINTAMOS EN CARRITO DE COMPRAS(FOOTER)
function dibujarfooterCart() {
  let detallepedido = "";
  let totalPrice = 0,
    totalItems = 0,
    totalIva = 0,
    precioFinal = 0;


  cart.forEach((item) => {
    totalPrice += item.precio * item.cantidadUnidades;
    totalIva = totalPrice * 0.19;
    precioFinal = totalPrice + totalIva;
    totalItems += item.cantidadUnidades;

    detallepedido = detallepedido + `
    Cant. ${item.cantidadUnidades} ~ ${item.nombre} ~ Precio : ${item.precio} CLP.&nbsp; || &nbsp;`
  });


  contenedorFooterCarrito.innerHTML = `
    <tr>
      <th></th>
      <th></th>
      <th></th>
    </tr>
    <tr>
      <th></th>
      <th></th>
      <th></th>
    </tr>
    <tr class="text-center">
      <th><span class="btn btn-danger badge badge-success d-inline" onclick="vaciarCart()"><i class="fa fa-trash"
            aria-hidden="true"></i></span></th>
      <th></th>
      <th></th>
    </tr>
    <tr class="text-center">
      <td></td>
      <td>TOTAL&nbsp;&nbsp;:</td>
      <td> ${totalPrice}&nbsp;&nbsp;&nbsp;CLP.</td>
      <td></td>
    </tr>
    <tr class="text-center">
      <td></td>
      <td>IVA(%)&nbsp;&nbsp;:</td>
      <td> ${totalIva}&nbsp;&nbsp;&nbsp;CLP.</td>
      <td></td>
    </tr>
    <tr class="text-center">
      <td></td>
      <td>PAGAR&nbsp;&nbsp;:</td>
      <td> ${precioFinal}&nbsp;&nbsp;&nbsp;CLP.</td>
      <td></td>
    </tr>`;

  detallepedido = detallepedido + ` 
  SUB-TOTAL : ${totalPrice} CLP.&nbsp; || &nbsp;
  IVA(%) : ${totalIva} CLP.&nbsp; || &nbsp;
  TOTAL : ${precioFinal} CLP.
`
  detallegmail.value = detallepedido;
  console.log(detallepedido);
  totalItemsInImg.innerHTML = totalItems;
}


// PINTAMOS LOS PRODUCTOS AGREGADOS EN CARRITO(ITEMS)
function dibujaritemsCart() {

  contenedorCarritoCompras.innerHTML = ""; // SOBREESCRIBIMOS EL CARRITO DE COMPRAS
  cart.forEach((item) => {
    contenedorCarritoCompras.innerHTML += `
      <tr>
      <td>
        <div class="d-flex flex-column align-items-center">
          <img src="${item.foto}" onclick="eliminarItemsCart(${item.id})" alt="${item.nombre}" width="200px"
            class="cssimg cssbody" />
          <div>
            <p class="pt-2">${item.nombre}</p>
          </div>
        </div>
      </td>
      <td>
        <p class="fw-normal">${item.precio} &nbsp;&nbsp;&nbsp;&nbsp;CLP.</p>
      </td>
      <td>
        <p>
          <span class="btn btn-danger badge badge-success rounded-pill d-inline"
            onclick="cambioCantidades('subtract', ${item.id})"><i class="fa fa-minus" aria-hidden="true"></i></span>

          <span class="badge badge-success rounded-pill d-inline">${item.cantidadUnidades}</span>

          <span class="btn btn-info badge badge-success rounded-pill d-inline"
            onclick="cambioCantidades('add', ${item.id})"><i class="fa fa-plus" aria-hidden="true"></i></span>
        </p>
      </td>
    </tr>`;
  })
}


//VACIAR CARRITO
function vaciarCart(id) {
  if (cart.some(() => cart.id === id)) {
    Swal.fire({
      title: 'Eliminar Productos?',
      text: "No podrá revertir esto!",
      icon: 'error',
      color: "#0c1f4c",
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Eliminar'
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          title: 'Carrito Vacío!',
          color: "#0c1f4c",
          icon: 'success',
          timer: 2000,
          showConfirmButton: false,
        })
        cart = [];
      }
      dibujaritemsCart();
      actualizarCart();
    })
  } else {
    Swal.fire({
      icon: 'warning',
      title: 'Oops...',
      text: 'Carrito Vacío',
      showConfirmButton: false,
      color: "#0c1f4c",
      timer: 3000,
      footer: '<a type="button" class="text-decoration-none text-danger" href="store.html">Deseas agregar un producto?</a>'
    })
  }
  dibujaritemsCart();
  actualizarCart();
}


// BORRAR PRODUCTOS DEL CARRITO(TAMBIEN SE BORRA DEL LOCALSTORAGE)
function eliminarItemsCart(id) {
  eliminate = cart.find((item) => item.id === id);
  actualizarCart();
  /* AGREGANDO SWEET ALERT(ELIMINAR)  */
  Toast = Swal.mixin({
    toast: true,
    position: 'top-end',
    showConfirmButton: false,
    timer: 1500,
    timerProgressBar: true,
    didOpen: (toast) => {
      toast.addEventListener('mouseenter', Swal.stopTimer)
      toast.addEventListener('mouseleave', Swal.resumeTimer)
    }
  })
  Toast.fire({
    icon: 'error',
    title: `Eliminaste ${eliminate.nombre} del carrito`,
    color: '#fff',
    background: '#0c1f4c'
  })
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


//LOAD DE MI PAGINA

window.addEventListener("load", function () {
  setTimeout(() => {
    this.console.log("entre a mi web");
    this.document.getElementById("loader").classList.toggle("loader2")
  }, 2000)
})