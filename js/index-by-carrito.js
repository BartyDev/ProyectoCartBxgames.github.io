// SELECTORES GENERALES
const contenedorCarritoCompras = document.querySelector("#carrito");

const contenedorFooterCarrito = document.querySelector("#footercarrito");

const totalItemsInImg = document.getElementById("totalitemsCart");

const CompraryEnviar = document.getElementById('buttonX');

const spiner = document.getElementById("loaderCompra");

detallegmail.value = "";


actualizarCart();


document.getElementById('form').addEventListener('submit', function (event) {
    event.preventDefault();
    const serviceID = 'default_service';
    const templateID = 'template_is8r26e';

    if (cart.length > 0) {
        emailjs.sendForm(serviceID, templateID, this)
            .then(() => {
                Swal.fire({
                    scrollY: 'visible',
                    title: 'Realizar Pago?',
                    text: "No podrá revertir esto!",
                    icon: 'warning',
                    showCancelButton: true,
                    confirmButtonColor: '#3085d6',
                    cancelButtonColor: '#d33',
                    confirmButtonText: 'Realizar'
                }).then((result) => {
                    if (result.isConfirmed) {
                        spiner.innerHTML = `
                        <div class="text-center">
                            <div class="lds-default">
                                <div></div>
                                <div></div>
                                <div></div>
                                <div></div>
                                <div></div>
                                <div></div>
                                <div></div>
                                <div></div>
                                <div></div>
                                <div></div>
                                <div></div>
                                <div></div>
                            </div>
                            <h6 class="text-center text-white">PROCESANDO COMPRA</h6>
                        </div>
                `
                        buttonX.value = 'CONFIRMANDO...';
                        setTimeout(() => {
                            Swal.fire({
                                title: 'Compra Realizada!',
                                color: "#0c1f4c",
                                icon: 'success',
                                timer: 2000,
                                showConfirmButton: false,
                            })
                            cart = [];
                            actualizarCart();
                            form.reset();
                            spiner.remove();
                            buttonX.value = 'CONFIRMAR';
                        }, 3000)
                    }
                })
            }, () => {
                Swal.fire({
                    icon: 'warning',
                    color: "#0c1f4c",
                    title: `Oops...Completa el formulario`,
                    text: 'Formulario Vacio',
                    showConfirmButton: false,
                    timer: 2000,
                })

            });
    } else {
        form.reset();
        Swal.fire({
            icon: 'warning',
            title: `Oops...agrega productos`,
            text: 'Carrito Vacío',
            color: "#0c1f4c",
            showConfirmButton: false,
            timer: 3000,
            footer: '<a class="text-decoration-none text-danger" href="store.html">Deseas agregar un producto?</a>'
        })
    }
});