//funciones-cart
function cargarCarrito() {}

function dibujarCarrito() {
    contenedorCarritoCompras.innerHTML = "";
    elementosCarrito.forEach(
        (elemento) => {
            let renglonesCarrito = document.createElement("tr");

            renglonesCarrito.innerHTML = `
                <td>${elemento.producto.id}</td>
                <td>${elemento.producto.nombre}</td>
                <td><input id="cantidad-producto-${elemento.producto.id}" type="number" value="${elemento.cantidad}" min="1" max="1000" step="1" style="width: 50px;"/></td>
                <td>${elemento.producto.precio} CLP.</td>
                <td>${(elemento.producto.precio*elemento.cantidad)} CLP.</td>
                <td><button id="eliminar-producto-${elemento.producto.id}" type="button" class="btn btn-danger"><i class="bi bi-trash-fill"></i></button></td>
            `;
            contenedorCarritoCompras.append(renglonesCarrito);

            //aqui agregamos el evento en carrito
            let inputCantidadProducto = document.getElementById(`cantidad-producto-${elemento.producto.id}`);
            inputCantidadProducto.addEventListener('change', (ev) => {
                let nuevaCantidad = ev.target.value;
                elemento.cantidad = nuevaCantidad;

                dibujarCarrito();
            });
            //aqui agregamos evento delete en carrito
            let botonEliminarProducto = document.getElementById(`eliminar-producto-${elemento.producto.id}`);
            botonEliminarProducto.addEventListener('click', () => {

                let indiceEliminar = elementosCarrito.indexOf(elemento);
                elementosCarrito.splice(indiceEliminar, 1);

                dibujarCarrito();
            });
        }
    );

    const valorInicial = 0;
    const totalCompora = elementosCarrito.reduce(
        (previousValue, currentValue) => previousValue + currentValue.producto.precio * currentValue.cantidad,
        valorInicial
    );

    if (elementosCarrito.length == 0) {
        contenedorFooterCarrito.innerHTML = `<th class="letra" scope="row" colspan="6">Carrito vacío - comience a comprar!</th>`;
    } else {
        contenedorFooterCarrito.innerHTML = `<th class="letra" scope="row" colspan="6">Total de la compra :&nbsp;&nbsp; ${totalCompora} CLP.</th>`;
    }

}

function dibujarCatalogoProductos() {
    contenedorProductos.innerHTML = "";
    productos.forEach(
        (producto) => {
            let contenedorCarta = crearCard(producto);
            contenedorProductos.append(contenedorCarta);
        }
    );

}

//disparar Funciones
cargarProductos();
cargarCarrito();
dibujarCarrito();
dibujarCatalogoProductos();