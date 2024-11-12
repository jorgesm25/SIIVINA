// Función para manejar las pestañas principales (SIIVINA o SIJPA)
function toggleActive(element, contentId) {
    // Asegúrate de afectar solo a las pestañas principales
    document.querySelectorAll('.navbar-nav .nav-link').forEach(link => {
        link.classList.remove('active');
    });
    element.classList.add('active');

    // Ocultar todos los contenidos principales
    document.querySelectorAll('.container-main .tab-content').forEach(content => {
        content.classList.remove('active');
    });

    // Mostrar solo el contenido seleccionado
    document.getElementById(contentId).classList.add('active');
    
    // Asegurar que se muestre el contenido correcto para SIIVINA/SIJPA
    if (contentId === 'sijpaContent') {
        document.getElementById('siivinaContent').classList.remove('active');
    } else if (contentId === 'siivinaContent') {
        document.getElementById('sijpaContent').classList.remove('active');
    }

    // Cargar contenido inicial para SIIVINA si es seleccionado
    if (contentId === 'siivinaContent') {
        $("#contentContainer").load("resumen.html"); // Cambia al nuevo contenedor
    }
}

// Función para manejar las subpestañas dentro de SIIVINA con cambio de iframe
$(document).ready(function() {
    $(".third-nav .nav-link").click(function(e) {
        e.preventDefault(); // Evitar el comportamiento por defecto del enlace

        // Obtener el href y la clase del enlace clicado
        var newContent = $(this).attr("href");
        var newClass = $(this).data("class"); // Obtener la clase desde el data-class

        // Cambiar el src del iframe para cargar el nuevo contenido
        $("#contentIframe").attr("src", newContent);

        // Actualizar la clase del iframe
        $("#contentIframe").attr("class", newClass); // Cambiar la clase del iframe

        // Manejar la clase "active" en las subpestañas
        $(".third-nav .nav-link").removeClass("active"); // Remover la clase "active" de todas las subpestañas
        $(this).addClass("active"); // Agregar la clase "active" a la pestaña clicada
    });
});


// Función para cargar contenido de los indicadores 
function loadContentInIframe(url) {
    const iframe = document.getElementById("subContentIframe");
    iframe.src = url; // Cambiar la fuente del iframe al archivo HTML que quieras cargar
}

// Añadir listeners a los elementos de la barra de selección
document.addEventListener("DOMContentLoaded", () => {
    // Selecciona los elementos de la lista de opciones
    const optionsList = document.querySelectorAll(".options-list .list-group-item");

    optionsList.forEach(option => {
        option.addEventListener("click", (event) => {
            const contentUrl = event.target.getAttribute("data-url"); // URL del contenido
            loadContentInIframe(contentUrl); // Llama a la función para cambiar el contenido del iframe
        });
    });
});




