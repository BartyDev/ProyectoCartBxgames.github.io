class Juegos {
    constructor(id, titulo, genero, stock, precio, imagen) {
        this.id = id
        this.titulo = titulo
        this.genero = genero
        this.stock = stock
        this.precio = precio
        this.imagen = imagen
    }
}

const arraydeJuegos = [];

arraydeJuegos.push(new Juegos(001, 'Marvel’s Spider-Man', 'Acción, Aventura, Casual', 10, 35000, 'assets/spidey.jpg'))
arraydeJuegos.push(new Juegos(002, 'Elden Ring', 'Acción, Rol', 10, 55000, 'assets/elden.jpg'))
arraydeJuegos.push(new Juegos(003, 'Battlefield™ 2042', 'Acción, Aventura, Casual', 10, 86900, 'assets/battlefield.jpg'))
arraydeJuegos.push(new Juegos(004, 'FIFA 22', 'Simuladores, Deportes', 10, 57900, 'assets/fifa22.jpg'))
arraydeJuegos.push(new Juegos(005, 'Yu-Gi-Oh! Duelist Legacy', 'Simuladores, Cartas', 10, 35000, 'assets/yugioh.jpg'))
arraydeJuegos.push(new Juegos(006, 'Stray', 'Aventura, Indie', 10, 16600, 'assets/strayc.jpg'));
