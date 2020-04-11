let courses = document.querySelector('.courses-list')
shoppingCartContent = document.querySelector('#cart-content tbody')

loadEventListeners();

function loadEventListeners() {
    //when new course is added
    courses.addEventListener('click', buyCourse); 
    
    function buyCourse(e) {
        if (e.target.classList.contains('add-to-cart')) {
            //read the course value
            const course = e.target.parentElement.parentElement;
            getCourseInfo(course);
        }
    }
}

function getCourseInfo(course) {
   
    //create an Object with course data
    let courseInfo = {
        image: course.querySelector('img').src,
        name: course.querySelector('h4').textContent,
        price: course.querySelector('.item_price + span').textContent,
        ammount: course.querySelector('.item_price + span').textContent,
        id: course.querySelector('.cart a').getAttribute('data-id'),
        quantity: course.querySelector('.item_price + span + span')
    }


    addToCart(courseInfo);
}

let shoppingCart = (function () {

cart = [];
let obj = {}

    // Total cart
    obj.totalCart = function () {
        let totalCart = 0;
        for (let course in cart) {
            totalCart += cart[course].price * cart[course].quantity;
        }
        return Number(totalCart.toFixed(2));
    }

    return obj;

})();

function addToCart(course) {
    let row = document.createElement('tr');

    row.innerHTML = `
<tr>
    <td>
        <img src="${course.image}" width="100">    
    </td>   
    <td style="font-size: 14px">
        ${course.name}
    </td>
     <td style="font-size: 14px">
        ${course.price}
    </td>
     <td>
        <a href="#" class="remove" data-id="${course.id}">X</a>
    </td>
</tr>
`

    let t = document.getElementById('total')
    let h = document.createElement('h3')
    t.appendChild(h)
    $('#total h3').html(shoppingCart.totalCart());


    // let t = document.getElementById('total')
    // let h = document.createElement('h3')
    // h.classList.add('total')
    // h.innerHTML = `<div> 
    // ${total}
    // </div>
    // `
    // t.appendChild(h)
        

    shoppingCartContent.appendChild(row);
}



// shoppingCartContent = document.querySelector('#cart-content tbody')
// clearCartBtn = document.querySelector('#clear-cart')
// loadEventListeners();

function loadEventListeners() {
    //when new course is added
    courses.addEventListener('click', buyCourse);

    function buyCourse(e) {
        if (e.target.classList.contains('add-to-cart')) {
            //read the course value
            const course = e.target.parentElement.parentElement;
            getCourseInfo(course);
        }
    }

    shoppingCartContent.addEventListener('click', removeCourse);
    document.querySelector('#clear-cart').addEventListener('click', clearCart);
}

function removeCourse(e) {
    if (e.target.classList.contains('remove')) {
        e.target.parentElement.parentElement.remove();
    }
}

function clearCart() {
    console.log(shoppingCartContent.firstChild)
    while (shoppingCartContent.firstChild) {
        shoppingCartContent.removeChild(shoppingCartContent.firstChild);
    }
}