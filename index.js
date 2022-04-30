//animation navbar
const navBar = document.getElementById("headerNav");
const navBarFixed = document.getElementById("headerNavObserve");
const goTop = document.querySelector(".goTop");

let observer = new IntersectionObserver((entries) => {
  entries.forEach(() => {
    if (entries[0].isIntersecting) {
      navBarFixed.classList.remove("navBar-observe");
      goTop.classList.remove("goTopActive");
    } else {
      navBarFixed.classList.add("navBar-observe");
      goTop.classList.add("goTopActive");
    }
  });
});

const prueba = observer.observe(navBar);

//animation scroll option navbar

const selectores = document.querySelectorAll(".selector");

function selectorScroll(item) {
  item.preventDefault();
  const href = this.getAttribute("href");
  document.querySelector(href).scrollIntoView({
    behavior: "smooth",
  });
}

selectores.forEach((item) => item.addEventListener("click", selectorScroll));

//more content
const containerProyectos = document.getElementById("proyectos");
const buttonMore = document.querySelector(".more");
buttonMore.addEventListener("click", () => {
  console.log(containerProyectos.classList);
  if (containerProyectos.classList.contains("moreContent")) {
    console.log(true);
    containerProyectos.classList.remove("moreContent");
    buttonMore.innerHTML = "Mostrar Mas>>";
  } else {
    console.log(false);
    containerProyectos.classList.add("moreContent");
    buttonMore.innerHTML = "Mostrar Menos<<";
  }
});
