document.addEventListener("DOMContentLoaded", function () {
    const searchBar = document.getElementById("searchBar");
    const articles = document.querySelectorAll(".articles article, .products-grid .product-card");

    searchBar.addEventListener("keyup", function (event) {
        const query = event.target.value.toLowerCase();

        articles.forEach(article => {
            const title = article.querySelector("h3").textContent.toLowerCase();
            if (title.includes(query)) {
                article.style.display = "block";
            } else {
                article.style.display = "none";
            }
        });
    });
});