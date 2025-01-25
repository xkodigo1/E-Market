import { productos } from "../data/productsArray.js";

export function productsList (componentProduct) {
    const selectElement = componentProduct.shadowRoot.getElementById('productSelect');
    const productIdInput = componentProduct.shadowRoot.getElementById('productIdInput');    
    const productPriceInput = componentProduct.shadowRoot.getElementById('productPriceInput')

    productos.forEach(product => {
    const option = document.createElement('option');
    option.value = product.id;
    option.textContent = `${product.name}`;
    selectElement.appendChild(option);
    });

    selectElement.addEventListener('change', (event) => {
        const selectedProductId = event.target.value;
        productIdInput.value = selectedProductId;
    });

    selectElement.addEventListener('change', (event) => {
        const selectedProductPrice = productos.find(product => product.id === event.target.value).price;
        productPriceInput.value = selectedProductPrice;
    });

}
let products = [];

export function addProduct(productComponent) {
    const select = productComponent.shadowRoot.getElementById('productSelect');
    const quantity = productComponent.shadowRoot.getElementById('quantity').value;
    
    if (!select.value) return;

    const [id, name, price] = select.value.split('|');
    const subtotal = parseFloat(price) * parseInt(quantity);

    products.push({
        id, 
        name, 
        price: parseFloat(price), 
        quantity: parseInt(quantity), 
        subtotal
    });

    updateProductList();
    calculateTotals();

    select.selectedIndex = 0;
    document.getElementById('quantity').value = 1;
}

export function updateProductList() {
    const list = document.getElementById('productList');
    list.innerHTML = '';

    products.forEach(product => {
        list.innerHTML += `
            <tr>
                <td>${product.id}</td>
                <td>${product.name}</td>q
                <td>$${product.price.toFixed(2)}</td>
                <td>${product.quantity}</td>
                <td>$${product.subtotal.toFixed(2)}</td>
            </tr>
        `;
    });
}
export function calculateTotals() {
    const subtotalValue = productos.reduce((sum, product) => sum + product.subtotal, 0);
    const ivaValue = subtotalValue * 0.19;
    const totalValue = subtotalValue + ivaValue;

    document.getElementById('subtotal').textContent = `$${subtotalValue.toFixed(2)}`;
    document.getElementById('iva').textContent = `$${ivaValue.toFixed(2)}`;
    document.getElementById('total').textContent = `$${totalValue.toFixed(2)}`;
}