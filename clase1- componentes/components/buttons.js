// Crear el template
const templateBtn = document.createElement("template");
templateBtn.innerHTML = `
<style>
button{
    border: solid 0.1px;
    border-color: darkblue;
    padding: 12px;
    color: white;
    border-radius: 12px;
    border: none;
    background-color: darkblue;
}

button:hover{
    cursor: pointer;
    padding: 11.5px;
}

.substract{
    background-color: red;
}

.add{
    background-color: green;
}
  h1{color: red}
</style>
    <button><slot></slot></button>
`

// Crear una clase y consumir el template
class BtnComponent extends HTMLElement {
  constructor() {
    super()
    this.attachShadow({ mode: "open" })
    const templateShadow = templateBtn.content.cloneNode(true)
    this.shadowRoot.appendChild(templateShadow)
    this.type = this.getAttribute("type");
    this.btn = this.shadowRoot.querySelector("button")
    this.innerText = this.type;

    this.component = document.querySelector("counter-component");

    if (this.type === "add") {
      this.btn.classList.add("add")
    } else {
      this.btn.classList.add("substract")
    }
  }

  connectedCallback() {
    console.log(`tipo de boton ${this.type}`);
    
    this.btn.addEventListener("click", () => {
      this.componentvalue = +this.component.getAttribute('value')
      const newValue = (this.type === "add") ? this.add(this.componentvalue) : this.substract(this.componentvalue)

      this.component.setAttribute("value", newValue)
    })
  }

  add(value) {
    return value + 1
  }

  substract(value) {
    return (value > 0) ? value - 1 : value 

  }
}

customElements.define("btn-component", BtnComponent);
