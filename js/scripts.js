$(document).ready(function () {
    // Animación del overlay en el Hero
    $(".overlay").hide().fadeIn(1000).slideDown(500);
  
    // Animación de las tarjetas de Clases Destacadas
    $(".card").hover(
      function () {
        $(this).css({
          transform: "scale(1.1)",
          boxShadow: "0px 0px 20px rgba(255, 215, 0, 0.7)",
        });
      },
      function () {
        $(this).css({
          transform: "scale(1)",
          boxShadow: "0px 0px 15px rgba(255, 215, 0, 0.5)",
        });
      }
    );
  
    // Configuración del carrusel de testimonios
    $("#carouselTestimonios").carousel({
      interval: 3000, // Cambia cada 3 segundos
      pause: "hover", // Pausa al pasar el mouse
    });
  
    // Validación del formulario de newsletter
    $("form").on("submit", function (e) {
      e.preventDefault();
      const email = $("#email").val();
      if (email.includes("@") && email.includes(".")) {
        $("#email").removeClass("is-invalid").addClass("is-valid");
        $("button[type='submit']").html('<span class="spinner-border spinner-border-sm"></span> Enviando...');
        setTimeout(() => {
          $("button[type='submit']").html("Suscribirse");
          alert("Formulario enviado correctamente");
          $("#email").removeClass("is-valid");
          $("#email").val(""); // Limpia el campo de entrada
        }, 2000);
      } else {
        $("#email").removeClass("is-valid").addClass("is-invalid");
        alert("Por favor, ingresa un correo válido.");
      }
    });
});