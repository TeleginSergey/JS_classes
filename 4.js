// Задача: Система онлайн-заказов
// Условие:
// Создайте классы для системы онлайн-заказов:
// Customer — представляет покупателя с именем и email.
// Order — представляет заказ и содержит:
// Список товаров (объекты класса Product).
// Сумму заказа.
// Покупателя, оформившего заказ (объект класса Customer).

// Создайте класс Product, который имеет свойства:
// name — название товара.
// price — цена товара.

// Класс Order должен иметь методы:
// addProduct(product, quantity) — добавляет товар в заказ.
// calculateTotal() — рассчитывает итоговую сумму заказа.
// printOrder() — выводит информацию о заказе: покупатель, товары, общая стоимость.
// Создайте несколько покупателей, товары, оформите несколько заказов и выведите информацию о каждом заказе.


class Product{
    constructor(name, price){
        this.name = name,
        this.price = price
    }
}


class Customer{
    constructor(name, email){
        this.name = name,
        this.email = email
    }
}


class Order{
    constructor(products, customer){
        this.products = products || [],
        this.customer = customer
    }

    calculateTotal(){
        let summ = 0;
        for (let i = 0; i<this.products.length; i++){
            summ += this.products[i].price
        }
        return summ
    }

    addProduct(product, quantity){
        for (let i = 0; i<quantity; i++){
            this.products.push(product);
        }
    }

    printOrder(){
        console.log(`Customer: ${this.customer.name}`)
        console.log('Goods:')
        for (let i = 0; i<this.products.length;i++){
            console.log(this.products[i].name)
        }
        console.log(`Total price: ${this.calculateTotal()}`)
    }
}

const potato = new Product('potato', 60);
const tomato = new Product('tomato', 100);
const pizza = new Product('pizza', 500);

const customer1 = new Customer('Ivan', 'ivan@mail.ru');
const customer2 = new Customer('Sofia', 'sofia@mail.ru');

const order1 = new Order([potato, tomato, pizza], customer1);
const order2 = new Order([pizza, tomato, tomato], customer2);


console.log(order1.calculateTotal());

order2.printOrder();
order2.addProduct(potato, 3);
order2.printOrder();