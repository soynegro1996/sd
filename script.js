// Simular la carga de la barra de progreso
function cargarBarra() {
    var barra = document.getElementById("myBar");
    var width = 1;
    var id = setInterval(frame, 10);

    function frame() {
        if (width >= 100) {
            clearInterval(id);
        } else {
            width++;
            barra.style.width = width + "%";
        }
    }
}

// Iniciar la carga cuando se abre la p�gina
window.onload = function() {
    cargarBarra();
};
