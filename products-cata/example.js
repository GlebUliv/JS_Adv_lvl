class Product {
    constructor(id, name, category, images, price, quantity) {
        this.id = id
        this.name = name
        this.category = category
        this.images = images
        this.price = {}
        this._price = price
        this.quantity = quantity
    }
}

let { constructor: { price : { ammount = 'ammount', currency = 'currency' } } } = Product;
console.log(ammount, currency)