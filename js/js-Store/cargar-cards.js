//DIBUJANDO CARDS EN EL HTML
function dibujarCards() {
    productos.forEach((producto) => {
        contenedorProductos.innerHTML += `
            <div class="col-lg-4 col-md-6">
                <div class="card mb-3 mx-auto px-4 pb-4 formatBox">
                    <div class="img-container">
                        <img class="image formatCircleUp w-100" src="${producto.foto}" alt="${producto.nombre}">
                        <div class="overlay">
                        <button onclick="addToCart(${producto.id})" class="btn btn-outline-dark btn-sm mb-5 mx-5 rounded-4"><i class="fas fa-cart-plus p-2 fs-5" ></i></button>
                        <button class="btn btn-outline-danger btn-sm mx-5 rounded-4"><i class="far fa-heart p-2"></i></button>
                    </div>
                </div>
                <div class="card-body descrip-card bg-black opacity-75 formatCircleDown">
                        <h5 class="card-title letra mb-3">${producto.id} - ${producto.nombre} </h5>
                        <p class="card-subtitle mb-2 text-muted letra"> ${producto.precio} CLP.</p>
                        <p class="card-text letra">Género : &nbsp;${producto.genero}</p>
                        <p class="card-text letra">Unidades Disponibles : ${producto.stock}</p>
                </div>
            </div>
        `;
    });
}