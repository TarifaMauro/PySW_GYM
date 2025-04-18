$(document).ready(function () {
    const filters = $(".filtros input[type='radio']");
    const classes = $(".galeria .clase");

    filters.on("change", function () {
        const category = $(this).attr("id");

        classes.each(function () {
            const $clase = $(this);
            if (category === "todos" || $clase.hasClass(category)) {
                $clase.fadeIn(300).removeClass("hidden");
            } else {
                $clase.fadeOut(300).addClass("hidden");
            }
        });
    });
});