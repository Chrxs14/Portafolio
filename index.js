const navBar = document.getElementById("headerNav");
const navBarFixed = document.getElementById("headerNavObserve");

let observer = new IntersectionObserver((entries) => {
  entries.forEach(() => {
    if (entries[0].isIntersecting) {
      navBarFixed.classList.remove("navBar-observe");
    } else {
      navBarFixed.classList.add("navBar-observe");
    }
  });
});

const prueba = observer.observe(navBar);
