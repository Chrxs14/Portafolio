//animation navbar
const navBar = document.getElementById("headerNav");
const navBarFixed = document.getElementById("headerNavObserve");
const goTop = document.querySelector(".goTop");

let observer = new IntersectionObserver((entries) => {
  entries.forEach(() => {
    if (entries[0].isIntersecting) {
      goTop.classList.remove("goTopActive");
    } else {
      goTop.classList.add("goTopActive");
    }
  });
});

const prueba = observer.observe(navBar);

// animation scroll option navbar

const selectores = document.querySelectorAll(".selector");

function selectorScroll(item) {
  item.preventDefault();
  const href = this.getAttribute("href");
  document.querySelector(href).scrollIntoView({
    behavior: "smooth",
  });
}

selectores.forEach((item) => item.addEventListener("click", selectorScroll));

let ubicacionPrincipal = window.pageYOffset;
window.onscroll = () => {
  const headerScroll = document.querySelector("#headerNav");
  let desplazamiento = window.pageYOffset;

  console.log(window.pageYOffset);
  if (ubicacionPrincipal >= desplazamiento) {
    headerScroll.style.top = "0";
  } else {
    headerScroll.style.top = "-200px";
  }
  ubicacionPrincipal = desplazamiento;
};
