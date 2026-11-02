import { LitElement, html, css } from 'lit-element';
import "./table";
import "./register";
class Home extends LitElement {
    static get properties() {
        return {
            studentlist: { type: Array }
        };
    }
    constructor() {
        super();
         this.studentlist=[
            {nombre:"Ian", apellido:"Escobar", edad:20},
            {nombre:"Juan", apellido:"Perez", edad:30},
            {nombre:"Maria", apellido:"Gomez", edad:25}
        ];
    }
    addlist(event){
        const student = {
            nombre: event.detail.name,
            apellido: event.detail.lastName,
            edad: event.detail.age
        };
        this.studentlist = [...this.studentlist, student];
    }
    render() {
        return html`
        <wc-form-register @registerStudent=${this.addlist}></wc-form-register>
        <wc-table .list=${this.studentlist}></wc-table>
        `;
    }
}
window.customElements.define('wc-home', Home);