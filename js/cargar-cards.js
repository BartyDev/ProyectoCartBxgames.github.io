function crearCard(producto) {
    //botones
    let cajaBotones = document.createElement("div");
    cajaBotones.className = "overlay"

    let botonAgregar = document.createElement("button");
    botonAgregar.className = "btn btn-outline-dark btn-sm mb-5 mx-5 rounded-4";
    botonAgregar.innerHTML = `<i class="fas fa-cart-plus p-2 fs-5"></i>
    `
    let botonCalificar = document.createElement('button');
    botonCalificar.className = "btn btn-outline-danger btn-sm mx-5 rounded-4"
    botonCalificar.innerHTML = `<i class="far fa-heart p-2"></i>
    `
    cajaBotones.append(botonAgregar);
    cajaBotones.append(botonCalificar)

    //cardbody
    let cuerpoCarta = document.createElement("div");
    cuerpoCarta.className = "card-body descrip-card";
    cuerpoCarta.innerHTML = `
        <h5 class="card-title letra mb-3">${producto.id} - ${producto.nombre} </h5>
        <p class="card-subtitle mb-2 text-muted letra"> ${producto.precio} CLP.</p>
        <p class="card-text letra">Género : &nbsp;${producto.genero}</p>
        <p class="card-text letra">Unidades Disponibles : ${producto.stock}</p>
    `;
    let cajaImagen = document.createElement("div");
    cajaImagen.className = "img-container"

    let imagen = document.createElement("img");
    imagen.src = producto.foto;
    imagen.className = "card-img-top image";
    imagen.alt = producto.nombre;

    cajaImagen.append(imagen);
    cajaImagen.append(cajaBotones);

    //Card
    let carta = document.createElement("div");
    carta.className = "card mb-3 mx-auto px-auto";
    /* carta.style = "width: 20rem"; */
    carta.append(cajaImagen);
    carta.append(cuerpoCarta);

    //caja Card
    let cajaCarta = document.createElement("div");
    cajaCarta.className = "col-lg-4 col-md-6";
    cajaCarta.append(carta);

    //removiendo productos cart
    function removerProductoCarrito(elementoAEliminar) {
        const elementosAMantener = elementosCarrito.filter((elemento) => elementoAEliminar.producto.id != elemento.producto.id);
        elementosCarrito.length = 0;

        elementosAMantener.forEach((elemento) => elementosCarrito.push(elemento));
    }

    //eventos
    botonAgregar.onclick = () => {
        let elementoExistente =
            elementosCarrito.find((elem) => elem.producto.id == producto.id);

        if (elementoExistente) {
            elementoExistente.cantidad += 1;
        } else {
            let elementoCarrito = new ElementoCarrito(producto, 1);
            elementosCarrito.push(elementoCarrito);
        }
        dibujarCarrito();
    }
    return cajaCarta;
}