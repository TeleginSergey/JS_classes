// 3. Библиотека
// Условие:
// Создайте класс Book, который будет представлять книгу с такими свойствами:
// title — название книги.
// author — автор книги.
// pages — количество страниц.

// Создайте класс Library, который управляет коллекцией книг. Этот класс должен иметь следующие методы:
// addBook(book) — добавляет книгу в библиотеку.
// findBooksByAuthor(author) — возвращает все книги данного автора.
// listAllBooks() — выводит список всех книг в библиотеке.

// Создайте класс LibraryUser, который может:
// Брать книгу на время (borrowBook(book)).
// Возвращать книгу в библиотеку (returnBook(book)).
// Каждый пользователь может одновременно иметь не более 3 книг. Если он пытается взять больше — программа должна выдавать ошибку.

// Ожидаемый результат:
// Пользователь может брать книги из библиотеки и возвращать их.
// Можно искать книги по автору и выводить список всех доступных книг.
// Ограничение на количество взятых книг работает корректно.


class Book {
    constructor(title, author, pages) {
        this.title = title;
        this.author = author;
        this.pages = pages;
    }
}

class Library {
    constructor() {
        this.books = [];
    }

    addBook(book) {
        this.books.push(book);
    }

    findBooksByAuthor(author) {
        const authorBooks = [];
        for (let i = 0; i < this.books.length; i++) {
            if (this.books[i].author === author) {
                authorBooks.push(this.books[i]);
            }
        }
        return authorBooks; // Возвращаем найденные книги
    }

    listAllBooks() {
        console.log("Список всех книг в библиотеке:");
        for (let i = 0; i < this.books.length; i++) {
            console.log(`${this.books[i].title} by ${this.books[i].author}`);
        }
    }
}

class LibraryUser {
    constructor(name) {
        this.name = name;
        this.borrow_books = [];
    }

    borrowBook(book) {
        if (this.borrow_books.length < 3) {
            console.log(`${this.name} взял книгу "${book.title}"`);
            this.borrow_books.push(book);
        } else {
            console.log(`Пользователь не может иметь больше 3 книг! ${this.name} уже имеет 3 книги`);
        }
    }

    returnBook(book) {
        const bookIndex = this.borrow_books.indexOf(book);
        if (bookIndex !== -1) {
            console.log(`${this.name} вернул книгу "${book.title}"`);
            this.borrow_books.splice(bookIndex, 1);
        } else {
            console.log(`Книга "${book.title}" не найдена среди взятых книг.`);
        }
    }

    listBorrowedBooks() {
        console.log(`${this.name} взял следующие книги:`);
        for (let i = 0; i < this.borrow_books.length; i++) {
            console.log(`${this.borrow_books[i].title} by ${this.borrow_books[i].author}`);
        }
    }
}


const library = new Library();
const book1 = new Book("Dota", "Valve", 328);
const book2 = new Book("Maxim", "Maksim", 281);
const book3 = new Book("The Great Gatsby", "Nikita", 180);
const book4 = new Book("Hello, World!", "Sergey", 268);

library.addBook(book1);
library.addBook(book2);
library.addBook(book3);
library.addBook(book4);

library.listAllBooks();

const user = new LibraryUser("Алексей");
user.borrowBook(book1);
user.borrowBook(book2);
user.borrowBook(book3);
user.borrowBook(book4);

user.listBorrowedBooks();
user.returnBook(book2);
user.listBorrowedBooks();
