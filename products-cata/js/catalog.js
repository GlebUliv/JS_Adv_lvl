let products = [
    new Product("iPhone Xii", "Smartphone", [1, 2, 3], "100", "EUR", 1),
    new Product("iMac Xiiii", "PC", [1, 2, 3], "100", "EUR", 1),
    new Product("iPad iX", "Tablet", [1, 2, 3], "100", "EUR", 1)
]


function renderProductsGrid( selector ){
    let wrapper = document.querySelector( '#product - grid' )
        products.forEach(  
            product  => wrapper.appendChild( product.render() )   
        )
}