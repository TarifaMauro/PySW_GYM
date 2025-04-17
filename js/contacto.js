$(document).ready(function () {
    // Validación en tiempo real para el formulario de contacto
    $("#contact-form input, #contact-form textarea").on("input", function () {
        if (this.checkValidity()) {
            $(this).removeClass("is-invalid").addClass("is-valid");
        } else {
            $(this).removeClass("is-valid").addClass("is-invalid");
        }
    });

    // Manejo del envío del formulario de contacto
    $("#contact-form").on("submit", function (e) {
        e.preventDefault();

        // Mostrar spinner
        $(".spinner-border").fadeIn();

        // Simular un retraso para el envío del formulario
        setTimeout(function () {
            // Ocultar spinner
            $(".spinner-border").fadeOut();

            // Mostrar modal de confirmación
            $("#modalConfirmacion").modal("show");

            // Reiniciar el formulario
            $("#contact-form")[0].reset();
            $("#contact-form input, .contact-form textarea").removeClass("is-valid is-invalid");
        }, 2000); // Simula un retraso de 2 segundos
    });
});