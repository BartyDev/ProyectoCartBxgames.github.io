const containerCards = document.getElementById('container-cards');

window.addEventListener('load', pintarCards);


function pintarCards() {
      arraydeJuegos.map(juegos => {
            const {
                  id,
                  titulo,
                  imagen,
                  genero,
                  stock,
                  precio
            } = juegos;

            //CARD-CONTENEDOR
            const contBoxCard = document.createElement('div');
            contBoxCard.classList.add('col-lg-4', 'mb-3');
            

            //CARD
            const boxCard = document.createElement('div');
            boxCard.classList.add('card');
            boxCard.setAttribute('id', 'agregar-carrito')

            //cabecera
            const boxImagen = document.createElement('div');
            boxImagen.classList.add('img-container');

            const cardImagen = document.createElement('img')
            cardImagen.setAttribute('src', imagen);
            cardImagen.setAttribute('alt', `${id}-${titulo}`);
            cardImagen.classList.add('image', 'card-img-top', 'img-fluid');

            const cardBoxButton = document.createElement('div');
            cardBoxButton.classList.add('overlay');

            const buttonComprar = document.createElement('button');
            buttonComprar.classList.add('btn', 'btn-dark', 'btn-sm', 'agregar-carrito');
            buttonComprar.textContent = 'Add to Cart ';
            buttonComprar.setAttribute('data-id', id);

            const comprarI = document.createElement('i');
            comprarI.classList.add('fas', 'fa-cart-plus', 'mr-2');

            const buttonHeart = document.createElement('button');
            buttonHeart.classList.add('btn', 'btn-outline-danger', 'btn-sm');

            const heartI = document.createElement('i');
            heartI.classList.add('far', 'fa-heart')

            //cuerpo

            const cardBody = document.createElement('div');
            cardBody.classList.add('card-body');

            const textBody = document.createElement('h4');
            textBody.classList.add('card-title');
            textBody.textContent = `${id}. ${titulo}`

            const precioBody = document.createElement('h6');
            precioBody.classList.add('card-subtitle', 'mb-2', 'text-muted');
            precioBody.textContent = `${precio} CLP.`;

            const descripBody = document.createElement('p');
            descripBody.classList.add('card-text')
            descripBody.textContent = `Género : ${genero}.`

            const uniBody = document.createElement('p');
            uniBody.classList.add('card-text')
            uniBody.textContent = `Unidades Disponibles: ${stock}`;



            /*---------- sub-principales --------- */
            buttonComprar.appendChild(comprarI);
            buttonHeart.appendChild(heartI);
            cardBoxButton.appendChild(buttonHeart);
            boxImagen.appendChild(cardImagen);
            boxImagen.appendChild(cardBoxButton);
            cardBody.appendChild(textBody);
            cardBody.appendChild(precioBody);
            cardBody.appendChild(descripBody);
            cardBody.appendChild(uniBody);

            /*---------- principales --------- */
            boxCard.appendChild(boxImagen)
            boxCard.appendChild(cardBody)
            boxCard.appendChild(buttonComprar)

            contBoxCard.appendChild(boxCard);

            containerCards.appendChild(contBoxCard)
      })
}




/* const pintarCards = data => {

    data.forEach(item => {
        templateCard.querySelector('h5').textContent = item.title
        templateCard.querySelector('p').textContent = item.precio
        templateCard.querySelector('img').setAttribute("src", item.url);
        templateCard.querySelector('.btn-dark').dataset.id = item.id;
        const clone = templateCard.cloneNode(true);//*clona el elemento para ser agregado al fragment
        fragment.appendChild(clone)//* fragment evita reflow, asi no se recorre innecesariamente el arreglo
    });

    items.appendChild(fragment);

}

let carrito = {} */


const addCarrito = e => {
    /*  console.log(e.target)
     console.log(e.target.classList.contains('btn-dark')); */
    if (e.target.classList.contains('btn-dark')) {//*target que detecta el boton- devuelve un valor true si se preciona en la clase indicada(boton)
        //  console.log(e.target.parentElement)//*empuja el contenido completo del div card al carrito
        setCarrito(e.target.parentElement)
    }
    e.stopPropagation()//* evita que el evento se propague a las demas etiquetas del html(si se hace click en precio u otro)
}

const setCarrito = objeto => {
   
    const producto={
        id:  objeto.querySelector('.btn-dark').dataset.id,
        tittle: objeto.querySelector('h5').textContent,
        precio: objeto.querySelector('p').textContent,
        cantidad: 1
    }

    if (carrito.hasOwnProperty(producto.id)) {//*si se detecta que se agrega el mismo producto lo aumentara en uno en su cantidad total
        producto.cantidad = carrito[producto.id]+1
    }

    carrito[producto.id]={...producto}//*sprite operations - buscar mas informacion 
    //* se accede a la informacion de carrito y se copia

    console.log(carrito)
}