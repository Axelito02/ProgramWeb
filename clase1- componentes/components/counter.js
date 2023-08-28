// Crear el template
const template = document.createElement("template");
template.innerHTML= `
<style>
  h2{
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0;
    padding: 0;
    color: red
  }
</style>
<h2>0</h2>
`

// Crear una clase y consumir el template
class CounterComponent extends HTMLElement {
  constructor () {
    super()
    this.attachShadow({mode: "open"})

    const templateShadow = template.content.cloneNode(true)
    this.shadowRoot.appendChild(templateShadow)

    this.value = this.getAttribute('value');
    this.elementh2 = this.shadowRoot.querySelector('h2')
    this.elementh2.innerText = this.value;
  }

  static get observedAttributes() {
    return ["value"]
  }

  attributeChangedCallback (currentValue, oldValue, newValue) {
    if (currentValue === "value") {
      this.elementh2.innerText = newValue
    }

  }
}

customElements.define("counter-component", CounterComponent);
