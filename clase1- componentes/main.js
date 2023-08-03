import './style.css'

// Crear el template
const template = document.createElement("template");
template.innerHTML= `
<header>
  <h1>Hola mundo</h1>
</header>
`

// Crear una clase y consumir el template
class HeaderComponent extends HTMLElement {
  constructor () {
    super()
    this.attachShadow({mode: "open"})

    const templateShadow = template.content.cloneNode(true)
    this.shadowRoot.appendChild(templateShadow)
    console.log(this.shadowRoot);
  }
}

customElements.define("h-component", HeaderComponent);
