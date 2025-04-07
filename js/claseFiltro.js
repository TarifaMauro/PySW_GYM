const filters = document.querySelectorAll('.filtros input[type="radio"]');
const classes = document.querySelectorAll('.galeria .clase');

filters.forEach(filter => {
    filter.addEventListener('change', () => {
        const category = filter.id;

        classes.forEach(clase => {
            if (category === 'todos' || clase.classList.contains(category)) {
                clase.style.display = 'block';
            } else {
                clase.style.display = 'none';
            }
        });
    });
});