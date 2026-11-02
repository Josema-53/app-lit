import { LitElement, html, css } from 'lit-element';
class Table extends LitElement {
    static get properties() {
        return {
            list: { type: Array }
        };
    }

    static get styles() {
        return css`
            :host {
                display: block;
                max-width: 720px;
                margin: 32px 0;
                font-family: Arial, sans-serif;
            }

            h1 {
                margin-bottom: 16px;
                color: #222;
                font-size: 28px;
            }

            table {
                width: 100%;
                border-collapse: collapse;
                overflow: hidden;
                border: 1px solid #d9d9d9;
                border-radius: 8px;
                background-color: white;
                box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
            }

            th,
            td {
                padding: 12px 16px;
                text-align: left;
                border-bottom: 1px solid #e5e5e5;
            }

            th {
                background-color: #2e7d32;
                color: white;
                font-weight: bold;
            }

            tbody tr:nth-child(even) {
                background-color: #f1f8f1;
            }

            tbody tr:hover {
                background-color: #dcefdc;
            }

            tbody tr:last-child td {
                border-bottom: 0;
            }
        `;
    }

    constructor() {
        super();
        this.list = [];
    }

    render() {
        return html`
            <h1>Tabla de registros</h1>
          <table>
            <thead>
                <tr>
                    <th>Nombre</th>
                    <th>Apellido</th>
                    <th>Edad</th>
                </tr>
            </thead>
            <tbody>
                ${
                    this.list.map(element =>{
                            return html`
                                <tr>
                                    <td>${element.nombre}</td>
                                    <td>${element.apellido}</td>
                                    <td>${element.edad}</td>
                                  </tr>
                            `;
                        })
                }


            </tbody>

             </table>  
        `;
    }
}
window.customElements.define('wc-table', Table);