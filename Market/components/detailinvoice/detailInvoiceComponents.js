import { productsList } from "../../controllers/productsController.js";
class DetailComponent extends HTMLElement {
    constructor() {
      super();
      const shadow = this.attachShadow({ mode: 'open' });
      shadow.innerHTML = /*html*/ `
      <div class="container">
      <table>
        <thead>
              <tr>
                  <th>ID</th>
                  <th>Product</th>
                  <th>Unit Price</th>
                  <th>Quantity</th>
                  <th>Subtotal</th>
              </tr>
          </thead>
          <tbody id="productList"></tbody>
          <tfoot>
            <tr>
                <td colspan="4">Subtotal</td>
                <td id="subtotal">$0.00</td>
            </tr>
            <tr>
                <td colspan="4">IVA (19%)</td>
                <td id="iva">$0.00</td>
            </tr>
            <tr>
                <td colspan="4">Total</td>
                <td id="total">$0.00</td>
            </tr>
        </tfoot>
        </table>
        <button onclick="generateInvoiceSummary()">Generate Invoice</button>
      </div>
    `;
    }
    connectedCallback() {
      productsList(this)
    }
  }
  customElements.define('detail-component', DetailComponent);