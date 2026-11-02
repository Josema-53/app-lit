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
            {nombre:"Jose", apellido:"Sandoval", edad:21},
            {nombre:"Ian", apellido:"Escobar", edad:20},
            {nombre:"Diego", apellido:"Alcaciega", edad:20}
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