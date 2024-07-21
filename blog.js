document.addEventListener('DOMContentLoaded', () => {
    const newsContainer = document.querySelector('.news-container');
    const newsItems = document.querySelectorAll('.news-item');

    let isScrolling;

    newsContainer.addEventListener('scroll', () => {
        window.clearTimeout(isScrolling);

        newsItems.forEach(item => {
            item.classList.add('scrolling');
        });

        isScrolling = setTimeout(() => {
            newsItems.forEach(item => {
                item.classList.remove('scrolling');
            });
        }, 300); // Adjust delay as needed
    });

    // Open new page on click
    newsItems.forEach(item => {
        item.addEventListener('click', () => {
            const link = item.querySelector('a');
            if (link) {
                window.open(link.href, '_blank');
            }
        });
    });
});
