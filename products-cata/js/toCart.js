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


function sum(input){
    var total =  0;
    for(var i=0;i<input.length;i++){ 
            total += Number(input[i]);
    }
    return total;
}

let countRowsInTable = 0;
priceArr = [];

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
                            <a href="#" class="remove" ammount="${course.price}" data-id="${course.id}">X</a>
                        </td>
                    </tr>
                    `
    if(countRowsInTable < 1){
        let t = document.getElementById('total')
        let h = document.createElement('h3')
        t.appendChild(h)
    }
    
    priceArr[countRowsInTable] = course.ammount;
    const summPricesInArray = sum(priceArr);
    $('#total h3').html(summPricesInArray);

    shoppingCartContent.appendChild(row);
    countRowsInTable++;
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
    const price = e.target.attributes.ammount.value;
    priceArr[countRowsInTable] = -price;
    $('#total h3').html(sum(priceArr));
    if (e.target.classList.contains('remove')) {
        e.target.parentElement.parentElement.remove();
    }
    countRowsInTable++;
}

function clearCart() {
    console.log(shoppingCartContent.firstChild)
    while (shoppingCartContent.firstChild) {
        shoppingCartContent.removeChild(shoppingCartContent.firstChild);
    }
}