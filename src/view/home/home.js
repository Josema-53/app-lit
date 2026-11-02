import { LitElement, html, css } from 'lit-element';
import "./table";
import "./register";
class Home extends LitElement {
    static get properties() {
        return {
            bebidas: { type: Array }
        };
    }
    constructor() {
        super();
        this.bebidas = [
            { nombre: "Té verde con limón", categoria: "Té", precio: 1.50 },
            { nombre: "Hidratante de maracuyá", categoria: "Bebida hidratante", precio: 1.25 },
            { nombre: "Jugo de naranja", categoria: "Jugo natural", precio: 2.00 }
        ];
    }
    addBebida(event) {
        const bebida = {
            nombre: event.detail.nombre,
            categoria: event.detail.categoria,
            precio: Number(event.detail.precio)
        };
        this.bebidas = [...this.bebidas, bebida];
    }
    render() {
        return html`
        <wc-form-register @registerBebida=${this.addBebida}></wc-form-register>
        <wc-table .list=${this.bebidas}></wc-table>
        `;
    }
}
window.customElements.define('wc-home', Home);
