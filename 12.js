document.addEventListener("DOMContentLoaded", function () {
    const typeFilter = document.getElementById("type-filter");
    const yearFilter = document.getElementById("year-filter");
    const authorFilter = document.getElementById("author-filter");
    const publications = document.querySelectorAll(".publication-list");

    function filterPublications() {
        const selectedType = typeFilter.value;
        const selectedYear = yearFilter.value;
        const selectedAuthor = authorFilter.value;

        publications.forEach(function (publication) {
            const publicationType = publication.getAttribute("data-type");
            const publicationYear = publication.getAttribute("data-year");
            const publicationAuthor = publication.getAttribute("data-author");

            const matchesType = (selectedType === "All" || selectedType === publicationType);
            const matchesYear = (selectedYear === "All" || selectedYear === publicationYear);
            const matchesAuthor = (selectedAuthor === "All" || selectedAuthor === publicationAuthor);

            if (matchesType && matchesYear && matchesAuthor) {
                publication.style.display = "list-item";
            } else {
                publication.style.display = "none";
            }
        });
    }

    typeFilter.addEventListener("change", filterPublications);
    yearFilter.addEventListener("change", filterPublications);
    authorFilter.addEventListener("change", filterPublications);

    // Initial filter to show all publications
    filterPublications();
});