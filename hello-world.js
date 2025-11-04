class HelloWorldElement extends HTMLElement {
  constructor() {
    super();
    console.log("Hello World from custom element!");
  }
}
customElements.define('hello-world', HelloWorldElement);

document.addEventListener("DOMContentLoaded", () => {
  const hamburger = document.querySelector(".hamburger");
  const navMenu = document.querySelector("nav ul");
  hamburger.addEventListener("click", () => {
    navMenu.classList.toggle("show");
  });
});

