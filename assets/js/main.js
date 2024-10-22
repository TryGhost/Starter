import "../css/main.css";

// (function () {
//     pagination(true);
// })();

// Load More Post Logic
document.addEventListener('DOMContentLoaded', function () {
    const loadMoreButton = document.getElementById('load-more');
    if (!loadMoreButton) return;

    loadMoreButton.addEventListener('click', async function (e) {
        e.preventDefault(); // Prevent the default link behavior

        const nextPageUrl = loadMoreButton.href;
        try {
            const res = await fetch(nextPageUrl);
            const html = await res.text();
            const parser = new DOMParser();
            const doc = parser.parseFromString(html, 'text/html');

            const postElements = doc.querySelectorAll('.gh-feed > *');
            const feedElement = document.querySelector('.gh-feed');
            const fragment = document.createDocumentFragment();

            postElements.forEach(function (post) {
                var clonedItem = document.importNode(post, true);
                fragment.appendChild(clonedItem);
            });

            feedElement.appendChild(fragment);

            const resNextElement = doc.querySelector('.older-posts');
            if (resNextElement && resNextElement.href) {
                loadMoreButton.href = resNextElement.href;
            } else {
                loadMoreButton.remove();
            }
        } catch (e) {
            console.error('Failed to load older posts:', e);
        }
    });
});
