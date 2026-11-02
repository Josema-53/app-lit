import { LitElement, html, css } from 'lit-element';
class Button extends LitElement {

    static get properties() {
        return {
            text: { type: String, attribute: true },
        };
    }

    constructor() {
        super();
        this.text = 'Aceptar';
    }
    static get styles() {
        return css` 
            button {
                all: initial;
                background-color: #3300ff;
                color: white;   
                font-family: cursive;
                margin-right: 20px;
                width: 150px;
                border-radius: 10px;
                text-align: center;
                padding: 2px;
                cursor: pointer;
            }
        `;
    }
    firstUpdated() {
        this.button = this.shadowRoot.querySelector('button');
    }
    mouseUpListener() {
        this.button.style.backgroundColor = '#3300ff';
    }
    mouseDownListener() {
        this.button.style.backgroundColor = '#ff0000';
    }

    render() {
        return html`
            <button @mousedown="${this.mouseDownListener}"
            @mouseup="${this.mouseUpListener}">
            ${this.text}
        </button>
        `;  
    }
}
window.customElements.define('wc-button', Button);