$(document).ready(function () {
    // Mostrar todos los artículos al cargar la página
    $(".blog-post").addClass("d-block").removeClass("d-none");

    // Filtros por tags
    $(".filter-btn").on("click", function () {
        const category = $(this).data("filter");

        if (category === "all") {
            $(".blog-post").addClass("d-block").removeClass("d-none").css("opacity", "1").css("transform", "none");
        } else {
            $(".blog-post").each(function () {
                if ($(this).hasClass(category)) {
                    $(this).addClass("d-block").removeClass("d-none").css("opacity", "1").css("transform", "none");
                } else {
                    $(this).addClass("d-none").removeClass("d-block");
                }
            });
        }
    });

    // Responder a comentarios
    $(".reply").off("click").on("click", function () {
        const comment = $(this).closest(".comment");
    
        // Evitar duplicar la caja de texto si ya existe
        if (comment.find(".reply-box").length === 0) {
            const replyBox = $(`
                <div class="reply-box mt-3">
                    <textarea placeholder="Escribe tu respuesta..." class="form-control mb-2"></textarea>
                    <button class="btn btn-warning btn-sm reply-send">Enviar</button>
                </div>
            `);
    
            // Agregar la caja de texto debajo del comentario
            comment.append(replyBox);
    
            // Evento para enviar la respuesta
            replyBox.find(".reply-send").on("click", function () {
                const replyText = replyBox.find("textarea").val();
                if (replyText.trim() !== "") {
                    alert(`Respuesta enviada: ${replyText}`);
                    replyBox.remove(); // Eliminar la caja de texto después de enviar
                } else {
                    alert("Por favor, escribe una respuesta antes de enviar.");
                }
            });
        }
    });
});