const filters = document.querySelectorAll('.filter input[type="radio"]');
const articles = document.querySelectorAll('.blog-post');
filters.forEach(filter => {
    filter.addEventListener('change', () => {
        const category = filter.id;

        articles.forEach(article => {
            if (category === 'all' || article.classList.contains(category)) {
                article.classList.add('active');
            } else {
                article.classList.remove('active');
            }
        });
    });
});