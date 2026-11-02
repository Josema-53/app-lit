import { LitElement, html } from "lit-element";
import "../../externos/equipo-3/register.js"; // formulario del equipo 3 (Café Raíz), commit c9909e4
import "../home/table.js"; // tabla de nuestro equipo (tienda de bebidas)

class Integracion extends LitElement {
  static get properties() {
    return {
      lista: { type: Array },
    };
  }

  constructor() {
    super();
    // Se inicializa vacía: <wc-table> hace this.list.map y fallaría con undefined
    this.lista = [];
  }

  // Adaptador: convierte el detail del equipo 3 { nombre, origen, precio }
  // al formato de nuestra tabla { nombre, categoria, precio }
  agregar(event) {
    const fila = {
      nombre: event.detail.nombre,
      categoria: `Café de ${event.detail.origen}`,
      precio: Number(event.detail.precio),
    };
    // Arreglo nuevo para que Lit detecte el cambio y vuelva a renderizar
    this.lista = [...this.lista, fila];
  }

  render() {
    return html`
      <wc-register @cafeRegister="${this.agregar}"></wc-register>
      <wc-table .list="${this.lista}"></wc-table>
    `;
  }
}

window.customElements.define("wc-integracion", Integracion);
