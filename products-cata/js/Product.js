// module

class Product {
    constructor(_name, _category, _images, _amount, _currency, _quantity ) {
        this.name = _name
        this.category = _category
        this.images = _images
        this.price =  {
           'amount': _amount,
           'currency' : _currency
        }
        this.quantity = _quantity
    }

    // ----------------------------------------------------------------------------------------

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
        typeof this.category == 'string' ? this._category = value : console.error("Not a String")
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
        Array.isArray(this.images) == true ? this._images = value : console.error('Not an Array')
    }

    // ---------------------------------------------------------------------------------

    get price() {
        return this._price
    }

    set price(value) {
        Object.keys(value) == ['amount', 'currency'] ? this._price = value : console.error('Not all properties')
    }
    
    // ------------------------------------------------------------------------------------------

    get quantity(){
        return this._quantity
    }

    set quantity(value){
        Number.isInteger(this.quantity) == true ? this._quantity = value : console.error('Not an Integer')
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

        let div = document.createElement("div")
            div.appendChild( document.createElement("h2") )   
            div.firstElementChild.innerHTML = this.name

        return div    
    }

}
