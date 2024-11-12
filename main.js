$(document).ready(function() {    
    $('.dataTable').each(function() {
        const table = $(this);
        const headers = table.find('th');
        
        let yearColumnIndex = -1;
        
        headers.each(function(index) {
            if ($(this).text().trim() === "Año") {
                yearColumnIndex = index;
                return false; // Salir del loop si se encuentra "Año"
            }
        });
        
        // Configuración de DataTable con o sin orden por "Año"
        table.DataTable({
            language: {
                "lengthMenu": "Mostrar _MENU_ registros",
                "zeroRecords": "No se encontraron resultados",
                "info": "Mostrando registros del _START_ al _END_ de un total de _TOTAL_ registros",
                "infoEmpty": "Mostrando registros del 0 al 0 de un total de 0 registros",
                "infoFiltered": "(filtrado de un total de _MAX_ registros)",
                "sSearch": "Buscar:",
                "oPaginate": {
                    "sFirst": "Primero",
                    "sLast": "Último",
                    "sNext": "Siguiente",
                    "sPrevious": "Anterior"
                },
                "sProcessing": "Procesando...",
            },
            responsive: true,
            dom: 'Bfrtilp',
            buttons:[ 
                {
                    extend: 'excelHtml5',
                    text: '<i class="fas fa-file-excel"></i>',
                    titleAttr: 'Exportar a Excel',
                    className: 'btn btn-success'
                },
                {
                    extend: 'pdfHtml5',
                    text: '<i class="fas fa-file-pdf"></i>',
                    titleAttr: 'Exportar a PDF',
                    className: 'btn btn-danger'
                },
                {
                    extend: 'print',
                    text: '<i class="fa fa-print"></i>',
                    titleAttr: 'Imprimir',
                    className: 'btn btn-info'
                }
            ],
            order: yearColumnIndex >= 0 ? [[yearColumnIndex, 'desc']] : []  // Ordenar por "Año" si está presente
        });
    });
});
