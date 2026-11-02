import { LitElement, html, css } from "lit-element";
class Register extends LitElement {
  static get properties() {
    return {
      name: { type: String },
      lastName: { type: String },
      age: { type: Number },
    };
  }
 
  constructor() {
    super();
    this.name = this.lastName = this.age = "";
  }
  handler(name){
    return (e) => {
        let value = e.target.value;
        this[name] = value;


    };
  }
  register(event) {
  event.preventDefault();
  let data = {
    name: this.name,
    lastName: this.lastName,
    age: this.age,
  };
    let options = {
        detail: data,
        bubbles: true,
        composed: true,
    };
    this.dispatchEvent(new CustomEvent("registerStudent", options));

}

  static get styles() {
    return css`
      :host {
        display: block;
        max-width: 420px;
        margin: 24px 0;
        font-family: Arial, sans-serif;
      }

      form {
        padding: 20px;
        border: 1px solid #d9d9d9;
        border-radius: 12px;
        background-color: #f8f9ff;
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
      }

      fieldset {
        display: grid;
        gap: 16px;
        margin: 0;
        padding: 0;
        border: 0;
      }

      legend {
        margin-bottom: 8px;
        color: #222;
        font-size: 22px;
        font-weight: bold;
      }

      div {
        display: grid;
        gap: 6px;
      }

      label {
        color: #333;
        font-weight: bold;
      }

      input {
        box-sizing: border-box;
        width: 100%;
        padding: 10px 12px;
        border: 1px solid #b8bfd3;
        border-radius: 6px;
        font-size: 16px;
      }

      input:focus {
        outline: 2px solid #6c63ff;
        border-color: #6c63ff;
      }

      button {
        padding: 11px 16px;
        border: 0;
        border-radius: 6px;
        background-color: #3300ff;
        color: white;
        font-size: 16px;
        font-weight: bold;
        cursor: pointer;
      }

      button:hover {
        background-color: #2500bd;
      }
    `;
  }
 
  render() {
    return html`
      <form @submit=${this.register}>
        <fieldset>
          <legend>Registro de usuario</legend>
 
          <div>
            <label for="nombre">Nombre:</label>
            <input
            @input="${this.handler('name')}"
              .value="${this.name}"
              type="text"
              id="nombre"
              name="nombre"
              required
            />
          </div>
 
          <div>
            <label for="apellido">Apellido:</label>
            <input
            @input="${this.handler('lastName')}"
              .value="${this.lastName}"
              type="text"
              id="apellido"
              name="apellido"
              required
            />
          </div>
 
          <div>
            <label for="edad">Edad:</label>
            <input
            @input="${this.handler('age')}"
              .value="${this.age}"
              type="number"
              id="edad"
              name="edad"
              min="0"
              required
            />
          </div>
 
          <button type="submit">Registrar</button>
        </fieldset>
      </form>
    `;
  }
}
 
window.customElements.define("wc-form-register", Register);
 