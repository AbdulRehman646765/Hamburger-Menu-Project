const hamburger = document.querySelector(".hamburger");
hamburger.addEventListener("click", () => {
    const navBar = document.querySelector(".nav-bar");
    navBar.classList.toggle("active");
})