$(document).ready(function() {
    $('#accounts_table').dataTable(
        {
            "dom": '<"toolbar">Blftrp',
            "paging": true,
            "ordering": true,
            "info": true,
            "select": true,
            "buttons": [ 'excel', 'pdf', 'print' ],
            "layout": {
                "topStart": 'pageLength',
                "topEnd": 'search',
                "bottomEnd": 'paging'
            },
            "language": {
                "decimal": ",",
                "thousands": ".",
                "lengthMenu": "Mostrar _MENU_ cuentas",
                "zeroRecords": "No se encontraron resultados",
                "info": "Mostrando cuentas del _START_ al _END_ de un total de _TOTAL_ cuentas",
                "infoEmpty": "Mostrando cuentas del 0 al 0 de un total de 0 cuentas",
                "infoFiltered": "(filtrado de un total de _MAX_ cuentas)",
                "sSearch": "Buscar Cuenta/s:",
                "oPaginate": {
                    "sFirst": "Primera",
                    "sLast":"Última",
                    "sNext":"Siguiente",
                    "sPrevious": "Anterior"
                },
                "sProcessing":"Cargando..."
            }
        }
    );
} );

$(document).ready(function() {
    $('#articles_table').dataTable(
        {
            "dom": '<"toolbar">Blftrp',
            "paging": true,
            "ordering": true,
            "info": true,
            "select": true,
            "buttons": [ 'excel', 'pdf', 'print' ],
            "language": {
                "decimal": ",",
                "thousands": ".",
                "lengthMenu": "Mostrar _MENU_ artículos",
                "zeroRecords": "No se encontraron resultados",
                "info": "Mostrando artículos del _START_ al _END_ de un total de _TOTAL_ artículos",
                "infoEmpty": "Mostrando artículos del 0 al 0 de un total de 0 artículos",
                "infoFiltered": "(filtrado de un total de _MAX_ artículos)",
                "sSearch": "Buscar Artículo/s:",
                "oPaginate": {
                    "sFirst": "Primero",
                    "sLast":"Último",
                    "sNext":"Siguiente",
                    "sPrevious": "Anterior"
                },
                "sProcessing":"Cargando..."
            }
        }
    );

} );
