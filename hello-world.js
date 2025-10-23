class HelloWorldElement extends HTMLElement {
  constructor() {
    super();
    console.log("Hello World from custom element!");
  }
}
customElements.define('hello-world', HelloWorldElement);
