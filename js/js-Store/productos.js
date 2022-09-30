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
productos.push(new Producto(1, 'Marvel’s Spider-Man', 'Acción, Aventura, Casual', 50, 35000, 'assets/spidey.jpg'));
productos.push(new Producto(2, 'Elden Ring', 'Acción, Rol', 50, 55000, 'assets/elden.jpg'));
productos.push(new Producto(3, 'Battlefield™ 2042', 'Acción, Aventura, Casual', 50, 86900, 'assets/battlefield.jpg'));
productos.push(new Producto(4, 'FIFA 22', 'Simuladores, Deportes', 50, 57900, 'assets/fifa22.jpg'));
productos.push(new Producto(5, 'Yu-Gi-Oh! Duelist Legacy', 'Simuladores, Cartas', 50, 35000, 'assets/yugioh.jpg'));
productos.push(new Producto(6, 'Stray', 'Aventura, Indie', 50, 16600, 'assets/strayc.jpg'));

productos.push(new Producto(6, 'Stray', 'Aventura, Indie', 10, 16600, 'assets/strayc.jpg'));
productos.push(new Producto(6, 'Stray', 'Aventura, Indie', 10, 16600, 'assets/strayc.jpg'));
productos.push(new Producto(6, 'Stray', 'Aventura, Indie', 10, 16600, 'assets/strayc.jpg'));
productos.push(new Producto(6, 'Stray', 'Aventura, Indie', 10, 16600, 'assets/strayc.jpg'));
productos.push(new Producto(6, 'Stray', 'Aventura, Indie', 10, 16600, 'assets/strayc.jpg'));
productos.push(new Producto(6, 'Stray', 'Aventura, Indie', 10, 16600, 'assets/strayc.jpg'));

