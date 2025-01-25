import { generateInvoiceNumber } from "../../controllers/headerController.js";
class HeaderComponent extends HTMLElement {
    constructor() {
      super();
      const shadow = this.attachShadow({ mode: 'open' });
      shadow.innerHTML = /*html*/ `
      <div class="container">
        <table>
          <tr>
              <td>Invoice Number <input type="text" id="invoiceNumber" readonly></td>
          </tr>
          <tr>
              <td>ID <input type="text" id="1"></td>
          </tr>
          <tr>
              <td>Name<input type="text" id="2"></td> <td>Last Name <input type="text" id="2.1"></td>
          </tr>
          <tr>
              <td>Address <input type="text" id="3"></td>
          </tr>
          <tr>
              <td>Email <input type="text" id="4"></td>
          </tr>
        </table>
      </div>
    `;
    }
    connectedCallback() {
      this.shadowRoot.getElementById('invoiceNumber').value = generateInvoiceNumber();
      
    }
  } 
  
  customElements.define('header-component', HeaderComponent);