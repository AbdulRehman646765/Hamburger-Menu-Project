const hamburger = document.querySelector(".hamburger");
hamburger.addEventListener("click", () => {
  const navBar = document.querySelector(".nav-bar");
  navBar.classList.toggle("active");

  hamburger.classList.toggle("active");
});

const date = new Date('2024-07-25').toDateString()
// date.setFullYear(2024, 06, 25)
// console.log(date);
const dateInHtml = document.querySelector(".date").innerText = date;

