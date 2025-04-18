$(document).ready(function () {
    // Inicializar tooltips de Bootstrap
    const tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
    const tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
        return new bootstrap.Tooltip(tooltipTriggerEl);
    });

    // Cambiar precios según el toggle
    $("input[name='plan']").on("change", function () {
        const isMensual = $("#mensual").is(":checked");
        $(".precio").hide();
        if (isMensual) {
            $(".precio.mensual").fadeIn();
        } else {
            $(".precio.anual").fadeIn();
        }
    });

    // Resaltar fila al pasar el mouse
    $(".table-hover tbody tr").hover(
        function () {
            $(this).addClass("table-warning");
        },
        function () {
            $(this).removeClass("table-warning");
        }
    );
});