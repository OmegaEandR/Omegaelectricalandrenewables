const header = document.querySelector(".site-header");
const menuButton = document.querySelector(".menu-button");
const navigation = document.querySelector(".main-nav");
const navLinks = document.querySelectorAll(".main-nav a");
const year = document.getElementById("current-year");


if (year) {
  year.textContent = new Date().getFullYear();
}


window.addEventListener("scroll", () => {

  header.classList.toggle(
    "scrolled",
    window.scrollY > 20
  );

});


menuButton.addEventListener("click", () => {

  const open =
    menuButton.getAttribute("aria-expanded") === "true";

  menuButton.setAttribute(
    "aria-expanded",
    String(!open)
  );

  navigation.classList.toggle("open");

  document.body.classList.toggle("menu-open");

});


navLinks.forEach((link) => {

  link.addEventListener("click", () => {

    menuButton.setAttribute(
      "aria-expanded",
      "false"
    );

    navigation.classList.remove("open");

    document.body.classList.remove("menu-open");

  });

});


const observer = new IntersectionObserver(

  (entries) => {

    entries.forEach((entry) => {

      if (entry.isIntersecting) {

        entry.target.classList.add("visible");

        observer.unobserve(entry.target);

      }

    });

  },

  {
    threshold: 0.12
  }

);


document
  .querySelectorAll(".reveal")
  .forEach((item) => {

    observer.observe(item);

  });
