//DIBUJANDO CARDS EN EL HTML STORE
function dibujarCards() {
  productos.forEach((producto) => {
    contenedorProductos.innerHTML += `
      <div class="col col-lg-4 col-md-6 pb-5"  data-aos="zoom-in" data-aos-duration="2500">
      <div class="card">
        <span
          class="position-absolute text-dark bg-warning top-0 start-50 translate-middle badge rounded-pill indxmore">${producto.descuentos}</span>

        <span
          class="position-absolute text-white bottom-0 start-50 translate-middle badge rounded-pill bg-primary indxmore">${producto.oferta}</span>

        <div class="efecto-hidden-card cssimg cssbody position-relative">
          <a type="button" data-bs-toggle="modal" data-bs-target="#${producto.selector}">
            <img class="card-img-top w-100" src="${producto.foto}">
          </a>
        </div>
      </div>
    </div>
    <!-- Modal -->
    <div class="modal px-0" id="${producto.selector}" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1"
      aria-labelledby="staticBackdropLabel" aria-hidden="true">
      <div class="modal-dialog">
        <div class="modal-content bg-body">
          <div class="modal-header">
            <h1 class="modal-title fs-5" id="staticBackdropLabel">${producto.nombre}</h1>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="card">

            <video class="w-100" src="${producto.video}" autoplay loop muted></video>

            <div class="card-body">
              <div class="text-center">
                <p class="card-text mb-0"><small class="text-muted">${producto.genero}</small></p>
                <p class="card-text"><small class="text-muted text-center">STOCK : ${producto.stock}</small></p>
              </div>
              <div class="d-flex justify-content-around align-items-center py-4">
                <h5 class="card-title text-white">${producto.precio} &nbsp;CLP.</h5>
                <button type="button" onclick="addToCart(${producto.id})"
                  class="btn btn-outline-success  rounded-circle"><i class="fas fa-cart-plus text-white"></i></button>
                <button type="button" onclick="clickHeart(${producto.id})"
                  class="btn btn-outline-danger rounded-circle"><i class="far fa-heart text-white"></i></button>
              </div>
              <p class="card-text text-muted">${producto.contenido}</p>
              <div class="text-end pt-3">
                <button type="button" class="btn btn-danger" data-bs-dismiss="modal">Cerrar</button>
                <a type="button" class="btn btn-primary ms-2 text-white" href="pagos.html">Procesar Pedido</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>`
  });
}


//DIBUJANDO CARDSPROMO EN EL HTML INDEX

function dibujarPromos() {
  promos.forEach((productor) => {
    contenedorPromos.innerHTML += `
      <div class="col-lg-4 col-md-6 pb-5" data-aos="zoom-in-up" data-aos-duration="2500">
      <div class="card">
        <span
          class="position-absolute text-dark bg-warning top-0 start-50 translate-middle badge rounded-pill bg-secondary indxmore">${productor.promo}</span>
        <div class="efecto-hidden-card cssimg cssbody position-relative">
          <a href="store.html">
            <img class="card-img-top w-100 bg-personal" src="${productor.foto}">
          </a>
        </div>
        <span class="position-absolute bottom-50 start-50 translate-middle indxminus">
          <a type="text" href="store.html" class="text-success">ver mas...</a>
        </span>
        </a>
        <div class="bg-transparent text-white descrip-card">
          <h5 class="text-center pt-1 pb-2">${productor.nombre}</h5>
          <div class="container">
            <div class="text-center">
              <h6>${productor.genero}</h6>
            </div>
          </div>
        </div>
      </div>
    </div>`
  });
}