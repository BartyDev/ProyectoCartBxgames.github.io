class Producto {
    constructor(id, nombre, genero, stock, precio, foto) {
        this.id = id;
        this.nombre = nombre;
        this.genero = genero;
        this.stock = stock
        this.precio = precio;
        this.foto = foto;
    }
}

class ElementoCarrito {
    constructor(producto, cantidad) {
        this.producto = producto;
        this.cantidad = cantidad;
    }
}

//carritos
const productos = [];
const elementosCarrito = [];

//interaccion con DOM
const contenedorProductos = document.getElementById('contenedor-productos');

const contenedorCarritoCompras = document.querySelector("#items")

const contenedorFooterCarrito = document.querySelector("#footer");