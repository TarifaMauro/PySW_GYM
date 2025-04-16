$(document).ready(function () {
    // Desactiva el manejo automático de Bootstrap para los menús desplegables
    $(".dropdown-toggle").off("click.bs.dropdown");
  
    // Manejo del menú desplegable con jQuery
    $(".dropdown-toggle").on("click", function (e) {
      e.preventDefault();
      const $menu = $(this).next(".dropdown-menu");
      $(".dropdown-menu").not($menu).removeClass("show"); // Cierra otros menús abiertos
      $menu.toggleClass("show");
    });
  
    // Cierra el menú al hacer clic fuera de él
    $(document).on("click", function (e) {
      if (!$(e.target).closest(".dropdown").length) {
        $(".dropdown-menu").removeClass("show");
      }
    });
  });