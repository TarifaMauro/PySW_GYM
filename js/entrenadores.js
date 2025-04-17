$(document).ready(function () {
    // Animar barras de progreso
    $(".progress-bar").each(function () {
        const value = $(this).data("value");
        $(this).animate({ width: value + "%" }, 1000);
    });

    // Sistema de calificación con estrellas
    $(".estrellas input").on("change", function () {
        const rating = $(this).val();
        alert("Has calificado con " + rating + " estrellas.");
    });
});
  