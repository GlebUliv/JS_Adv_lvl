class Order {
    constuctor(id, name, cost) {
        this.id = id                // A
        this.name = name        // A
        this.cost = cost            // A
    }
}


let data = {
    orders: [
        order1 = new Order(10, "John", 100.00),
        order2 = new Order(11, "Marry", 150.00),
        order3 = new Order(12, "Jack", 200.00),
    ]
}

let res = Object.entries(data)
    .filter(([, value]) => Array.isArray == true )
    .map(([value]) => value.name )
console.log(res)

let { orders: [ { id1, name1, cost1 }, { id2, name2, cost2 }, { id3, name3, cost3} ] } = data

console.log(id1, name2, cost3)


// let clients = [data.orders[0].name, data.orders[1].name, data.orders[2].name] // B

let data = {
    orders: {
        numbers1: [10, 14, 57],
        numbers2: [19, 58, 90]
    },
    time: 345897,
    name: 'Micky'
}

let{ orders: {numbers1:[a1, b1, c1], numbers2:[a2, b2, c2]} } = data

console.log(a1, c1, b2, c2)