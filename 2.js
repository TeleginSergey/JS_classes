// 2. Кассовый аппарат
// Условие:
// Создайте класс Product, который будет представлять товар с характеристиками:
// name — название товара.
// price — цена товара.

// Создайте класс ShoppingCart, который будет представлять корзину покупок. Этот класс должен иметь следующие методы:
// addProduct(product, quantity) — добавляет товар в корзину.
// removeProduct(product) — удаляет товар из корзины.
// getTotalPrice() — возвращает общую стоимость всех товаров в корзине.
// checkout() — выводит список всех товаров и общую сумму к оплате, затем очищает корзину.

// Создайте несколько объектов класса Product, добавьте их в корзину и рассчитайте итоговую сумму покупок.

// Ожидаемый результат:
// Можно добавлять и удалять товары из корзины.
// Корзина корректно рассчитывает общую стоимость товаров.
// Метод checkout() выводит итоговый список покупок и очищает корзину.


class Product {
    constructor(name, price) {
        this.name = name;
        this.price = price;
    }
}

class ShoppingCart {
    constructor() {
        this.products = [];
    }

    addProduct(product, quantity) {
        for (let i = 0; i < quantity; i++) {
            this.products.push(product);
        }
    }

    removeProduct(product) {
        const index = this.products.indexOf(product);
        if (index !== -1) {
            this.products.splice(index, 1);
        }
    }

    getTotalPrice() {
        let sum = 0;
        for (let i = 0; i < this.products.length; i++) {
            sum += this.products[i].price;
        }
        return sum;
    }

    checkout() {
        let productList = this.products.map(product => product.name).join(', ');
        console.log(`Вы выбрали товары: ${productList} на общую сумму ${this.getTotalPrice()} рублей.`);
        this.products = [];
    }
}


const potato = new Product('картофель', 60);
const tomato = new Product('помидор', 100);
const pizza = new Product('пицца', 500);

const shoppingCart = new ShoppingCart();
shoppingCart.addProduct(potato, 2);
shoppingCart.addProduct(tomato, 1);
shoppingCart.addProduct(pizza, 1);

shoppingCart.checkout();


shoppingCart.addProduct(potato, 2);
shoppingCart.addProduct(tomato, 1);
shoppingCart.addProduct(pizza, 1);
shoppingCart.removeProduct(pizza);

shoppingCart.checkout();
