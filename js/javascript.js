    function mostrarHora(){
        const hoy = new Date();

        const hora = hoy.getHours();
        const minutos = hoy.getMinutes();
        const segundos = hoy.getSeconds();

        const horaCompleta = `${hora}:${minutos}:${segundos}`;
        document.getElementById("horaH").innerHTML = horaCompleta;
    }

    mostrarHora();
    setInterval(mostrarHora, 1000);

    function mostrarFecha(){
        const hoy2 = new Date();
        const diasSemana = [
        "Domingo",
        "Lunes",
        "Martes",
        "Miércoles",
        "Jueves",
        "Viernes",
        "Sábado"
    ];
        const nombreDia = diasSemana[hoy2.getDay()];
        const dia = hoy2.getDate();

        //Print día
        const fechaHoy = `${nombreDia} ${dia}`;
        document.getElementById("fechaH").innerHTML = fechaHoy;

        //Print mes y año
        const meses = [
        "Enero",
        "Febrero",
        "Marzo",
        "Abril",
        "Mayo",
        "Junio",
        "Julio",
        "Agosto",
        "Septiembre",
        "Octubre",
        "Noviembre",
        "Diciembre"
    ];
        const anio = hoy2.getFullYear();
        const mes = meses[hoy2.getMonth()];
        const mesHoy = `${mes} ${anio}`;
        document.getElementById("mesAnio").innerHTML = mesHoy;

    }       
    mostrarFecha();

    function validarFormulario() {

    const nombre = document.getElementById("nombreForm").value.trim();
    const email = document.getElementById("emailForm").value.trim();
    const mensaje = document.getElementById("mensajeForm").value.trim();

    const alertContainer = document.getElementById("alertContainer");

    alertContainer.innerHTML = "";

    if (!nombre || !email || !mensaje) {
      mostrarAlerta("Debe completar todos los campos", "danger");
      return;
    }

    const regexCorreo = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!regexCorreo.test(email)) {
      mostrarAlerta("Debe escribir un correo válido", "warning");
      return;
    }

    mostrarAlerta("El formulario se ha enviado con éxito", "success");

    document.getElementById("nombreForm").value = "";
    document.getElementById("emailForm").value = "";
    document.getElementById("mensajeForm").value = "";
  }

  function mostrarAlerta(mensaje, tipo) {
    const alertContainer = document.getElementById("alertContainer");

    alertContainer.innerHTML = `
      <div class="alert alert-${tipo} alert-dismissible fade show" role="alert">
        ${mensaje}
        <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Cerrar"></button>
      </div>
    `;
  }
    
function mostrarFavorito() {
    const modal = document.getElementById("modalFavorito");
    modal.style.display = "block";

    setTimeout(() => {
      modal.style.display = "none";
    }, 2000);
  }

document.querySelectorAll(".btnComprar").forEach((btn) => {
  btn.addEventListener("click", function () {
    const modal = new bootstrap.Modal(document.getElementById("miModal"));
    modal.show();
  });
});

