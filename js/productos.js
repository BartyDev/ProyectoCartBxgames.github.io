//CONSTRUCTOR DE PRODUCTOS
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

//array de PRODUCTOS
const productos = [];

//LISTA DE PRODUCTOS
productos.push(new Producto(1, 'Marvel’s Spider-Man', 'Acción, Aventura, Casual', 10, 35000, 'assets/spidey.jpg'));
productos.push(new Producto(2, 'Elden Ring', 'Acción, Rol', 5, 55000, 'assets/elden.jpg'));
productos.push(new Producto(3, 'Battlefield™ 2042', 'Acción, Aventura, Casual', 5, 86900, 'assets/battlefield.jpg'));
productos.push(new Producto(4, 'FIFA 22', 'Simuladores, Deportes', 10, 57900, 'assets/fifa22.jpg'));
productos.push(new Producto(5, 'Yu-Gi-Oh! Duelist Legacy', 'Simuladores, Cartas', 10, 35000, 'assets/yugioh.jpg'));
productos.push(new Producto(6, 'Stray', 'Aventura, Indie', 10, 16600, 'assets/strayc.jpg'));