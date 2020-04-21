let products = [
    new Product(100, "iPhone Xii", "Smartphone", 
    [
        'images/iPhone-1.jpg', 
        'images/iPhone-2.jpg', 
        'images/iPhone-3.jpg'
    ], 
    { ammount: 200, currency: "EUR" }, 1),


    new Product(101, "iMac Xiiii", "PC", 
    [
        'images/iMac-1.jpg', 
        'images/iMac-2.jpg', 
        'images/iMac-3.jpg'
    ], 
    { ammount: 100, currency: "EUR" }, 1),


    new Product(102,"iPad iX", "Tablet", 
    [
        'images/iPad-1.jpg',
        'images/iPad-2.jpg',
        'images/iPad-3.jpg'
    ], 
    { ammount: 100, currency: 'EUR'}, 1),

    // new Product(103, "iPad iX", "Tablet",
    //     [
    //         'images/iPad-1.jpg',
    //         'images/iPad-2.jpg',
    //         'images/iPad-3.jpg'
    //     ],
    //     { ammount: 100, currency: 'EUR' }, 1),


]


function renderProductsGrid(){
    let wrapper = document.querySelector('#product-grid')
        products.forEach(  
            product => {
                wrapper.appendChild( product.render() )
                $(`.p-${product.id} .images`).addClass('owl-carousel').owlCarousel({
                    loop: true,
                    margin: 10,
                    nav: true,
                    responsive: {
                        0: {
                            items: 3
                        },
                        600: {
                            items: 2
                        },
                        1000: {
                            items: 1
                        }
                    }
                })
                
                $('.product h4').addClass('item_title');
                $('.product').addClass('info-card');
                $('.info b:nth-child(1)').addClass('item_price');
                // $('.cart .btn').addClass('add_item')
                // $(document).ready(function () {
                //     $(`.p-${product.id} .cart .btn`).click(function () {
                //         let id = $(`.p-${product.id}`).attr('id')
                //         // $('.dropdown-menu').append('id of product is: ' + id)
                //         // $('.dropdown-menu').append(`.p-${product.id}`)
                //     });
                // });

                

                $(`#product-grid .product .btn`).text('Add to cart')
                
                $(`.p-${product.id} .images .owl-nav`).removeClass('disabled');
                
                $(`.p-${product.id} .images .owl-nav`).click(function (event) {
                    $(this).removeClass('disabled');
                });
            }   
        )
}


renderProductsGrid('#product-grid');
