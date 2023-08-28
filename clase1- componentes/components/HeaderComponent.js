// Crear el template
const template = document.createElement("template");
template.innerHTML= `
<style>
  body{
    display:flex;
    flex-direction: column;
    padding: 0px;
    margin: 0px;
  }

  h2{
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0;
    padding: 0;
    color: red
  }

</style>
<header>
  <h1><slot></slot></h1>
</header>
`

// Crear una clase y consumir el template
class HeaderComponent extends HTMLElement {
  constructor () {
    super()
    this.attachShadow({mode: "open"})

    const templateShadow = template.content.cloneNode(true)
    this.shadowRoot.appendChild(templateShadow)
  }
}

customElements.define("h-component", HeaderComponent);
