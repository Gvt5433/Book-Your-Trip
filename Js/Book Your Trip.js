function toggleMenu() {
  document.getElementById("navLinks").classList.toggle("active");
}

const slides = document.getElementById("slides");
         const totalSlides = slides.children.length;
         let index = 0;

         setInterval(() => {
         index++;

         if (index >= totalSlides) {
         index = 0;
         }

         slides.style.transform = `translateX(-${index * 100}%)`;
         }, 3000);

const form = document.getElementById("bookingForm");

form.addEventListener("submit", function (e) {
    e.preventDefault(); // stop page refresh

    alert("Your booking request has been submitted successfully!");

    form.reset(); // clear form after submit
});