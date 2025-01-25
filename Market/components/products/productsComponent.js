import { productsList } from "../../controllers/productsController.js";
import { addProduct } from "../../controllers/productsController.js";
import { updateProductList } from "../../controllers/productsController.js";
import { calculateTotals } from "../../controllers/productsController.js";
class ProductsComponent extends HTMLElement {
    constructor() {
      super();
      const shadow = this.attachShadow({ mode: 'open' });
      shadow.innerHTML = /*html*/ `
      <div class="container">
          <table>
              <tr>
                  <td>Products
                      <select id="productSelect">
                          <option value="">Choose an option</option>
                      </select>
                      <div id="selectedProducts"></div>
                  </td>
              </tr>
              <tr>
                  <td>ID <input type="text" id="productIdInput" readonly></td>
              </tr>
              <tr>
                  <td>Unit Price <input type="text" id="productPriceInput" readonly></td>
              </tr>
              <tr>
                  <td>Quantity <input type="number" id="quantity" min="1"> <button onclick="addProduct()">Add Product</button></td> 
              </tr>
          </table>
      </div>
    `;
    }
    connectedCallback() {
      productsList(this)
      addProduct(this)
      updateProductList(this)
      calculateTotals(this)
    }
  }
  
  customElements.define('products-component', ProductsComponent);