import { LitElement, html, css } from "lit-element";

class Register extends LitElement {
  static get properties() {
    return {
      nombre: { type: String },
      origen: { type: String },
      precio: { type: Number },
    };
  }

  // Estilos del emprendimiento Café Raiz
  static get styles() {
    return css`
      :host {
        display: block;
        margin-bottom: 24px;
        font-family: var(--fuente-base, system-ui, sans-serif);
      }

      form {
        background: var(--color-superficie, #ffffff);
        border: 1px solid rgba(111, 78, 55, 0.18);
        border-radius: 12px;
        padding: 24px;
        box-shadow: 0 4px 16px -2px rgba(44, 26, 14, 0.06);
        max-width: 520px;
        margin: auto;
      }

      fieldset {
        border: none;
        padding: 0;
        margin: 0;
      }

      legend {
        font-size: 1.25rem;
        font-weight: 700;
        color: var(--color-marca, #6f4e37);
        margin-bottom: 20px;
        display: flex;
        align-items: center;
        gap: 8px;
      }

      /* Grilla para alinear nombres de campos e inputs uniformemente */
      .campo {
        margin-bottom: 16px;
        display: grid;
        grid-template-columns: 140px 1fr;
        align-items: center;
        gap: 12px;
      }

      label {
        font-size: 0.95rem;
        font-weight: 600;
        color: var(--color-texto, #2c1a0e);
        text-align: left;
      }

      input {
        width: 100%;
        box-sizing: border-box;
        padding: 10px 14px;
        border: 1px solid #d8cfc7;
        border-radius: 8px;
        font-size: 0.95rem;
        outline: none;
        transition: border-color 0.2s ease, box-shadow 0.2s ease;
      }

      input:focus {
        border-color: var(--color-acento, #c68642);
        box-shadow: 0 0 0 3px rgba(198, 134, 66, 0.2);
      }

      /* Contenedor del campo de precio con prefijo de moneda */
      .input-dinero {
        position: relative;
        display: flex;
        align-items: center;
        width: 100%;
      }

      .simbolo-moneda {
        position: absolute;
        left: 12px;
        font-weight: 700;
        font-size: 1rem;
        color: var(--color-acento, #c68642);
        pointer-events: none;
      }

      .input-dinero input {
        padding-left: 28px; /* Deja espacio para el signo $ */
      }

      button {
        width: 100%;
        background-color: var(--color-marca, #6f4e37);
        color: #ffffff;
        border: none;
        padding: 12px;
        border-radius: 8px;
        font-size: 1rem;
        font-weight: 600;
        cursor: pointer;
        transition: background-color 0.2s ease, transform 0.1s ease;
        margin-top: 10px;
      }

      button:hover {
        background-color: var(--color-acento, #c68642);
      }

      button:active {
        transform: scale(0.98);
      }
      /* Contenedor que agrupa el signo $ y el input */
      .caja-precio {
        position: relative;
        display: flex;
        align-items: center;
        width: 100%;
      }

      /* Posiciona el signo $ adentro de la caja a la izquierda */
      .signo-dolar {
        position: absolute;
        left: 12px;
        font-weight: 700;
        font-size: 1rem;
        color: var(--color-acento, #c68642);
        pointer-events: none; /* Permite hacer clic a través del signo */
      }

      /* Le da un margen izquierdo al texto para no montarse encima del $ */
      .caja-precio input {
        padding-left: 28px;
      }
    `;
  }

  constructor() {
    super();
    this.nombre = this.origen = this.precio = "";
  }

  handler(propiedad) {
    return (event) => {
      let value = event.target.value;
      this[propiedad] = value;
    };
  }

  // Al perder el foco (@blur), formatea automáticamente a 2 decimales
  formatearPrecio() {
    if (this.precio !== "" && !isNaN(this.precio)) {
      this.precio = Number(this.precio).toFixed(2);
    }
  }

  register(event) {
    event.preventDefault();
    let data = {
      nombre: this.nombre,
      origen: this.origen,
      precio: Number(this.precio),
    };
    let options = {
      detail: data,
      bubbles: true,
      composed: true,
    };
    this.dispatchEvent(new CustomEvent("cafeRegister", options));

  }

  render() {
    return html`
      <form @submit="${this.register}">
        <fieldset>
          <legend>Registro de Café Artesanal</legend>

          <div class="campo">
            <label for="nombre">Nombre:</label>
            <input @input="${this.handler("nombre")}"  .value="${this.nombre}" type="text" id="nombre" name="nombre"  required />
          </div>

          <div class="campo">
            <label for="origen">Región de origen:</label>
            <input @input="${this.handler("origen")}" .value="${this.origen}" type="text" id="origen" name="origen" required />
          </div>

          <div class="campo">
            <label for="precio">Precio:</label>
            <div class="caja-precio">
              <span class="signo-dolar">$</span>
              <input @input="${this.handler("precio")}" @blur="${this.formatearPrecio}" .value="${this.precio}" type="number" id="precio" name="precio" min="0" step="0.01"  required />
            </div>
          </div>

          <button type="submit">Agregar al catálogo</button>
        </fieldset>
      </form>
    `;
  }
}

window.customElements.define("wc-register", Register);
