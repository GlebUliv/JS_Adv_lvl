// module

// class Product {
//     constructor( ...props ) {
//         [this.id, this.name, this.category, this.images, this._price = {}, this.price, this.quantity] = props
//     }



class Product {
    constructor(id, name, category, images, price, quantity) {
        this.id = id
        this.name = name
        this.category = category
        this.images = images
        this._price = {}
        this.price = price
        this.quantity = quantity
    }


    // ----------------------------------------------------------------------------------------

    get id(){
        return this._id
    }

    set id(value){
        typeof value !== 'null' && typeof value !== 'undefined' && typeof value !== 'boolean' ? this._id = value : console.error('Cant be assigned!!')
    }

    // ---------------------------------------------------------------------

    get name() {
        return this._name
    }

    set name(value) {
        value != "" ? this._name = value : console.error('Please right the name of product')
        // if( value == true){
        //     this._name = value
        // }else{
        //     console.error('Please right the name of product')
        // }
    }

    // ----------------------------------------------------------------------------------

    get category(){
        return this._category
    }

    set category(value){
        typeof value == 'string' ? this._category = value : console.error("Not a String")
        // if(typeof this.category == 'string'){
        //     this._category = value
        // }else{
        //     console.error("Not a String")
        // }
    }

    // --------------------------------------------------------------------------------

    get images(){
        return this._images
    }

    set images(value){
        Array.isArray(value) == true ? this._images = value : console.error('Not an Array')
    }

    // ---------------------------------------------------------------------------------

    get price() {
        return this._price
    }

    set price(value) {
        if(Object.keys(value).includes('ammount') && Object.keys(value).includes('currency') == true) {
            this.ammount = value.ammount 
            this.currency = value.currency
            // let { price: { ammount, currency } } = Product 
        } else {
            console.error('Not all properties') 
        } 
    }
    
    // ------------------------------------------------------------------------------------------

    // this.price = { 'amount': amount, 'currency': currency }


    get ammount(){
        return this._price.ammount
    }

    set ammount(value){
        typeof value == 'number' ? this._price.ammount = value : console.error('Its not a number')
    }

    // ----------------------------------------------------------------------------------------------

    get currency() {
        return this._price.currency
    }

    set currency(value) {
        typeof value == 'string' ? this._price.currency = value : console.error('Wrong currency')
    }

    // ---------------------------------------------------------------------------------------------

    get quantity(){
        return this._quantity
    }

    set quantity(value){
        Number.isInteger(value) == true ? this._quantity = value : console.error('Not an Integer')
    }

    // properties: 
       // category / string
       // images / [] 
       // price: {  amount: 100.00, currency: "EUR" }
       // quantity:  number (integer)
    
    // constructor, set, get 
    
    

    // function that renders this product
    // return DOM structure
    

    

    render(){

        let div = document.createElement('div')
            // div.setAttribute('class', 'product')
            div.classList.add('product')
            div.classList.add('p-' + this.id)
            div.setAttribute('id', `product-` + this.id)
            div.classList.add('col-sm-4')
            div.appendChild(document.createElement('h4') )   
            div.firstElementChild.innerHTML = this.name

        let divCategory = document.createElement('div')
            divCategory.setAttribute('class', 'category')
            // divCategory.classList.add('mt-3')
            div.appendChild(divCategory)
            divCategory.appendChild(document.createElement('h5'))
            divCategory.firstElementChild.innerHTML = this.category

        let imgArr = document.createElement('div')
            imgArr.setAttribute('class', 'images')
            imgArr.classList.add('mt-5')
            div.appendChild(imgArr)


        for(let n = 0; n < this.images.length; n++){
            let img = document.createElement('img')
            img.setAttribute('src', this.images[n])
            img.setAttribute('class', 'img')
            img.classList.add('p-1')
            imgArr.appendChild(img)
        }
        
        let divinfo = document.createElement('div')
            divinfo.classList.add('info')
            divinfo.classList.add('mt-5')
            div.appendChild(divinfo)
            
        divinfo.innerHTML = `<b>Price:</b> <span>${this.price.ammount}</span> <b>${this.price.currency}</b> <br><b>Quantity:</b> <span>${this.quantity}</span>`

        let divForCart = document.createElement('div')
            divForCart.classList.add('cart')
            div.appendChild(divForCart)

        let toCart = document.createElement('a')
            toCart.setAttribute('data-id', `${this.id}`)
            toCart.setAttribute('class', 'btn btn-primary btn-lg mt-5 input add-to-cart')
            divForCart.appendChild(toCart)


        return div    
    }

    

}
