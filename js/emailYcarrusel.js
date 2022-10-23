const butonsub = document.getElementById('buttonS');

const carrusel = document.querySelector(".carrusel-items");

const nav = document.getElementById("Nav-id");


// EMAIL DE SUSCRIPCION!!!

document.getElementById('form')
  .addEventListener('submit', function (event) {
    event.preventDefault();

    butonsub.value = 'Enviando...';

    const serviceID = 'default_service';
    const templateID = 'template_bvxuv7o';

    emailjs.sendForm(serviceID, templateID, this)
      .then(() => {
        butonsub.value = 'Enviar';
        Swal.fire({
          icon: 'success',
          title: `Enhorabuena Te has Suscrito`,
          color: '#0c1f4c',
          text: 'revisa tu bandeja',
          showConfirmButton: false,
          timer: 2000,
        })
        form.reset();
      }, (err) => {
        butonsub.value = 'Enviar';
        alert(JSON.stringify(err));
      });
  });



// CARROUSEL DE PROXIMOS LANZAMIENTOS

let maxScrollLeft = carrusel.scrollWidth - carrusel.clientWidth;
let intervalo = null;
let step = 1;
const start = () => {
  intervalo = setInterval(function () {
    carrusel.scrollLeft = carrusel.scrollLeft + step;
    if (carrusel.scrollLeft === maxScrollLeft) {
      step = step * -1;
    } else if (carrusel.scrollLeft === 0) {
      step = step * -1;
    }
  }, 10);
};

const stop = () => {
  clearInterval(intervalo);
};

carrusel.addEventListener("mouseover", () => {
  stop();
});

carrusel.addEventListener("mouseout", () => {
  start();
});

start();


//SCROLL NAV SMOOTH ALL PAGES

window.addEventListener('scroll', function () {
  nav.classList.toggle('active', this.window.scrollY > 0)
})