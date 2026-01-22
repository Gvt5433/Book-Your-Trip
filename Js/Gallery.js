function toggleMenu() {
  document.getElementById("navLinks").classList.toggle("active");
}

const headerSlides = document.getElementById("slides");
if (headerSlides) {
    let index = 0;
    const total = headerSlides.children.length;

    setInterval(() => {
        index = (index + 1) % total;
        headerSlides.style.transform = `translateX(-${index * 100}%)`;
    }, 3000);
}

document.querySelectorAll(".article-slides").forEach(slides => {
    let index = 0;
    const total = slides.children.length;

    setInterval(() => {
        index = (index + 1) % total;
        slides.style.transform = `translateX(-${index * 100}%)`;
    }, 2500);
});
