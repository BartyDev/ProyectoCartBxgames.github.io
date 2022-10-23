// SELECTORES GENERALES
const contenedorPromos = document.getElementById("printPromos");

const contenedorCarritoCompras = document.querySelector("#carrito");

const contenedorFooterCarrito = document.querySelector("#footercarrito");

const totalItemsInImg = document.getElementById("totalitemsCart");


//PINTO EL CONTENIDO MODAL Y REFRESCAR
actualizarCart();


////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////


//CONSTRUCTOR DE Promos
class Promo {
  constructor(id, nombre, genero, promo, foto) {
    this.id = id;
    this.nombre = nombre;
    this.genero = genero;
    this.promo = promo;
    this.foto = foto;
  }
}

const promos = [];
console.log(promos);

fetch("./dataProm.json")
  .then(response => response.json())
  .then(data => {
    data.forEach(item => {
      promos.push(new Promo(item.id, item.titulo, item.tipo, item.descuento, item.imagen));
    });
    dibujarPromos();
  })
  .catch(error => {
    contenedorPromos.innerHTML = `<p>UPSSSS!! ALGO HA FALLADO!!! </p><img src="https://img.wattpad.com/ddc33309924443d7060b511f042acb4003ec3200/68747470733a2f2f73332e616d617a6f6e6177732e636f6d2f776174747061642d6d656469612d736572766963652f53746f7279496d6167652f4f5f4436677741627841576655673d3d2d3537343137393030332e313533396137313463653863363438323534353731323532383931312e676966?s=fit&w=720&h=720" width="500px" alt=""><P>${error}</P>`
  });