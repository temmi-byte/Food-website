// Open Search
document.querySelector(".search-icon").addEventListener("click", function() {
    document.querySelector(".search-popup").style.display = "block";
    document.querySelector(".search-popup").style.top = "20px";
});

// Close Search
document.querySelector(".close-search").addEventListener("click", function() {
    document.querySelector(".search-popup").style.top = "-100px";
    setTimeout(() => {
        document.querySelector(".search-popup").style.display = "none";
    }, 300);
});
