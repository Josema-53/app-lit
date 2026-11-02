import { LitElement, html, css } from "lit-element";
class Register extends LitElement {
  static get properties() {
    return {
      nombre: { type: String },
      categoria: { type: String },
      precio: { type: Number },
    };
  }

  constructor() {
    super();
    this.nombre = this.categoria = this.precio = "";
  }

  handler(propiedad) {
    return (e) => {
      let value = e.target.value;
      this[propiedad] = value;
    };
  }

  register(event) {
    event.preventDefault();
    let data = {
      nombre: this.nombre,
      categoria: this.categoria,
      precio: Number(this.precio),
    };
    let options = {
      detail: data,
      bubbles: true,
      composed: true,
    };
    this.dispatchEvent(new CustomEvent("registerBebida", options));
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
        background-color: #f4faf4;
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

      input,
      select {
        box-sizing: border-box;
        width: 100%;
        padding: 10px 12px;
        border: 1px solid #a5c9a8;
        border-radius: 6px;
        font-size: 16px;
      }

      input:focus,
      select:focus {
        outline: 2px solid #43a047;
        border-color: #43a047;
      }

      button {
        padding: 11px 16px;
        border: 0;
        border-radius: 6px;
        background-color: #2e7d32;
        color: white;
        font-size: 16px;
        font-weight: bold;
        cursor: pointer;
      }

      button:hover {
        background-color: #1b5e20;
      }
    `;
  }
 
  render() {
    return html`
      <form @submit=${this.register}>
        <fieldset>
          <legend>Registro de bebidas</legend>

          <div>
            <label for="nombre">Nombre de la bebida:</label>
            <input
              @input="${this.handler("nombre")}"
              .value="${this.nombre}"
              type="text"
              id="nombre"
              name="nombre"
              placeholder="Ej. Té verde con limón"
              required
            />
          </div>

          <div>
            <label for="categoria">Categoría:</label>
            <select
              @change="${this.handler("categoria")}"
              .value="${this.categoria}"
              id="categoria"
              name="categoria"
              required
            >
              <option value="" disabled>Selecciona una categoría</option>
              <option value="Té">Té</option>
              <option value="Bebida hidratante">Bebida hidratante</option>
              <option value="Jugo natural">Jugo natural</option>
            </select>
          </div>

          <div>
            <label for="precio">Precio ($):</label>
            <input
              @input="${this.handler("precio")}"
              .value="${this.precio}"
              type="number"
              id="precio"
              name="precio"
              min="0"
              step="0.01"
              required
            />
          </div>

          <button type="submit">Registrar bebida</button>
        </fieldset>
      </form>
    `;
  }
}

window.customElements.define("wc-form-register", Register);
